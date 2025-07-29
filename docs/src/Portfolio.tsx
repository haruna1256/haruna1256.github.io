import React from "react";
// import { CategoryBlock } from "./components/CategoryBlock";

const profileIconUrl = "/profile.png"; // public直下に置いたプロフィール画像パス

const skills = [
  { name: "Swift", iconUrl: "/icons/swift.png" },
  { name: "Flutter", iconUrl: "/icons/flutter.png" },
  { name: "React", iconUrl: "/icons/react.png" },
  { name: "HTML", iconUrl: "/icons/html.png" },
  { name: "CSS", iconUrl: "/icons/css.png" },
  { name: "Figma", iconUrl: "/icons/figma.png" },
  { name: "Git", iconUrl: "/icons/git.png" },
];

// 共通型定義（gradeなどをオプショナルに）
type Project = {
  title: string;
  period: string;
  grade?: string;
  overview?: string;
  role?: string;
  features?: string;
  technologies?: string[];
};

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
    },
  ],
  Flutter: [
    {
      title: "タイトル",
      period: "日程",
      overview: "説明",
      technologies: ["Flutter", "Firebase", "Sqlite", "Github", "Youtube"],
    },
  ],
  React: [
    {
      title: "React制作物1",
      period: "期間未定",
      overview: "Reactを使ったポートフォリオやSPAなどの制作物",
    },
  ],
  HTML: [
    {
      title: "HTML制作物1",
      period: "期間未定",
      overview: "HTML/CSSで作成したシンプルなサイトなど",
    },
  ],
};

export const Portfolio: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto p-6 space-y-10 bg-gray-50 min-h-screen">
      {/* ヘッダー */}
      <header className="text-center text-4xl font-bold mb-12">kokomeow.com</header>

      {/* プロフィール */}
      <section className="flex flex-col md:flex-row gap-6 bg-white p-6 rounded shadow">
        {/* 左：アイコン */}
        <div className="flex-shrink-0">
          <img
            src={profileIconUrl}
            alt="プロフィールアイコン"
            className="w-32 h-32 rounded-full object-cover"
          />
        </div>
        {/* 右：名前等 */}
        <div className="flex-grow flex flex-col justify-center space-y-2">
          <h2 className="text-2xl font-semibold">川岸 遥奈 (Haruna Kawagishi)</h2>
          <p className="text-indigo-600 font-medium">企画・問題定義重視 エンジニア</p>
          <p className="italic text-gray-700">自分の考えを伝え、課題解決にフォーカスした開発を大切にしています。</p>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="font-semibold border-b border-indigo-500 mb-2">私について</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                企画・問題定義重視。技術だけでなく、「どんな課題を解決したいのか」「どの手段が最適か」を重視しています。個人開発では「なぜこのアプリを作るのか」「誰の役に立てるのか」を考えながら設計・実装しています。
              </p>
            </div>
            <div>
              <h3 className="font-semibold border-b border-indigo-500 mb-2">コミュニケーション力</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                リーダーや発表経験を通して、物事を分かりやすく整理し伝える力を磨いてきました。動くものだけでなく、その背後にある意図や価値を明確にし、良いプロダクト作りに貢献します。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* スキルセクション */}
      <section className="bg-white p-6 rounded shadow">
        <h2 className="text-xl font-semibold mb-4">スキル</h2>
        <div className="flex flex-wrap gap-6 justify-center items-center">
          {skills.map((skill) => (
            <div key={skill.name} title={skill.name} className="cursor-default w-12 h-12">
              <img
                src={skill.iconUrl}
                alt={skill.name}
                className="w-full h-full object-contain"
              />
            </div>
          ))}
        </div>
      </section>

      {/* 制作物セクション */}
      <section>
        {Object.entries(projectsByCategory).map(([category, projects]) => (
          <div key={category} className="mb-10">
            <h2 className="text-2xl font-bold border-b border-indigo-600 pb-1 mb-4">{category}</h2>
            <div className="space-y-6">
              {projects.map((p, i) => (
                <div
                  key={i}
                  className="bg-white p-6 rounded shadow hover:shadow-lg transition-shadow"
                >
                  <h3 className="text-lg font-semibold mb-1">■ {p.title}</h3>
                  {p.period && <p className="text-sm text-gray-500 mb-1">{p.period}</p>}
                  {p.grade && <p className="text-sm text-gray-500 mb-1">{p.grade}</p>}
                  {p.overview && (
                    <>
                      <p className="font-semibold mt-2">概要</p>
                      <p className="text-gray-700">{p.overview}</p>
                    </>
                  )}
                  {p.role && (
                    <>
                      <p className="font-semibold mt-2">役割</p>
                      <p className="text-gray-700">{p.role}</p>
                    </>
                  )}
                  {p.features && (
                    <>
                      <p className="font-semibold mt-2">特徴</p>
                      <p className="text-gray-700">{p.features}</p>
                    </>
                  )}
                  {p.technologies && (
                    <>
                      <p className="font-semibold mt-2">技術スタック</p>
                      <ul className="list-disc list-inside text-gray-700">
                        {p.technologies.map((tech, idx) => (
                          <li key={idx}>{tech}</li>
                        ))}
                      </ul>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>
    </div>
  );
};
