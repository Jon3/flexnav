import type { Metadata } from "next";
import { Section } from "@/components/Section";
import { ContactForm } from "@/components/ContactForm";
import { site } from "@/data/site";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <Section tight className="pt-12">
      <h1 className="text-3xl font-bold text-slate-900">Contact</h1>
      <p className="mt-4 text-slate-600">
        Questions, ideas, or feedback on the proposal are all welcome. You can use the form below, or email{" "}
        <a href={`mailto:${site.contactEmail}`} className="font-medium text-brand-700 underline">
          {site.contactEmail}
        </a>
        .
      </p>

      <div className="mt-8 max-w-xl">
        <ContactForm />
      </div>
    </Section>
  );
}
