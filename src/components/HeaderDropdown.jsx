import  { useState, useRef, useEffect } from "react";


const Dropdown = () => {
    const dropdownRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { label: "AACIS", href: "#" },
    { label: "About Us", href: "#" },
    { label: "Register", href: "/aacis/register" },
    { label: "Contact Us", href: "#" },
  ];

  const toggleDropdown = (e) => {
    e.stopPropagation(); // Prevents the click from triggering outside listener
    setIsOpen((prev) => !prev);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    // Add event listener for clicks outside
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative inline-block z-40">
      {/* Dropdown Button */}
      <button
      type="button"
        onClick={toggleDropdown}
        className="bg-white text-[#171717] font-semibold text-base flex items-center px-4 z-40"
      >
        AACIS
        <span className="ml-2 text-sm">▼</span>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <ul className="absolute left-0 mt-2 w-48 bg-blue-900 text-white rounded-md shadow-lg z-10 cursor-pointer">
          {links.map((link, index) => (
            <li
              key={index}
              className="border-b border-blue-700 last:border-b-0 cursor-pointer"
            >
              <a
                href={link.href}
                className="block px-4 py-2 hover:bg-blue-800 uppercase font-mono"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
