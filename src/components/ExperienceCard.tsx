import Image from "next/image";

interface ExperienceCardProps {
  company: string;
  position: string;
  duration: string;
  location: string;
  workMode: string;
  stacks: string[];
  responsibilities: string[];
  logoUrl?: string;
}

export default function ExperienceCard({
  company,
  position,
  duration,
  location,
  workMode,
  stacks,
  responsibilities,
  logoUrl,
}: ExperienceCardProps) {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="p-6">
        <div className="flex items-start gap-6">
          {logoUrl && (
            <div className="flex-shrink-0">
              <div className="w-16 h-16 relative rounded-lg overflow-hidden ring-2 ring-gray-200 dark:ring-gray-700">
                <Image
                  src={logoUrl}
                  alt={`${company} logo`}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          )}

          <div className="flex-1">
            <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">
              {position}
            </h3>
            <p className="text-xl text-blue-600 dark:text-blue-400 mb-3">
              {company}
            </p>

            <div className="flex flex-wrap items-center gap-3 text-sm text-gray-600 dark:text-gray-400 mb-6">
              <span className="flex items-center">
                <svg
                  className="w-4 h-4 mr-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                {duration}
              </span>
              <span className="flex items-center">
                <svg
                  className="w-4 h-4 mr-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                {location}
              </span>
              <span className="flex items-center">
                <svg
                  className="w-4 h-4 mr-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
                {workMode}
              </span>
            </div>

            {stacks && stacks.length > 0 && (
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                  Tecnologias utilizadas
                </h4>
                <div className="flex flex-wrap gap-2">
                  {stacks.map((stack) => (
                    <span
                      key={stack}
                      className="px-3 py-1.5 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium"
                    >
                      {stack}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                Principais responsabilidades
              </h4>
              <ul className="space-y-2">
                {responsibilities.map((responsibility, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-2 text-gray-700 dark:text-gray-300"
                  >
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                    {responsibility}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
