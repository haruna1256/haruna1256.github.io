import React, { useState } from "react";

interface Project {
  title: string;
  period: string;
  grade?: string;
  overview?: string;
  role?: string;
  features?: string;
  technologies?: string[];
  images: string[];
}

const projectsByCategory: Record<string, Project[]> = {
  Swift: [
    {
      title: "food shuffle - 新しいお店との出会いを届けるアプリ",
      period: "2024年9月 ～ 2025年2月",
      grade: "2年後期",
      overview:
        'すれ違いを通じて"おすすめのお店"を共有し合う、レビュー信頼性重視のグルメ情報アプリ',
      role:
        "企画立案、プレゼンテーション、リーダー、UI設計、Flutterによるフロントエンド開発",
      features:
        '「信頼できるレビュー」「すれ違いによるお店の発見」「リアルタイム性」を軸に、大学生や若年層が"楽しく外食したくなる"体験を設計しました。',
      technologies: ["Flutter", "Firebase", "Figma"],
      images: [
        "/slides/swift1.png",
        "/slides/swift2.png"
      ],
    },
  ],
  Flutter: [
    {
      title: "ぶんたんちゃん",
      period: "4月21日 〜 4月29日",
      overview:
        "家族間の予定・タスク共有と家事の見える化により、コミュニケーションを促進するアプリ",
      role: "個人開発、設計〜実装、UI/UX設計",
      features: "子どもでも使いやすいUI、役割分担の明確化、リアルタイム同期",
      technologies: ["Flutter", "Firebase", "Sqlite", "Github", "Youtube"],
      images: [
        "/slides/buntan1.png",
        "/slides/buntan2.png",
        "/slides/buntan3.png",
        "/slides/buntan4.png"
      ],
    },
  ],
  React: [
    {
      title: "React制作物1",
      period: "期間未定",
      overview: "Reactを使ったポートフォリオやSPAなどの制作物",
      role: "構成・UI設計・コーディング",
      features: "レスポンシブ対応、Vite環境構築済",
      technologies: ["React", "Vite", "TypeScript"],
      images: [],
    },
  ],
  HTML: [
    {
      title: "HTML制作物1",
      period: "期間未定",
      overview: "HTML/CSSで作成したシンプルなサイトなど",
      role: "HTMLマークアップ、スタイル定義",
      features: "静的サイト、配色アクセントあり",
      technologies: ["HTML", "CSS"],
      images: [],
    },
  ],
};



export const Portfolio: React.FC = () => {
  const [slideIndices, setSlideIndices] = useState<Record<string, Record<number, number>>>({});

  const moveImage = (category: string, projectIndex: number, delta: number) => {
    const project = projectsByCategory[category][projectIndex];
    const totalImages = project.images.length;
    const currentIndex = slideIndices[category]?.[projectIndex] ?? 0;
    let nextIndex = currentIndex + delta;
    if (nextIndex < 0) nextIndex = 0;
    if (nextIndex >= totalImages) nextIndex = totalImages - 1;

    setSlideIndices(prev => ({
      ...prev,
      [category]: {
        ...prev[category],
        [projectIndex]: nextIndex,
      },
    }));
  };

  return (
    <div className="bg-wineLight min-h-screen p-8 max-w-6xl mx-auto space-y-12">
      <header className="text-center text-5xl font-bold text-wineGold mb-12">
        kokomeow.com
      </header>

      {Object.entries(projectsByCategory).map(([category, projects], i) => (
        <section key={i} className="space-y-6">
          <h2 className="text-2xl font-bold text-wineGold border-b pb-2 border-wineDeep mb-6">
            {category}
          </h2>

          {projects.length === 0 ? (
            <p className="text-gray-600 italic">まだ制作物はありません。</p>
          ) : (
            projects.map((project, j) => {
              const currentImageIndex = slideIndices[category]?.[j] ?? 0;
              return (
                <div key={j} className="bg-white rounded-2xl shadow-lg p-6 max-w-xl mx-auto space-y-4">
                  <h3 className="text-xl font-semibold text-wine mb-1">{project.title}</h3>
                  <p className="text-sm text-wineLight">{project.period}</p>

                  {project.images.length > 0 && (
                    <div className="relative">
                      <img
                        src={project.images[currentImageIndex]}
                        alt={`${project.title} スライド画像${currentImageIndex + 1}`}
                        className="w-full h-56 object-cover rounded-xl shadow-md"
                      />
                      <button
                        onClick={() => moveImage(category, j, -1)}
                        disabled={currentImageIndex === 0}
                        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-wineDeep text-white rounded-full w-8 h-8 flex items-center justify-center disabled:opacity-40"
                        aria-label="前の画像"
                      >
                        ‹
                      </button>
                      <button
                        onClick={() => moveImage(category, j, 1)}
                        disabled={currentImageIndex === project.images.length - 1}
                        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-wineDeep text-white rounded-full w-8 h-8 flex items-center justify-center disabled:opacity-40"
                        aria-label="次の画像"
                      >
                        ›
                      </button>
                    </div>
                  )}

                  {project.overview && (
                    <>
                      <p className="font-semibold text-wine mt-2">概要</p>
                      <p className="text-gray-700 leading-relaxed">{project.overview}</p>
                    </>
                  )}
                  {project.role && (
                    <>
                      <p className="font-semibold text-wine mt-2">役割</p>
                      <p className="text-gray-700 leading-relaxed">{project.role}</p>
                    </>
                  )}
                  {project.features && (
                    <>
                      <p className="font-semibold text-wine mt-2">特徴</p>
                      <p className="text-gray-700 leading-relaxed">{project.features}</p>
                    </>
                  )}
                  {project.technologies && (
                    <>
                      <p className="font-semibold text-wine mt-2">技術スタック</p>
                      <ul className="list-disc list-inside text-gray-700">
                        {project.technologies.map((tech, idx) => (
                          <li key={idx}>{tech}</li>
                        ))}
                      </ul>
                    </>
                  )}
                </div>
              );
            })
          )}
        </section>
      ))}
    </div>
  );
};
