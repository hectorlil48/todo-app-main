import ThemeToggle from "./ThemeToggle";

function Header({ isDark, setIsDark }) {
  return (
    <header className="flex justify-between items-center mb-10">
      <h1
        className={`font-bold text-[24px] sm:text-[32px] text-white md:text-[40px] tracking-[15px] transition-all duration-500 ease-in-out leading-[0.8] ${
          isDark ? "sm:leading-[0.8]" : "sm:leading-[1.2]"
        }`}
      >
        TODO
      </h1>
      <ThemeToggle isDark={isDark} setIsDark={setIsDark} />
    </header>
  );
}

export default Header;
