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
  githubUrl?: string;
}

const projectsByCategory: Record<string, Project[]> = {
  SwiftUI: [
    {
      title: "リフラル",
      period: "2025年4月 - 2025年8月",
      overview: "現実世界での移動や滞在行動をゲーム化する“陣取り型ライフログアプリ”",
      role: "企画立案、プレゼンテーション、リーダー、UI設計、フロントエンド開発",
      technologies: ["SwiftUI", "figma"],
      githubUrl: "https://github.com/Rihlar/rihlar_front",
      images: [
        "/slides/project/rihlar/1.png",
        "/slides/project/rihlar/2.png",
        "/slides/project/rihlar/3.png",
        "/slides/project/rihlar/4.png",
        "/slides/project/rihlar/5.png",
        "/slides/project/rihlar/6.png",
        "/slides/project/rihlar/7.png",
        "/slides/project/rihlar/8.png",
        "/slides/project/rihlar/9.png",
        "/slides/project/rihlar/10.png",
        "/slides/project/rihlar/11.png",
        "/slides/project/rihlar/12.png",
        "/slides/project/rihlar/13.png",
        "/slides/project/rihlar/14.png",
        "/slides/project/rihlar/15.png",
        "/slides/project/rihlar/16.png",
        "/slides/project/rihlar/17.png",
      ],
    },
    {
      title: "捨てログ",
      period: "2025年2月 - 2025年3月",
      overview: "物の管理をデジタル化し、快適な生活空間を実現する整理・断捨離支援アプリの開発計画",
      role: "企画立案、バックエンド設計",
      technologies: ["SwiftUI", "go", "figma"],
      githubUrl: "https://github.com/narutosisu/backend",
      images: [
        "/slides/project/sutelog/1.png",
        "/slides/project/sutelog/2.png",
        "/slides/project/sutelog/3.png",
        "/slides/project/sutelog/4.png",
        "/slides/project/sutelog/5.png",
        "/slides/project/sutelog/6.png",
        "/slides/project/sutelog/7.png",
        "/slides/project/sutelog/8.png",
        "/slides/project/sutelog/9.png",
        "/slides/project/sutelog/10.png",
        "/slides/project/sutelog/11.png",
        "/slides/project/sutelog/12.png",
        "/slides/project/sutelog/13.png",
      ],
    },
    {
      title: "わくわく探検隊",
      period: "2024年6月 - 2024年7月",
      overview: "目的地への移動中に楽しい体験を提供し、旅の過程そのものを価値あるものにする",
      role: "バックエンド設計,データベース設計",
      technologies: ["mysql"],
      githubUrl: "https://github.com/Kaito518/ECCOC-front",
      images: [
        "/slides/project/wakuwaku/1.png",
        "/slides/project/wakuwaku/2.png",
        "/slides/project/wakuwaku/3.png",
        "/slides/project/wakuwaku/4.png",
        "/slides/project/wakuwaku/5.png",
        "/slides/project/wakuwaku/6.png",
      ],
    },
  ],
  Flutter: [
    {
      title: "フード　シャッフル",
      period: "2024年10月 - 2025年2月",
      overview:
        "すれ違いを通じて`おすすめのお店`を共有し合う、レビュー信頼性重視のグルメ情報アプリ",
      role: "企画立案、プレゼンテーション、リーダー、UI設計、フロントエンド開発",
      technologies: ["flutter", "firebase",],
      githubUrl: "https://github.com/Doremifa-donuts/foodshuffle",
      images: [
        "/slides/project/food shuffle/1.png",
        "/slides/project/food shuffle/2.png",
        "/slides/project/food shuffle/3.png",
        "/slides/project/food shuffle/4.png",
        "/slides/project/food shuffle/5.png",
        "/slides/project/food shuffle/6.png",
        "/slides/project/food shuffle/7.png",
        "/slides/project/food shuffle/8.png",
        "/slides/project/food shuffle/9.png",
        "/slides/project/food shuffle/10.png",
        "/slides/project/food shuffle/11.png",
        "/slides/project/food shuffle/12.png",
        "/slides/project/food shuffle/13.png",
        "/slides/project/food shuffle/14.png",
      ],
    },
  ],
  HTML: [
    {
      title: "ぶんたんちゃん",
      period: "2024年4月 - 2024年7月",
      overview:
        "家族間の予定・タスク共有と家事の見える化により、コミュニケーションを促進するアプリ",
      role: "フロントエンド開発、企画、プレゼンリーダー、UI設計",
      technologies: ["HTML", "CSS", "javasqript", "TailwindCSS"],
      githubUrl: "https://github.com/ganbariya-ecc/buntanchan_Renew_web",
      images: [
        "/slides/project/buntan/1.png",
        "/slides/project/buntan/2.png",
        "/slides/project/buntan/3.png",
        "/slides/project/buntan/4.png",
        "/slides/project/buntan/5.png",
        "/slides/project/buntan/6.png",
        "/slides/project/buntan/7.png",
        "/slides/project/buntan/8.png",
        "/slides/project/buntan/9.png",
        "/slides/project/buntan/10.png",
      ],
    },
  ],
  React: [
    {
      title: "ポートフォリオ",
      period: "2025年7月",
      overview:
        "Reactを使ったポートフォリオ",
      role: "構成・UI設計・コーディング",
      technologies: ["React", "Vite", "TypeScript"],
      githubUrl: "https://github.com/haruna1256/haruna1256.github.io",
      images: [
        "/slides/project/profile/1.png",
        "/slides/project/profile/2.png",
      ],
    },
  ],
};

const techStack = [
  { label: "Swift", icon: "/icons/swift.png" },
  { label: "Flutter", icon: "/icons/flutter.png" },
  { label: "html", icon: "/icons/html.png" },
  { label: "css", icon: "/icons/css.png" },
  { label: "JavaScript", icon: "/icons/javasqript.png" },
  { label: "React", icon: "/icons/react.png" },
  { label: "Go", icon: "/icons/go.png" },
  { label: "mysql", icon: "/icons/mysql.png" },
  { label: "Docker", icon: "/icons/docker.png" },
  { label: "github", icon: "/icons/github.png" },
  { label: "Figma", icon: "/icons/figma.png" },
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
      const current = prev[key] ?? 0;
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
    <div className="snap-y snap-mandatory overflow-y-scroll h-screen bg-white text-yuruDust">
      {/* Profile Section */}
      <section className="snap-start min-h-screen flex flex-col justify-center items-center p-10 bg-white">
        <div className="flex items-center space-x-8">
          <img
            src={profileIconUrl}
            alt="Profile"
            className="w-[280px] h-[280px] rounded-full object-cover"
          />
          <div>
            <h1 className="text-6xl font-script">Haruna Kawagishi</h1>
            <p className="text-xl text-yuruBeige mt-2 font-sans">iOS Engineer</p>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section className="snap-start min-h-screen flex flex-col justify-center items-center bg-yuruPink p-10 text-gray-700">
        <h2 className="text-4xl mb-8 font-script">About Me</h2>
        <div className="max-w-xl space-y-6 text-base text-center font-script">
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
      <section className="snap-start min-h-screen flex flex-col justify-center items-center p-10">
        <h2 className="text-4xl mb-6 font-script">Tech Stack</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-lg font-medium text-gray-800 max-w-4xl mx-auto justify-items-center">
          {techStack.map((tech) => (
            <div
              key={tech.label}
              className="flex flex-col items-center px-4 py-2 bg-yuruPink rounded-lg shadow-md w-32 h-32 justify-center"
            >
              <img src={tech.icon} alt={tech.label} className="w-12 h-12 mb-2" />
              <span className="text-sm font-sans">{tech.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section className="snap-start min-h-screen bg-yuruPink p-10 flex flex-col items-center">
        <h2 className="text-4xl mb-10 font-script">Projects</h2>

        {/* Category Tabs */}
        <div className="flex justify-center space-x-6 mb-8">
          {Object.keys(projectsByCategory).map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-5 py-2 rounded-full font-semibold
                ${selectedCategory === category
                  ? "bg-yuruDust text-white shadow-lg"
                  : "bg-white text-yuruDust hover:bg-yuruDust hover:text-white transition"
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {projectsByCategory[selectedCategory]
            .slice(0, 3)
            .map((project, idx) => {
              const key = `${selectedCategory}-${idx}`;
              const currentIndex = imageIndex[key] ?? 0;
              return (
                <div
                  key={key}
                  className="bg-white rounded-xl shadow p-4 space-y-3 flex flex-col items-center hover:shadow-lg transition-shadow duration-300"
                  style={{ maxWidth: 320 }}
                >
                  <h4
                    className="text-lg font-semibold text-yuruDust text-center truncate font-script"
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
                        onClick={() =>
                          handleImageChange(key, project.images.length, -1)
                        }
                        aria-label="Previous"
                      >
                        ‹
                      </button>
                      <button
                        className="absolute right-0 text-2xl px-2 text-yuruDust font-bold bg-white bg-opacity-60 rounded-l hover:bg-opacity-90"
                        onClick={() =>
                          handleImageChange(key, project.images.length, 1)
                        }
                        aria-label="Next"
                      >
                        ›
                      </button>
                    </div>
                  )}

                  <p className="text-sm text-gray-700 text-center font-sans">
                    {project.overview}
                  </p>
                  <p className="text-sm text-gray-600 font-sans">
                    <span className="font-semibold">Role:</span> {project.role}
                  </p>
                  <p className="text-sm text-gray-600 font-sans">
                    <span className="font-semibold">Tech:</span>{" "}
                    {project.technologies.join(", ")}
                  </p>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex items-center space-x-2 text-sm text-white bg-yuruDust px-4 py-1 rounded-full hover:bg-yuruBeige transition font-sans"
                  >
                    <img src="/icons/github.png" alt="GitHub" className="w-4 h-4" />
                    <span>GitHub</span>
                  </a>

                </div>
              );
            })}
        </div>
      </section>

      {/* Research Section */}
      <section className="snap-start min-h-screen bg-white p-10 flex flex-col items-center">
        <h2 className="text-4xl mb-10 font-script">Research</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div
            className="bg-white rounded-xl shadow p-4 space-y-3 flex flex-col items-center hover:shadow-lg transition-shadow duration-300"
            style={{ maxWidth: 320 }}
          >
            <h4
              className="text-lg font-semibold text-yuruDust text-center truncate font-script"
              title="スキーマ駆動開発の研究"
            >
              スキーマ駆動開発の研究
            </h4>
            <p className="text-sm text-yuruBeige">2025年4月 〜 2025年7月</p>

            {/* スライド画像切り替え */}
            <div className="relative w-full flex items-center justify-center">
              <img
                src={`/slides/research/schema${(imageIndex["schema"] ?? 0) + 1}.png`}
                alt={`Research Slide ${(imageIndex["schema"] ?? 0) + 1}`}
                className="w-full h-40 object-cover rounded-lg"
              />
              <button
                className="absolute left-0 text-2xl px-2 text-yuruDust font-bold bg-white bg-opacity-60 rounded-r hover:bg-opacity-90"
                onClick={() =>
                  handleImageChange("schema", 20, -1)
                }
                aria-label="Previous"
              >
                ‹
              </button>
              <button
                className="absolute right-0 text-2xl px-2 text-yuruDust font-bold bg-white bg-opacity-60 rounded-l hover:bg-opacity-90"
                onClick={() =>
                  handleImageChange("schema", 20, 1)
                }
                aria-label="Next"
              >
                ›
              </button>
            </div>

            <p className="text-sm text-gray-700 text-center font-sans">
              スキーマ駆動開発（OpenAPI・gRPC）とコードファースト開発を比較し、設計・実装効率や保守性の違いを検証しました。
            </p>
            <p className="text-sm text-gray-600 font-sans">
              <span className="font-semibold">手法:</span> OpenAPI, gRPC, Code First
            </p>
            <p className="text-sm text-gray-600 font-sans">
              <span className="font-semibold">使用技術:</span> Go, React, Swagger, Protobuf
            </p>
            <a
              href={"https://github.com/haruna1256/schema-vs-code-api-comparison"}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center space-x-2 text-sm text-white bg-yuruDust px-4 py-1 rounded-full hover:bg-yuruBeige transition font-sans"
            >
              <img src="/icons/github.png" alt="GitHub" className="w-4 h-4" />
              <span>GitHub</span>
            </a>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
