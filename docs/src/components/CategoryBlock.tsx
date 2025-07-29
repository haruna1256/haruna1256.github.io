import React from "react";

type Project = {
  title: string;
  period?: string;
  grade?: string;
  overview?: string;
  role?: string;
  features?: string;
  technologies?: string[];
};

type TechStack = {
  techName: string;
  projects: Project[];
};

type CategoryBlockProps = {
  categoryName: string;
  techStacks: TechStack[];
};

export const CategoryBlock: React.FC<CategoryBlockProps> = ({
  categoryName,
  techStacks,
}) => {
  return (
    <section className="mb-10">
      <h2 className="text-2xl font-bold border-b border-indigo-600 pb-1 mb-4">
        {categoryName}
      </h2>
      {techStacks.map((tech) => (
        <div key={tech.techName} className="mb-6">
          <h3 className="text-xl font-semibold mb-2">{tech.techName}</h3>
          <ul className="list-disc list-inside space-y-1 text-gray-700">
            {tech.projects.map((project, i) => (
              <li key={i}>
                <strong>{project.title}</strong>
                {project.period && <span> - {project.period}</span>}
                {project.overview && <p className="ml-4">{project.overview}</p>}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
};
