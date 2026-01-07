import { useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  useEffect(() => {
    const theme = localStorage.getItem("theme");

    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);
  return (
    <div className="grid grid-cols-[300px_1fr] grid-rows-[auto_1fr] bg-white dark:bg-gray-900 text-black dark:text-white">
      <div className="col-span-2">
        <Navbar />
      </div>
      <div className="bg-yellow-400  hidden lg:block">Aside</div>
      <div className="bg-blue-500 col-span-full lg:col-span-1 lg:col-start-2">
        Main
      </div>
    </div>
  );
}

export default App;
