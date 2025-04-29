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
    <div className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors">
      <div className="flex items-start gap-4">
        {logoUrl && (
          <div className="w-12 h-12 relative rounded-lg overflow-hidden">
            <Image
              src={logoUrl}
              alt={`${company} logo`}
              fill
              className="object-cover"
            />
          </div>
        )}
        <div className="flex-1">
          <h3 className="text-xl font-bold mb-1">{position}</h3>
          <p className="text-gray-400 mb-2">{company}</p>
          <div className="flex flex-wrap gap-2 text-sm text-gray-400 mb-4">
            <span>{duration}</span>
            <span>•</span>
            <span>{location}</span>
            <span>•</span>
            <span>{workMode}</span>
          </div>

          <div className="mb-4">
            <h4 className="font-semibold mb-2">Stacks:</h4>
            <div id="stacks" className="flex flex-wrap gap-2">
              {stacks.map((stack) => (
                <span
                  key={stack}
                  className="px-3 py-1 bg-gray-700 rounded-full text-sm"
                >
                  {stack}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Responsabilidades:</h4>
            <ul className="list-disc list-inside text-gray-300 space-y-1">
              {responsibilities.map((responsibility, index) => (
                <li key={index}>{responsibility}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
