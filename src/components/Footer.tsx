"use client";

import { useScopedI18n } from "@/locales/client";
import { contact } from "@/data/profile";

export default function Footer() {
  const t = useScopedI18n("labels");
  return (
    <footer className="border-t border-line py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between gap-3 text-sm text-muted">
        <p>
          © {new Date().getFullYear()} {contact.name} · {t("rights")}
        </p>
        <div className="flex gap-5">
          <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-ink">LinkedIn</a>
          <a href={contact.github} target="_blank" rel="noopener noreferrer" className="hover:text-ink">GitHub</a>
          <a href={contact.agency} target="_blank" rel="noopener noreferrer" className="hover:text-ink">EasyDev</a>
        </div>
      </div>
    </footer>
  );
}
