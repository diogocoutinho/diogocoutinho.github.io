interface EducationProps {
  institution: string;
  degree: string;
  duration: string;
  location: string;
  description?: string;
  logoUrl?: string;
}

export default function EducationCard({
  institution,
  degree,
  duration,
  location,
  description,
  logoUrl,
}: EducationProps) {
  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:bg-gray-700 transition-colors">
      <div className="flex items-start gap-4">
        {logoUrl && (
          <div className="flex-shrink-0">
            <img
              src={logoUrl}
              alt={`${institution} logo`}
              className="w-16 h-16 rounded-lg object-cover"
            />
          </div>
        )}
        <div className="flex-grow">
          <h3 className="text-xl font-bold mb-2">{institution}</h3>
          <p className="text-blue-400 font-medium mb-1">{degree}</p>
          <p className="text-gray-400 text-sm mb-1">{duration}</p>
          <p className="text-gray-400 text-sm mb-2">{location}</p>
          {description && (
            <p className="text-gray-300 text-sm">{description}</p>
          )}
        </div>
      </div>
    </div>
  );
}
