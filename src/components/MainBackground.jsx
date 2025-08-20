function MainBackground({ isDark }) {
  return (
    <div className="relative w-full xs:h-[300px] h-[200px] overflow-hidden">
      {/* Light Background */}
      <div
        className={`
          absolute inset-0 bg-no-repeat bg-center bg-cover
          bg-[url('/images/bg-mobile-light.jpg')]
          xs:bg-[url('/images/bg-desktop-light.jpg')]
          transition-opacity duration-500 ease-in-out
          ${isDark ? "opacity-0" : "opacity-100"}
        `}
      ></div>

      {/* Dark Background */}
      <div
        className={`
          absolute inset-0 bg-no-repeat bg-center bg-cover
          bg-[url('/images/bg-mobile-dark.jpg')]
          xs:bg-[url('/images/bg-desktop-dark.jpg')]
          transition-opacity duration-500 ease-in-out
          ${isDark ? "opacity-100" : "opacity-0"}
        `}
      ></div>
    </div>
  );
}

export default MainBackground;
