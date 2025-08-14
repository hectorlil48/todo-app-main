import { useState, useEffect } from "react";

function App() {
  const [isDark, setIsDark] = useState(false);

  // Optional: listen to Tailwind dark mode changes
  useEffect(() => {
    const darkClass = document.documentElement.classList.contains("dark");
    setIsDark(darkClass);
  }, []);
  return (
    <div className="min-h-screen">
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

      <main className="relative -mt-[150px] px-4">
        <h1>Hello world</h1>
      </main>
    </div>
  );
}

export default App;
