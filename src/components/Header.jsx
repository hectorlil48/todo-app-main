import ThemeToggle from "./ThemeToggle";

function Header({ isDark, setIsDark }) {
  return (
    <header className="flex justify-between items-center">
      <h1
        className="font-semibold text-[24px] sm:text-[32px] text-white md:text-[40px] tracking-[15px]
                   transition-all duration-500 ease-in-out"
      >
        TODO
      </h1>
      <ThemeToggle isDark={isDark} setIsDark={setIsDark} />
    </header>
  );
}

export default Header;
