"use client";

import Card from "./Card";
import {
  EnvelopeIcon,
  PhoneIcon,
  MapPinIcon,
  LanguageIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import Button from "./Button";

interface ContactInfo {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}

export default function Contact() {
  const contactInfo: ContactInfo[] = [
    {
      icon: <EnvelopeIcon className="h-6 w-6" />,
      label: "Email",
      value: "diogo.coutinho.ads@gmail.com",
      href: "mailto:diogo.coutinho.ads@gmail.com",
    },
    {
      icon: <PhoneIcon className="h-6 w-6" />,
      label: "Telefone",
      value: "+55 (31) 99278-4329",
      href: "tel:+5531992784329",
    },
    {
      icon: <MapPinIcon className="h-6 w-6" />,
      label: "Localização",
      value: "Ibirité, MG - Brasil",
    },
  ];

  const languages = [
    { name: "Português", level: "Nativo" },
    { name: "Inglês", level: "Intermediário" },
  ];

  const socialLinks = [
    {
      name: "GitHub",
      href: "https://github.com/diogocoutinho",
      component: (
        <Button
          onClick={() => {
            window.open("https://github.com/diogocoutinho", "_blank");
          }}
          rel="noopener noreferrer"
          className="bg-gray-800 hover:bg-gray-700 px-6 py-3 rounded-lg transition-colors flex items-center gap-2"
          variant="secondary"
        >
          <svg
            className="w-5 h-5"
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
          GitHub
        </Button>
      ),
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com/in/diogoccoutinho",
      component: (
        <Button
          onClick={() => {
            window.open("https://linkedin.com/in/diogoccoutinho", "_blank");
          }}
          rel="noopener noreferrer"
          className="bg-blue-600 hover:bg-blue-500 px-6 py-3 rounded-lg transition-colors flex items-center gap-2"
        >
          <svg
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          </svg>
          LinkedIn
        </Button>
      ),
    },
  ];

  return (
    <Card className="max-w-4xl mx-auto p-8">
      <div id="contact" className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              Informações de Contato
            </h3>
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="text-blue-600 dark:text-blue-400 mt-1">
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                      {info.label}
                    </p>
                    {info.href ? (
                      <Link
                        href={info.href}
                        className="text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                      >
                        {info.value}
                      </Link>
                    ) : (
                      <p className="text-gray-900 dark:text-white">
                        {info.value}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              Idiomas
            </h3>
            <div className="flex items-start space-x-4">
              <div className="text-blue-600 dark:text-blue-400 mt-1">
                <LanguageIcon className="h-6 w-6" />
              </div>
              <div className="space-y-2">
                {languages.map((language, index) => (
                  <div key={index}>
                    <p className="text-gray-900 dark:text-white font-medium">
                      {language.name}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {language.level}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-200 dark:border-gray-700">
          <h3 className="text-2xl font-bold text-center text-blue-600 dark:text-blue-400 mb-6">
            Redes Sociais
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {socialLinks.map((social, index) => (
              <div key={index}>{social.component}</div>
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
}
