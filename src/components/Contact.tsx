"use client";

import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  LanguageIcon,
} from "@heroicons/react/24/outline";
import Button from "./Button";
import { useScopedI18n } from "@/locales/client";

export default function Contact() {
  const scopedT = useScopedI18n("Contact");

  const contactInfo = [
    {
      icon: <EnvelopeIcon className="h-6 w-6" />,
      label: scopedT("contactInfo.email"),
      value: "diogo.coutinho.ads@gmail.com",
      href: "mailto:diogo.coutinho.ads@gmail.com",
    },
    {
      icon: <PhoneIcon className="h-6 w-6" />,
      label: scopedT("contactInfo.phone"),
      value: "+55 31 9 9278-4329",
      href: "tel:+5531992784329",
    },
    {
      icon: <MapPinIcon className="h-6 w-6" />,
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
      icon: (
        <svg
          className="h-6 w-6"
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com/in/diogocoutinho",
      icon: (
        <svg
          className="h-6 w-6"
          fill="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
  ];

  return (
    <section id="contact" className="py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 backdrop-blur-sm bg-opacity-90 dark:bg-opacity-90">
          <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-12">
            {scopedT("title")}
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 border-b border-gray-200 dark:border-gray-700 pb-2">
                  {scopedT("contactInfoTitle")}
                </h3>
                <div className="space-y-6">
                  {contactInfo.map((item) => (
                    <div
                      key={item.label}
                      className="flex items-center space-x-4 group"
                    >
                      <div className="text-blue-600 dark:text-blue-400 transform group-hover:scale-110 transition-transform">
                        {item.icon}
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                          {item.label}
                        </p>
                        {item.href ? (
                          <a
                            href={item.href}
                            className="text-lg text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-lg text-gray-900 dark:text-white">
                            {item.value}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6 border-b border-gray-200 dark:border-gray-700 pb-2">
                {scopedT("languages.title")}
              </h3>
              <div className="space-y-6">
                {languages.map((language) => (
                  <div
                    key={language.name}
                    className="flex items-center justify-between p-4 rounded-lg bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
                  >
                    <div className="flex items-center space-x-3">
                      <LanguageIcon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                      <span className="text-lg font-medium text-gray-900 dark:text-white">
                        {language.name}
                      </span>
                    </div>
                    <span className="px-3 py-1 text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900 rounded-full">
                      {language.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mt-6 mb-6 border-b border-gray-200 dark:border-gray-700 pb-2">
              {scopedT("social.title")}
            </h3>
            <div className="flex flex-wrap gap-4">
              {socialLinks.map((link) => (
                <Button
                  key={link.name}
                  variant="outline"
                  size="lg"
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 min-w-[160px] hover:scale-105 transition-transform"
                >
                  {link.icon}
                  <span className="ml-3">{link.name}</span>
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
