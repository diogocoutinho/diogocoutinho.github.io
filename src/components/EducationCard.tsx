"use client";

import Image from "next/image";
import Card from "./Card";

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
    <Card>
      <div className="flex items-start gap-4">
        {logoUrl && (
          <div className="flex-shrink-0">
            <Image
              src={logoUrl}
              alt={`${institution} logo`}
              className="w-16 h-16 rounded-lg object-cover"
              width={64}
              height={64}
            />
          </div>
        )}
        <div className="flex-grow">
          <h3 id="institution" className="text-xl font-bold mb-2">
            {institution}
          </h3>
          <p id="degree" className="text-blue-400 font-medium mb-1">
            {degree}
          </p>
          <p id="duration" className="text-gray-400 text-sm mb-1">
            {duration}
          </p>
          <p id="location" className="text-gray-400 text-sm mb-2">
            {location}
          </p>
          {description && (
            <p id="description" className="text-gray-300 text-sm">
              {description}
            </p>
          )}
        </div>
      </div>
    </Card>
  );
}
