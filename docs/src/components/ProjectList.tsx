import React from "react";
import type { Project } from "./ProjectCard";
import { ProjectCard } from "./ProjectCard";
import '../index.css';


const projects: Project[] = [
  {
    title: "すれ違い飲食アプリ",
    slideEmoji: "📄",
    role: "Flutter / チーム開発",
    description: "飲食店のすれ違い情報共有アプリ",
    githubUrl: "https://github.com/haruna1256/restaurant-app",
  },
  {
    title: "読書記録Webアプリ",
    slideEmoji: "📄",
    role: "React + Go / DB設計",
    description: "読書管理と記録のためのWebアプリ",
    githubUrl: "https://github.com/haruna1256/book-tracker",
  },
  {
    title: "ポートフォリオサイト",
    slideEmoji: "📄",
    role: "React + Tailwind",
    description: "個人の作品紹介用サイト",
    githubUrl: "https://github.com/haruna1256/portfolio-site",
  },
  {
    title: "お風呂ダイエットチャレンジ",
    slideEmoji: "📄",
    role: "SwiftUI / iOSアプリ",
    description: "お風呂で続ける健康習慣アプリ",
    githubUrl: "https://github.com/haruna1256/bath-diet-challenge",
  },
  {
    title: "ゼミ研究スライド",
    slideEmoji: "📄",
    role: "PowerPoint / 研究資料",
    description: "スキーマ駆動開発に関する発表スライド",
    githubUrl: "https://github.com/haruna1256/seminar-slides",
  },
];

export const ProjectList: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center p-6 bg-gray-50 min-h-screen">
      {projects.map((project) => (
        <ProjectCard key={project.title} {...project} />
      ))}
    </div>
  );
};
