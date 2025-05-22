import React from "react";

const projects = [
  {
    name: "food shuffle",
    description: "すれ違いで様々なお店の情報を受け取り、新たなお客とお店の関係を繋げるシステム",
    url: "https://github.com/Doremifa-donuts/foodshuffle",
  },
  {
    name: "あああああ",
    description: "ああああああ",
    url: "https://github.com/haruna1256",
  }
];

export default function Projects() {
  return (
    <section id="projects">
      <h2 style={{ fontWeight: 700, fontSize: "2rem", marginBottom: "1rem" }}>Projects</h2>
      <div style={{ display: "grid", gap: "1.5rem" }}>
        {projects.map(({ name, description, url }) => (
          <a key={name} href={url} target="_blank" rel="noopener noreferrer"
            style={{
              padding: "1rem",
              border: "1px solid var(--color-primary)",
              borderRadius: "8px",
              textDecoration: "none",
              color: "var(--color-primary)",
              transition: "box-shadow 0.3s ease",
              display: "block"
            }}
            onMouseEnter={e => e.currentTarget.style.boxShadow = "0 4px 20px rgba(56,178,172,0.4)"}
            onMouseLeave={e => e.currentTarget.style.boxShadow = "none"}
          >
            <h3 style={{ marginTop: 0 }}>{name}</h3>
            <p style={{ marginBottom: 0 }}>{description}</p>
          </a>
        ))}
      </div>
    </section>
  );
}
