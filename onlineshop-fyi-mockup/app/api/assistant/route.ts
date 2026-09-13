import { NextResponse } from "next/server";
import { createChatCompletion, type ChatMessage } from "@/lib/openai";
import { buildSiteAssistantSystemPrompt } from "@/lib/assistantContext";

const MAX_MESSAGE_LENGTH = 2000;
const MAX_HISTORY = 10;

interface IncomingMessage {
  role?: unknown;
  content?: unknown;
}

export async function POST(request: Request) {
  if (!process.env.OPENAI_API_KEY) {
    return NextResponse.json({ error: "The assistant isn't configured yet." }, { status: 503 });
  }

  const body = await request.json();
  const incoming: IncomingMessage[] = Array.isArray(body?.messages) ? body.messages : [];

  const history: ChatMessage[] = incoming
    .filter((message) => (message?.role === "user" || message?.role === "assistant") && typeof message?.content === "string")
    .slice(-MAX_HISTORY)
    .map((message) => ({
      role: message.role as "user" | "assistant",
      content: (message.content as string).slice(0, MAX_MESSAGE_LENGTH),
    }));

  if (history.length === 0 || history[history.length - 1].role !== "user") {
    return NextResponse.json({ error: "Send a message to get a reply." }, { status: 400 });
  }

  try {
    const reply = await createChatCompletion([
      { role: "system", content: buildSiteAssistantSystemPrompt() },
      ...history,
    ]);

    return NextResponse.json({ reply });
  } catch (error) {
    console.error("Assistant API error:", error);
    return NextResponse.json({ error: "Something went wrong generating a reply." }, { status: 502 });
  }
}
