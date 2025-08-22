function ThemeToggle({ isDark, setIsDark }) {
  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className="transition-transform duration-500 ease-in-out"
    >
      <img
        src={isDark ? "./images/icon-sun.svg" : "./images/icon-moon.svg"}
        alt="Toggle theme"
        className={`
          w-[20px] sm:w-[25px] h-[20px] sm:h-[26px]
          transition-all duration-500 ease-in-out
          ${isDark ? "rotate-180 opacity-80" : "rotate-0 opacity-100"}
        `}
      />
    </button>
  );
}

export default ThemeToggle;
