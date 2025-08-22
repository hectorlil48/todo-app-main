import { useState, useEffect } from "react";
import MainBackground from "./components/MainBackground";

function App() {
  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);
  return (
    <main className="min-h-screen font-display bg-background dark:bg-background">
      <section className="max-w-[1440px] mx-auto">
        <MainBackground isDark={isDark} />
      </section>
    </main>
  );
}

export default App;
