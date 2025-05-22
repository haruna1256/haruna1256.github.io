import React from "react";

const navItems = ["About", "Skills", "Projects", "Contact"];

export default function Header() {
  return (
    <header style={{
      position: "sticky",
      top: 0,
      backgroundColor: "white",
      borderBottom: "1px solid #ddd",
      padding: "1rem 2rem",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      zIndex: 100,
    }}>
      <h1 style={{ margin: 0, fontWeight: 700, fontSize: "1.5rem" }}>Haruna Portfolio</h1>
      <nav>
        <ul style={{
          display: "flex",
          gap: "1.5rem",
          margin: 0,
          padding: 0,
          listStyle: "none",
          fontWeight: 500,
        }}>
          {navItems.map(item => (
            <li key={item}>
              <a href={`#${item.toLowerCase()}`} style={{
                textDecoration: "none",
                color: "var(--color-primary)",
                transition: "color 0.3s",
              }}
                onMouseEnter={e => e.currentTarget.style.color = "var(--color-accent)"}
                onMouseLeave={e => e.currentTarget.style.color = "var(--color-primary)"}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
