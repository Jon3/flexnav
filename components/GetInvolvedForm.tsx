"use client";

import { useState, type FormEvent } from "react";
import { roleOptions } from "@/data/roles";
import { site } from "@/data/site";
import type { InvolvementRole } from "@/types";

interface GetInvolvedSubmission {
  name: string;
  email: string;
  role: InvolvementRole;
  message: string;
}

async function submitGetInvolved(data: GetInvolvedSubmission): Promise<{ ok: boolean }> {
  try {
    const response = await fetch("/api/get-involved", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    return { ok: response.ok };
  } catch {
    return { ok: false };
  }
}

export function GetInvolvedForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "submitted" | "error">("idle");
  const [role, setRole] = useState<InvolvementRole>("supporter");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    setStatus("submitting");

    const result = await submitGetInvolved({
      name: String(form.get("name") ?? ""),
      email: String(form.get("email") ?? ""),
      role,
      message: String(form.get("message") ?? ""),
    });

    if (result.ok) {
      setStatus("submitted");
      event.currentTarget.reset();
      setRole("supporter");
    } else {
      setStatus("error");
    }
  }

  if (status === "submitted") {
    return (
      <div className="rounded-xl border border-brand-200 bg-brand-50 p-6 text-brand-900">
        <p className="font-semibold">Thank you.</p>
        <p className="mt-1 text-sm">
          We&apos;ve noted your interest. Since NHS Top Up is still at the proposal stage, there&apos;s no
          formal onboarding yet — we&apos;ll be in touch as things develop.
        </p>
      </div>
    );
  }

  if (status === "error") {
    return (
      <div className="rounded-xl border border-amber-200 bg-amber-50 p-6 text-amber-900">
        <p className="font-semibold">Sorry, that didn&apos;t send.</p>
        <p className="mt-1 text-sm">
          Something went wrong on our end and your message wasn&apos;t delivered. Please email{" "}
          <a href={`mailto:${site.contactEmail}`} className="font-medium underline">
            {site.contactEmail}
          </a>{" "}
          directly instead.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-slate-900">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          autoComplete="name"
          className="mt-1 block w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-brand-600 focus:outline-none focus:ring-1 focus:ring-brand-600"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-slate-900">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className="mt-1 block w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-brand-600 focus:outline-none focus:ring-1 focus:ring-brand-600"
        />
      </div>

      <fieldset>
        <legend className="block text-sm font-medium text-slate-900">How would you like to help?</legend>
        <div className="mt-2 grid gap-3 sm:grid-cols-2">
          {roleOptions.map((option) => (
            <label
              key={option.value}
              className={`flex cursor-pointer flex-col gap-1 rounded-lg border p-3 text-sm ${
                role === option.value ? "border-brand-600 bg-brand-50" : "border-slate-300"
              }`}
            >
              <span className="flex items-center gap-2 font-medium text-slate-900">
                <input
                  type="radio"
                  name="role"
                  value={option.value}
                  checked={role === option.value}
                  onChange={() => setRole(option.value)}
                  className="h-4 w-4 text-brand-700 focus:ring-brand-600"
                />
                {option.label}
              </span>
              <span className="text-slate-600">{option.description}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-slate-900">
          Anything you&apos;d like to add? <span className="font-normal text-slate-500">(optional)</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={3}
          className="mt-1 block w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-brand-600 focus:outline-none focus:ring-1 focus:ring-brand-600"
        />
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex items-center justify-center rounded-full bg-brand-700 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-800 disabled:opacity-60"
      >
        {status === "submitting" ? "Sending..." : "Count me in"}
      </button>
    </form>
  );
}
