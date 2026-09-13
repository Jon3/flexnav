"use client";

import { useRef, useState, type FormEvent } from "react";

interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

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

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

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
        <div className="mb-3 flex h-[28rem] w-80 max-w-[calc(100vw-2.5rem)] flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl">
          <div className="flex items-center justify-between bg-brand-700 px-4 py-3 text-white">
            <p className="text-sm font-semibold">Ask about NHS Top Up</p>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close chat"
              className="rounded p-1 text-white/90 hover:bg-white/10"
            >
              ✕
            </button>
          </div>

          <div className="flex-1 space-y-3 overflow-y-auto px-4 py-3 text-sm">
            {messages.length === 0 && (
              <p className="text-slate-500">
                Ask a question about the proposal, how to get involved, or where things currently stand. This is an
                AI assistant answering from the site&apos;s own content — it can get things wrong, and it&apos;s not
                official NHS or medical advice.
              </p>
            )}
            {messages.map((message, index) => (
              <div
                key={index}
                className={`rounded-lg px-3 py-2 ${
                  message.role === "user" ? "ml-6 bg-brand-50 text-brand-900" : "mr-6 bg-slate-100 text-slate-800"
                }`}
              >
                {message.content}
              </div>
            ))}
            {pending && <div className="mr-6 rounded-lg bg-slate-100 px-3 py-2 text-slate-500">Thinking…</div>}
            {error && <div className="mr-6 rounded-lg bg-amber-50 px-3 py-2 text-amber-800">{error}</div>}
          </div>

          <form onSubmit={handleSubmit} className="flex items-center gap-2 border-t border-slate-200 p-3">
            <input
              ref={inputRef}
              type="text"
              placeholder="Type a question…"
              disabled={pending}
              className="flex-1 rounded-full border border-slate-300 px-3 py-2 text-sm focus:border-brand-600 focus:outline-none focus:ring-1 focus:ring-brand-600 disabled:opacity-60"
            />
            <button
              type="submit"
              disabled={pending}
              className="rounded-full bg-brand-700 px-4 py-2 text-sm font-semibold text-white hover:bg-brand-800 disabled:opacity-60"
            >
              Send
            </button>
          </form>
        </div>
      )}

      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-expanded={open}
        aria-label={open ? "Close chat assistant" : "Open chat assistant"}
        className="ml-auto flex h-14 w-14 items-center justify-center rounded-full bg-brand-700 text-white shadow-lg transition-colors hover:bg-brand-800"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} className="h-6 w-6">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"
          />
        </svg>
      </button>
    </div>
  );
}
