import React from "react";

const skills = [
  "JavaScript", "React", "TypeScript", "Node.js", "Express", "Docker"
  
];

// 使用可能な言語、フレームワーク、ツールを一覧で示す。例えば：

// 言語：Swift、Kotlin、Dart（Flutter）、JavaScriptなど。

// フレームワーク：Flutter、React Native、Jetpack Composeなど。

// ツール：Xcode、Android Studio、Firebase、Git、CI/CDツール（GitHub Actions、Jenkinsなど）など。

export default function Skills() {
  return (
    <section id="skills">
      <h2 style={{ fontWeight: 700, fontSize: "2rem", marginBottom: "1rem" }}>Skills</h2>
      <ul style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
        gap: "1rem",
        listStyle: "none",
        padding: 0,
        margin: 0,
      }}>
        {skills.map(skill => (
          <li key={skill} style={{
            backgroundColor: "var(--color-accent)",
            color: "white",
            borderRadius: "6px",
            padding: "0.75rem 1rem",
            fontWeight: "600",
            textAlign: "center",
            userSelect: "none",
          }}>{skill}</li>
        ))}
      </ul>
    </section>
  );
}
