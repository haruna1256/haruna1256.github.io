// Portfolio.tsx
import React, { useState, useEffect } from "react";
import "./font.css";

const profileIconUrl = "/neko.jpeg";

interface Project {
  title: string;
  period: string;
  overview?: string;
  role?: string;
  technologies: string[];
  images: string[];
}

const projectsByCategory: Record<string, Project[]> = {
  SwiftUI: [
    {
      title: "SwiftUI Project 1",
      period: "2024年9月 - 2025年2月",
      overview: "SwiftUIで作成した素敵なアプリ。",
      role: "設計・実装",
      technologies: ["SwiftUI", "Combine"],
      images: ["/slides/swiftui1.png", "/slides/swiftui2.png"],
    },
    {
      title: "SwiftUI Project 2",
      period: "2023年4月 - 2023年9月",
      overview: "SwiftUIで作った2つ目のアプリ。",
      role: "UI設計・開発",
      technologies: ["SwiftUI", "CoreData"],
      images: ["/slides/swiftui3.png"],
    },
  ],
  Flutter: [
    {
      title: "ぶんたんちゃん",
      period: "4月21日 〜 4月29日",
      overview:
        "家族間の予定・タスク共有と家事の見える化により、コミュニケーションを促進するアプリ",
      role: "個人開発、設計〜実装、UI/UX設計",
      technologies: ["Flutter", "Firebase", "Sqlite", "Github", "Youtube"],
      images: [
        "/slides/buntan1.png",
        "/slides/buntan2.png",
        "/slides/buntan3.png",
        "/slides/buntan4.png",
      ],
    },
  ],
  React: [
    {
      title: "React制作物1",
      period: "期間未定",
      overview: "Reactを使ったポートフォリオやSPAなどの制作物",
      role: "構成・UI設計・コーディング",
      technologies: ["React", "Vite", "TypeScript"],
      images: [],
    },
  ],
};

const techStack = [
  { name: "Swift", img: "/tech/swift.png" },
  { name: "Flutter", img: "/tech/flutter.png" },
  { name: "Firebase", img: "/tech/firebase.png" },
  { name: "React", img: "/tech/react.png" },
  { name: "TypeScript", img: "/tech/typescript.png" },
  { name: "Go", img: "/tech/go.png" },
  { name: "Docker", img: "/tech/docker.png" },
  { name: "Figma", img: "/tech/figma.png" },
];

const Portfolio: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string>("SwiftUI");
  const [imageIndex, setImageIndex] = useState<Record<string, number>>({});

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  const handleImageChange = (key: string, total: number, direction: number) => {
    setImageIndex((prev) => {
      const current = prev[key] || 0;
      const next = (current + direction + total) % total;
      return { ...prev, [key]: next };
    });
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen bg-wineLight">
        <h1 className="text-5xl md:text-7xl text-wineGold font-script animate-fade-in">
          Haruna Kawagishi
        </h1>
      </div>
    );
  }

  return (
    <div className="snap-y snap-mandatory overflow-y-scroll h-screen font-script bg-white text-yuruDust">
      {/* Profile Section */}
      <section className="snap-start min-h-screen flex items-center bg-white p-10 max-w-5xl mx-auto gap-8">
        <img
          src={profileIconUrl}
          alt="Profile"
          className="w-40 h-40 rounded-full object-cover"
        />
        <div>
          <h1 className="text-6xl font-normal">Haruna Kawagishi</h1>
          <p className="text-2xl text-yuruBeige mt-2">iOS Engineer</p>
        </div>
      </section>

      {/* About Me Section */}
      <section className="snap-start min-h-screen flex flex-col justify-center items-center bg-yuruPink p-10 text-gray-700">
        <h2 className="text-4xl mb-8 font-sans font-semibold">About Me</h2>
        <div className="max-w-xl space-y-6 text-base text-center font-sans">
          <p>
            企画・問題定義重視。技術だけでなく、「どんな課題を解決したいのか」「どの手段が最適か」を重視しています。
            個人開発では「なぜこのアプリを作るのか」「誰の役に立てるのか」を考えながら設計・実装しています。
          </p>
          <p>
            リーダーや発表経験を通して、物事を分かりやすく整理し伝える力を磨いてきました。
            動くものだけでなく、その背後にある意図や価値を明確にし、良いプロダクト作りに貢献します。
          </p>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="snap-start min-h-screen flex flex-col justify-center items-center bg-white p-10 max-w-5xl mx-auto">
        <h2 className="text-4xl mb-6 font-sans font-semibold">Tech Stack</h2>
        <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-8 text-center">
          {techStack.map(({ name, img }) => (
            <div key={name} className="flex flex-col items-center space-y-2">
              <img
                src={img}
                alt={name}
                className="w-16 h-16 object-contain"
                loading="lazy"
              />
              <span className="text-lg font-medium font-sans">{name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section className="snap-start min-h-screen bg-yuruPink p-10 flex flex-col items-center max-w-5xl mx-auto">
        <h2 className="text-4xl mb-10 font-sans font-semibold text-yuruDust">Projects</h2>

        {/* Category Tabs */}
        <div className="flex justify-center space-x-6 mb-8">
          {Object.keys(projectsByCategory).map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-5 py-2 rounded-full font-semibold font-sans
                ${
                  selectedCategory === category
                    ? "bg-yuruDust text-white shadow-lg"
                    : "bg-white text-yuruDust hover:bg-yuruDust hover:text-white transition"
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full">
          {projectsByCategory[selectedCategory]
            .slice(0, 3)
            .map((project, idx) => {
              const key = `${selectedCategory}-${idx}`;
              const currentIndex = imageIndex[key] || 0;
              return (
                <div
                  key={key}
                  className="bg-white rounded-xl shadow p-4 space-y-3 flex flex-col items-center hover:shadow-lg transition-shadow duration-300"
                  style={{ maxWidth: 320 }}
                >
                  <h4
                    className="text-lg font-semibold text-yuruDust text-center truncate font-sans"
                    title={project.title}
                  >
                    {project.title}
                  </h4>
                  <p className="text-sm text-yuruBeige">{project.period}</p>

                  {project.images.length > 0 && (
                    <div className="relative w-full flex items-center justify-center">
                      <img
                        src={project.images[currentIndex]}
                        alt={`Slide ${currentIndex + 1}`}
                        className="w-full h-40 object-cover rounded-lg"
                      />
                      <button
                        className="absolute left-0 text-2xl px-2 text-yuruDust font-bold bg-white bg-opacity-60 rounded-r hover:bg-opacity-90"
                        onClick={() => handleImageChange(key, project.images.length, -1)}
                        aria-label="Previous"
                      >
                        ‹
                      </button>
                      <button
                        className="absolute right-0 text-2xl px-2 text-yuruDust font-bold bg-white bg-opacity-60 rounded-l hover:bg-opacity-90"
                        onClick={() => handleImageChange(key, project.images.length, 1)}
                        aria-label="Next"
                      >
                        ›
                      </button>
                    </div>
                  )}

                  <p className="text-sm text-gray-700 text-center font-sans">{project.overview}</p>
                  <p className="text-sm text-gray-600 font-sans">
                    <span className="font-semibold">Role:</span> {project.role}
                  </p>
                  <p className="text-sm text-gray-600 font-sans">
                    <span className="font-semibold">Tech:</span> {project.technologies.join(", ")}
                  </p>
                </div>
              );
            })}
        </div>
      </section>

      {/* Research Section */}
      <section className="snap-start min-h-screen bg-white p-10 max-w-5xl mx-auto">
        <h2 className="text-4xl mb-8 text-center font-sans font-semibold">Research</h2>
        <div className="max-w-2xl mx-auto text-gray-700 font-sans">
          <p>
            スキーマ駆動開発に関する研究を行いました。OpenAPI、gRPC、コードファーストによる実装比較と検証を行い、設計・実装効率に与える影響を調査しています。
          </p>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
