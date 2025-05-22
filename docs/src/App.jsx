import React from "react";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import styles from "./App.module.css";

export default function App() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </>
  );
}
