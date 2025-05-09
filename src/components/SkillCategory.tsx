import { useScopedI18n } from "@/locales/client";

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
  const scopedT = useScopedI18n("HomePage");
  return (
    <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg hover:shadow-xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300 group">
      <div className="flex items-center gap-4 mb-6">
        <div className="text-blue-500 dark:text-blue-400 group-hover:text-blue-600 dark:group-hover:text-blue-300 transition-colors duration-300 transform group-hover:scale-110">
          {icon}
        </div>
        <h3
          id="category-title"
          className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-300 transition-colors duration-300"
        >
          {scopedT("Skills.title")}
        </h3>
      </div>
      <div id="skills-list" className="flex flex-wrap gap-3">
        {skills.map((skill) => (
          <span
            key={skill}
            className="px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white rounded-full text-sm font-medium hover:bg-blue-100 dark:hover:bg-blue-900 hover:text-blue-600 dark:hover:text-blue-300 transition-all duration-300 transform hover:scale-105"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
