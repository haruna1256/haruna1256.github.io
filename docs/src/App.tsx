import React from "react";
import './index.css';
import { ProjectList } from "./components/ProjectList";

function App() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-center my-6">制作物一覧</h1>
      <ProjectList />
    </div>
  );
}

export default App;
