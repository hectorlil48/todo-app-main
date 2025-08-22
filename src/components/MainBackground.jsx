function MainBackground({ isDark }) {
  const baseClasses =
    "absolute inset-0 bg-no-repeat bg-cover transition-opacity duration-500 ease-in-out";

  return (
    <div className="relative w-full xs:h-[300px] h-[200px] overflow-hidden">
      {/* Light Background */}
      <div
        className={`${baseClasses} bg-[url('/images/bg-mobile-light.jpg')] xs:bg-[url('/images/bg-desktop-light.jpg')] ${
          isDark ? "opacity-0" : "opacity-100"
        }`}
      />

      {/* Dark Background */}
      <div
        className={`${baseClasses} bg-[url('/images/bg-mobile-dark.jpg')] xs:bg-[url('/images/bg-desktop-dark.jpg')] ${
          isDark ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
}

export default MainBackground;
