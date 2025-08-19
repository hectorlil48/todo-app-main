import { useState, useEffect } from "react";

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
    <div className="min-h-screen font-display">
      <div className="relative w-full xs:h-[300px] h-[200px] overflow-hidden">
        {/* Mobile Light */}
        <div
          className={`
          absolute inset-0 bg-no-repeat bg-center bg-cover
          bg-[url('/images/bg-mobile-light.jpg')]
          xs:bg-[url('/images/bg-desktop-light.jpg')]
          transition-all duration-500 ease-in-out
          ${isDark ? "opacity-0" : "opacity-100"}
        `}
        ></div>

        {/* Mobile Dark */}
        <div
          className={`
          absolute inset-0 bg-no-repeat bg-center bg-cover
          bg-[url('/images/bg-mobile-dark.jpg')]
          xs:bg-[url('/images/bg-desktop-dark.jpg')]
          transition-all duration-500 ease-in-out
          ${isDark ? "opacity-100" : "opacity-0"}
        `}
        ></div>
      </div>

      <main className="relative -mt-[158px] xs:-mt-[252px] max-w-[541px] mx-auto  px-6">
        <header className="flex justify-between items-center">
          <h1 className="font-semibold text-white text-[24px] tracking-[15px]">
            TODO
          </h1>
          <button onClick={() => setIsDark(!isDark)}>
            <img
              src={
                isDark
                  ? "public/images/icon-sun.svg"
                  : "public/images/icon-moon.svg"
              }
              alt="Toggle theme"
              width={20}
              height={20}
            />
          </button>
        </header>
      </main>
    </div>
  );
}

export default App;
