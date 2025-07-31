import React from "react";

interface ProjectProps {
  title: string;
  description?: string;
  githubUrl?: string;
}

export const ProjectCard: React.FC<ProjectProps> = ({ title, description, githubUrl }) => (
  <div className="border rounded-md p-4 shadow hover:shadow-lg transition">
    <h4 className="font-semibold text-lg">{title}</h4>
    {description && <p className="text-gray-600 mt-2">{description}</p>}
    {githubUrl && (
      <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline mt-2 block">
        GitHubへ
      </a>
    )}
  </div>
);
