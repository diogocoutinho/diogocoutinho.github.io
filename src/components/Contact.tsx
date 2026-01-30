"use client";

import {
  Mail,
  Phone,
  MapPin,
  Languages,
  Github,
  Linkedin
} from "lucide-react";
import { useScopedI18n } from "@/locales/client";
import { motion } from "framer-motion";

export default function Contact() {
  const scopedT = useScopedI18n("Contact");

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      label: scopedT("contactInfo.email"),
      value: "diogo.coutinho.ads@gmail.com",
      href: "mailto:diogo.coutinho.ads@gmail.com",
    },
    {
      icon: <Phone className="h-6 w-6" />,
      label: scopedT("contactInfo.phone"),
      value: "+55 31 9 9278-4329",
      href: "tel:+5531992784329",
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      label: scopedT("contactInfo.location"),
      value: "Ibirité, MG",
    },
  ];

  const languages = [
    { name: scopedT("languages.pt"), level: scopedT("languages.native") },
    { name: scopedT("languages.en"), level: scopedT("languages.intermediate") },
    { name: scopedT("languages.es"), level: scopedT("languages.basic") },
  ];

  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/diogocoutinho",
      icon: <Github className="h-5 w-5" />
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com/in/diogoccoutinho",
      icon: <Linkedin className="h-5 w-5" />
    }
  ];

  return (
    <div className="glass-card rounded-2xl p-8 md:p-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-6 border-b border-slate-200 dark:border-slate-700 pb-2">
              {scopedT("contactInfoTitle")}
            </h3>
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center space-x-4 group"
                >
                  <div className="p-3 bg-blue-50 dark:bg-slate-800 rounded-lg text-blue-600 dark:text-blue-400 group-hover:bg-blue-100 dark:group-hover:bg-slate-700 transition-colors">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-lg font-medium text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-lg font-medium text-slate-900 dark:text-white">
                        {item.value}
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mt-8 mb-6 border-b border-slate-200 dark:border-slate-700 pb-2">
              {scopedT("social.title")}
            </h3>
            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-slate-100 dark:bg-slate-800 rounded-lg text-slate-900 dark:text-white font-medium hover:bg-blue-600 hover:text-white dark:hover:bg-blue-600 transition-all duration-300 transform hover:scale-105"
                >
                  {link.icon}
                  <span>{link.name}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-6 border-b border-slate-200 dark:border-slate-700 pb-2">
            {scopedT("languages.title")}
          </h3>
          <div className="space-y-4">
            {languages.map((language, index) => (
              <motion.div
                key={language.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center justify-between p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 hover:bg-white dark:hover:bg-slate-800 border border-transparent hover:border-slate-200 dark:hover:border-slate-700 transition-all shadow-sm"
              >
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                    <Languages className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  </div>
                  <span className="text-lg font-medium text-slate-900 dark:text-white">
                    {language.name}
                  </span>
                </div>
                <span className="px-3 py-1 text-sm font-semibold text-blue-600 dark:text-blue-300 bg-blue-50 dark:bg-blue-900/20 rounded-full border border-blue-100 dark:border-blue-900/50">
                  {language.level}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
