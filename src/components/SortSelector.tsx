import { useState } from "react";
import { BsChevronDown } from "react-icons/bs";

const SortSelector = () => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<string>("Relevance");

  const items = [
    "Relevance",
    "Date added",
    "Name",
    "Release date",
    "Popularity",
    "Average rating",
  ];

  return (
    <div className="relative inline-block text-left">
      {/* Button */}
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 rounded-md border border-gray-300 px-4 py-2 text-sm font-medium
                   hover:bg-gray-100 dark:border-gray-600 dark:text-white dark:hover:bg-gray-700"
      >
        {selected}
        <BsChevronDown className="text-gray-500" />
      </button>

      {/* Dropdown */}
      {open && (
        <div
          className="absolute left-0 mt-2 w-48 rounded-md border border-gray-200 bg-white shadow-lg
                     dark:border-gray-700 dark:bg-gray-800"
        >
          <ul className="py-1">
            {items.map((item) => (
              <li
                key={item}
                onClick={() => {
                  setSelected(item);
                  setOpen(false);
                }}
                className="cursor-pointer px-4 py-2 text-sm
                           hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SortSelector;
