"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";

interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

const GREETING =
  "Hey — I'm the OnlineShop.fyi shopping assistant. Ask me about MegaMenu, Anything Slider, or anything else on the site. Heads up: this whole site is an early mockup, so I'll be upfront about what's real and what's still on the roadmap.";

async function askAssistant(messages: ChatMessage[]): Promise<{ reply?: string; error?: string }> {
  try {
    const response = await fetch("/api/assistant", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ messages }),
    });
    const data = await response.json();
    return response.ok ? { reply: data.reply } : { error: data.error ?? "Something went wrong." };
  } catch {
    return { error: "Something went wrong." };
  }
}

export function AiGreeter() {
  const [open, setOpen] = useState(false);
  const [greeted, setGreeted] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    let alreadyGreeted = false;
    try {
      alreadyGreeted = sessionStorage.getItem("onlineshop-fyi-greeted") === "1";
    } catch {
      alreadyGreeted = false;
    }
    if (alreadyGreeted) return;

    const timer = setTimeout(() => {
      setOpen(true);
      setGreeted(true);
      try {
        sessionStorage.setItem("onlineshop-fyi-greeted", "1");
      } catch {
        // ignore — sessionStorage may be unavailable (private mode, etc.)
      }
    }, 900);

    return () => clearTimeout(timer);
  }, []);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const input = inputRef.current;
    const text = input?.value.trim();
    if (!text || pending) return;

    const nextMessages: ChatMessage[] = [...messages, { role: "user", content: text }];
    setMessages(nextMessages);
    setError(null);
    setPending(true);
    if (input) input.value = "";

    const result = await askAssistant(nextMessages);
    setPending(false);

    if (result.reply) {
      setMessages([...nextMessages, { role: "assistant", content: result.reply }]);
    } else {
      setError(result.error ?? "Something went wrong.");
    }
  }

  return (
    <div className="fixed bottom-5 right-5 z-50">
      {open && (
        <div className="mb-3 flex h-[28rem] w-80 max-w-[calc(100vw-2.5rem)] flex-col overflow-hidden rounded-2xl border border-white/10 bg-ink-900/95 shadow-2xl shadow-glow-violet/20 backdrop-blur">
          <div className="flex items-center justify-between bg-glow-gradient px-4 py-3 text-ink-950">
            <p className="text-sm font-semibold">Shopping assistant</p>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close chat"
              className="rounded p-1 hover:bg-black/10"
            >
              ✕
            </button>
          </div>

          <div className="flex-1 space-y-3 overflow-y-auto px-4 py-3 text-sm">
            {greeted && (
              <div className="mr-6 rounded-lg bg-white/[0.06] px-3 py-2 text-slate-200">{GREETING}</div>
            )}
            {messages.map((message, index) => (
              <div
                key={index}
                className={`rounded-lg px-3 py-2 ${
                  message.role === "user"
                    ? "ml-6 bg-glow-violet/20 text-white"
                    : "mr-6 bg-white/[0.06] text-slate-200"
                }`}
              >
                {message.content}
              </div>
            ))}
            {pending && <div className="mr-6 rounded-lg bg-white/[0.06] px-3 py-2 text-slate-400">Thinking…</div>}
            {error && <div className="mr-6 rounded-lg bg-amber-500/10 px-3 py-2 text-amber-300">{error}</div>}
          </div>

          <form onSubmit={handleSubmit} className="flex items-center gap-2 border-t border-white/10 p-3">
            <input
              ref={inputRef}
              type="text"
              placeholder="Ask about a product…"
              disabled={pending}
              className="flex-1 rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-sm text-white placeholder:text-slate-500 focus:border-glow-cyan focus:outline-none disabled:opacity-60"
            />
            <button
              type="submit"
              disabled={pending}
              className="rounded-full bg-glow-gradient px-4 py-2 text-sm font-semibold text-ink-950 disabled:opacity-60"
            >
              Send
            </button>
          </form>
        </div>
      )}

      <button
        type="button"
        onClick={() => {
          setOpen((value) => !value);
          setGreeted(true);
        }}
        aria-expanded={open}
        aria-label={open ? "Close shopping assistant" : "Open shopping assistant"}
        className="ml-auto flex h-14 w-14 items-center justify-center rounded-full bg-glow-gradient text-ink-950 shadow-lg shadow-glow-violet/30 transition-transform hover:scale-105"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-6 w-6">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 2a1 1 0 011 1v1.06A7.002 7.002 0 0119 11v1h.5a1.5 1.5 0 010 3H19v.5a3.5 3.5 0 01-3.5 3.5h-7A3.5 3.5 0 015 15.5V15h-.5a1.5 1.5 0 010-3H5v-1a7.002 7.002 0 016-6.94V3a1 1 0 011-1zM9 12a1 1 0 100 2 1 1 0 000-2zm6 0a1 1 0 100 2 1 1 0 000-2z"
          />
        </svg>
      </button>
    </div>
  );
}
