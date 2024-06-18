import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

export const SideDrawer = ({ isOpen, closeDrawer }) => {
  const searchInputRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen) {
      searchInputRef.current?.focus();
    } else {
      searchInputRef.current?.blur();
    }
  }, [isOpen]);

  function handleSubmit(e) {
    e.preventDefault();
    const searchTerm = searchInputRef.current.value;
    closeDrawer();
    navigate(`search_results/?q=${encodeURIComponent(searchTerm)}`);
    searchInputRef.current.value = '';
  }

  return (
    <div
      className={`fixed inset-0 bg-gray-800 bg-opacity-50 z-50 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out`}
      onClick={closeDrawer}
    >
      <div className="w-full max-w-xs h-full bg-white p-4 pt-7" onClick={e => e.stopPropagation()}>
        {/* Container for input and icon */}
        <div className="relative">
          <form action="" onSubmit={(e) => handleSubmit(e)}>
            <input
              ref={searchInputRef}
              type="search"
              placeholder="חפש..."
              className="w-full pr-10 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-clr3 focus:border-transparent"
            />
          </form>
          {/* Magnifying glass icon */}
          <div className="absolute top-0 right-0 mt-2 mr-3">
            <svg className="w-6 h-6 text-gray-500" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
            </svg>
          </div>
        </div>
        {/* Other drawer content */}
      </div>
    </div>
  );
};