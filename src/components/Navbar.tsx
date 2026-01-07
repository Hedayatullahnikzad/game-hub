import logo from "../assets/logo.webp";
const Navbar = () => {
  const toggleTheme = () => {
    const html = document.documentElement;
    const isDark = html.classList.contains("dark");

    if (isDark) {
      html.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      html.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  };
  return (
    <div className="flex items-center dark:bg-gray-800">
      <img src={logo} alt="logo" className="w-[60px] h-[60px]" />
      <span className="font-bold text-black dark:text-white">GameHub</span>

      <button
        onClick={toggleTheme}
        className="px-3 py-1 rounded-md bg-black text-white dark:bg-white dark:text-black"
      >
        Toggle
      </button>
    </div>
  );
};

export default Navbar;
