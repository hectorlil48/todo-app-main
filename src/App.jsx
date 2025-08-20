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
    <div className="min-h-screen max-w-[1440px] mx-auto font-display">
      <MainBackground isDark={isDark} />

      <main className="relative -mt-[158px] xs:-mt-[252px] md:-mt-[240px] max-w-[560px] mx-auto  px-6">
        <header className="flex justify-between items-center">
          <h1 className="font-semibold sm:font-bold text-white text-[24px] sm:text-[32px] md:text-[40px] tracking-[15px]  transition-all duration-500 ease-in-out">
            TODO
          </h1>
          <button onClick={() => setIsDark(!isDark)}>
            <img
              src={isDark ? "./images/icon-sun.svg" : "./images/icon-moon.svg"}
              alt="Toggle theme"
              className="w-[20px] sm:w-[25px] h-[20px] sm:h-[26px] transition-all duration-500 ease-in-out"
            />
          </button>
        </header>
      </main>
    </div>
  );
}

export default App;
