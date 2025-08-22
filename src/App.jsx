import { useState, useEffect } from "react";
import MainBackground from "./components/MainBackground";
import Header from "./components/Header";

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
    <main className="min-h-screen font-display bg-background dark:bg-background transition-colors duration-500">
      <section className="max-w-[1440px] mx-auto">
        <MainBackground isDark={isDark} />

        {/* Main Content */}
        <div className="relative -mt-[158px] xs:-mt-[252px] md:-mt-[240px] max-w-[560px] mx-auto px-6">
          <Header isDark={isDark} setIsDark={setIsDark} />
        </div>
      </section>
    </main>
  );
}

export default App;
