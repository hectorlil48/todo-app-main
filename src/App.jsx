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
      <section className="max-w-[1440px] mx-auto relative">
        <MainBackground isDark={isDark} />

        {/* Main Content */}
        <div className="absolute top-[48px] sm:top-[70px] left-1/2 transform -translate-x-1/2 w-full max-w-[560px] mx-auto px-6 md:px-[9px]">
          <Header isDark={isDark} setIsDark={setIsDark} />
        </div>
      </section>
    </main>
  );
}

export default App;
