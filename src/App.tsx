import "./App.css";

function App() {
  return (
    <div className="grid grid-cols-[300px_1fr] grid-rows-[auto_1fr]">
      <div className="bg-orange-400 col-span-2 p-2">Nav</div>
      <div className="bg-yellow-400 p-2 hidden lg:block">Aside</div>
      <div className="bg-blue-500 p-2 col-span-full lg:col-span-1 lg:col-start-2">
        Main
      </div>
    </div>
  );
}

export default App;
