interface SkillCategoryProps {
  title: string;
  skills: string[];
  icon: React.ReactNode;
}

export default function SkillCategory({
  title,
  skills,
  icon,
}: SkillCategoryProps) {
  return (
    <div className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors group">
      <div className="flex items-center gap-3 mb-8">
        <div className="text-blue-400 group-hover:text-blue-300 transition-colors">
          {icon}
        </div>
        <h3 id="category-title" className="text-xl font-bold">
          {title}
        </h3>
      </div>
      <div id="skills-list" className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="px-3 py-1 bg-gray-700 rounded-full text-sm hover:bg-gray-600 transition-colors"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
