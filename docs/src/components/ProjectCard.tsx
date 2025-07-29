import React from "react";
import '../index.css';

export type Project = {
  title: string;
  slideEmoji: string; // 例: "📄"
  role: string;
  description: string;
  githubUrl: string;
};

export const ProjectCard: React.FC<Project> = ({ title, slideEmoji, role, description, githubUrl }) => {
  return (
    <div className="rounded-2xl bg-white shadow-md p-5 hover:shadow-lg transition w-full max-w-md">
      <h3 className="text-2xl font-bold flex items-center gap-3">
        {slideEmoji} {title}
      </h3>
      <p className="text-sm text-gray-500 mt-1 mb-2">{role}</p>
      <p className="text-gray-700 mb-4">{description}</p>
      <a
        href={githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        GitHubで見る
      </a>
    </div>
  );
};
