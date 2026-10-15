"use client";

import { Mail, MessageCircle, MapPin, Linkedin, Github, Briefcase, Rocket, ArrowUpRight } from "lucide-react";
import { useCurrentLocale, useScopedI18n } from "@/locales/client";
import { contact, tr } from "@/data/profile";

export default function Contact() {
  const locale = useCurrentLocale();
  const t = useScopedI18n("labels");

  const channels = [
    { icon: <Mail className="h-5 w-5" />, label: t("email"), value: contact.email, href: `mailto:${contact.email}` },
    { icon: <MessageCircle className="h-5 w-5" />, label: t("whatsapp"), value: contact.phone, href: contact.whatsapp },
    { icon: <MapPin className="h-5 w-5" />, label: t("location"), value: tr(contact.location, locale) },
  ];

  return (
    <div className="grid lg:grid-cols-5 gap-6">
      <div className="lg:col-span-3 grid sm:grid-cols-2 gap-6">
        <a
          href={`mailto:${contact.email}?subject=${encodeURIComponent(locale === "en-US" ? "Role opportunity" : "Oportunidade de vaga")}`}
          className="glass-card rounded-2xl p-6 group hover:border-blue-400 dark:hover:border-blue-500 transition-colors"
        >
          <Briefcase className="w-8 h-8 text-blue-600 dark:text-blue-400 mb-4" />
          <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-1">
            {t("hiring")}
            <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
          </h3>
          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">{t("hiringText")}</p>
        </a>
        <a
          href={contact.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="glass-card rounded-2xl p-6 group hover:border-purple-400 dark:hover:border-purple-500 transition-colors"
        >
          <Rocket className="w-8 h-8 text-purple-600 dark:text-purple-400 mb-4" />
          <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-1">
            {t("project")}
            <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
          </h3>
          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">{t("projectText")}</p>
        </a>
      </div>

      <div className="lg:col-span-2 glass-card rounded-2xl p-6 space-y-5">
        {channels.map((item) => (
          <div key={item.label} className="flex items-center gap-4">
            <div className="p-2.5 bg-blue-50 dark:bg-slate-800 rounded-lg text-blue-600 dark:text-blue-400">{item.icon}</div>
            <div className="min-w-0">
              <p className="text-xs font-medium text-slate-500 dark:text-slate-400">{item.label}</p>
              {item.href ? (
                <a
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="font-medium text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 break-all"
                >
                  {item.value}
                </a>
              ) : (
                <p className="font-medium text-slate-900 dark:text-white">{item.value}</p>
              )}
            </div>
          </div>
        ))}
        <div className="flex flex-wrap gap-3 pt-2">
          <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-slate-100 dark:bg-slate-800 rounded-lg text-sm font-medium hover:bg-blue-600 hover:text-white transition-colors">
            <Linkedin className="h-4 w-4" /> LinkedIn
          </a>
          <a href={contact.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-slate-100 dark:bg-slate-800 rounded-lg text-sm font-medium hover:bg-blue-600 hover:text-white transition-colors">
            <Github className="h-4 w-4" /> GitHub
          </a>
          <a href={contact.agency} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-slate-100 dark:bg-slate-800 rounded-lg text-sm font-medium hover:bg-blue-600 hover:text-white transition-colors">
            <ArrowUpRight className="h-4 w-4" /> {t("agency")}
          </a>
        </div>
      </div>
    </div>
  );
}
