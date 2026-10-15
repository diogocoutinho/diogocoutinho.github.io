"use client";

import { ArrowUpRight, Briefcase, Rocket } from "lucide-react";
import { useCurrentLocale, useScopedI18n } from "@/locales/client";
import { contact, tr } from "@/data/profile";

export default function Contact() {
  const locale = useCurrentLocale();
  const t = useScopedI18n("labels");

  const channels = [
    { label: t("email"), value: contact.email, href: `mailto:${contact.email}` },
    { label: t("whatsapp"), value: contact.phone, href: contact.whatsapp },
    { label: "LinkedIn", value: "in/diogoccoutinho", href: contact.linkedin },
    { label: "GitHub", value: "diogocoutinho", href: contact.github },
    { label: t("location"), value: tr(contact.location, locale) },
  ];

  const paths = [
    {
      icon: <Briefcase className="w-5 h-5" />,
      title: t("hiring"),
      text: t("hiringText"),
      href: `mailto:${contact.email}?subject=${encodeURIComponent(locale === "en-US" ? "Role opportunity" : "Oportunidade de vaga")}`,
    },
    { icon: <Rocket className="w-5 h-5" />, title: t("project"), text: t("projectText"), href: contact.whatsapp },
  ];

  return (
    <div className="grid lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] gap-10 lg:gap-16">
      <div className="grid sm:grid-cols-2 gap-5 content-start">
        {paths.map((p) => (
          <a
            key={p.title}
            href={p.href}
            target={p.href.startsWith("http") ? "_blank" : undefined}
            rel="noopener noreferrer"
            className="group bg-surface border border-line rounded-xl p-6 hover:border-gold transition-colors"
          >
            <span className="inline-flex w-10 h-10 items-center justify-center rounded-lg bg-gold text-on-gold mb-5">{p.icon}</span>
            <h3 className="text-lg font-semibold text-ink mb-2 flex items-center gap-1">
              {p.title}
              <ArrowUpRight className="w-4 h-4 text-muted group-hover:text-accent transition-colors" />
            </h3>
            <p className="text-sm text-muted leading-relaxed">{p.text}</p>
          </a>
        ))}
      </div>

      <dl className="divide-y divide-line border-y border-line">
        {channels.map((c) => (
          <div key={c.label} className="flex justify-between gap-4 py-3.5 text-sm">
            <dt className="text-muted">{c.label}</dt>
            <dd className="text-right min-w-0 break-all">
              {c.href ? (
                <a
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="font-medium text-ink hover:text-accent"
                >
                  {c.value}
                </a>
              ) : (
                <span className="font-medium text-ink">{c.value}</span>
              )}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
