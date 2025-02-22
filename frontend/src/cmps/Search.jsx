import { useState, useEffect, useRef, useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { SpotContext } from "../context/SpotContext";

const Search = ({ parent }) => {
    const { types, isLoading } = useContext(SpotContext);
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const [searchTerm, setSearchTerm] = useState('');
    const [region, setRegion] = useState('');
    const [type, setType] = useState(queryParams.get('type') || '');
    const navigate = useNavigate();

    // Custom dropdown state
    const [isTypeOpen, setIsTypeOpen] = useState(false);
    const [isRegionOpen, setIsRegionOpen] = useState(false);

    // Refs for detecting outside clicks
    const typeRef = useRef(null);
    const regionRef = useRef(null);

    const queryFromUrl = queryParams.get('q');
    const typeFromUrl = queryParams.get('type');
    const regionFromUrl = queryParams.get('region');

    useEffect(() => {
        if (queryFromUrl) setSearchTerm(queryParams.get('q'));
        if (regionFromUrl) setRegion(queryParams.get('region'));
        if (typeFromUrl) setType(queryParams.get('type'));
    }, [queryFromUrl, typeFromUrl, regionFromUrl]);

    // Close dropdowns when clicking outside
    useEffect(() => {
        function handleClickOutside(event) {
            if (typeRef.current && !typeRef.current.contains(event.target)) {
                setIsTypeOpen(false);
            }
            if (regionRef.current && !regionRef.current.contains(event.target)) {
                setIsRegionOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    function handleSubmit(e) {
        e.preventDefault();
        if (type === '' && searchTerm === '' && region === '') return;
        parent === 'HomePage'
            ? navigate(`search_results/?q=${encodeURIComponent(searchTerm)}&type=${encodeURIComponent(type)}&region=${encodeURIComponent(region)}`)
            : navigate(`?q=${encodeURIComponent(searchTerm)}&type=${encodeURIComponent(type)}&region=${encodeURIComponent(region)}`);
        
        setSearchTerm('');
        setType('');
        setRegion('');
    }

    return (
        <form
            onSubmit={handleSubmit}
            className={`${parent === 'HomePage' ? 'px-4 md:px-0 mt-20 gap-8' : 'p-16 px-0 gap-4'} flex flex-col items-center rounded max-w-2xl mx-auto`}
        >
            <div className="relative w-full">
                <input
                    id="search"
                    type="search"
                    placeholder="חפש..."
                    className="bg-gray-100 w-full pr-10 p-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-clr3 focus:border-transparent"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    maxLength={25}
                />
                <label htmlFor="search" className="bg-gray-100 absolute top-0 right-0 mt-2 mr-3">
                    <svg className="w-6 h-6 text-gray-500" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                    </svg>
                </label>
            </div>

            {/* Activity Type Dropdown */}
            <div className="relative w-full" ref={typeRef}>
                <button
                    type="button"
                    onClick={() => setIsTypeOpen(!isTypeOpen)}
                    className="bg-gray-100 w-full p-2 border border-gray-300 rounded-full flex justify-between items-center"
                >
                    {type ? type : "סוג פעילות"}
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                </button>
                {isTypeOpen && (
                    <ul className="absolute z-10 w-full bg-white border border-gray-300 rounded-md shadow-md mt-1">
                        {types.map((typeOption, index) => (
                            <li key={index} className="p-2 hover:bg-gray-100 cursor-pointer"
                                onClick={() => {
                                    setType(typeOption);
                                    setIsTypeOpen(false);
                                }}>
                                {typeOption}
                            </li>
                        ))}
                    </ul>
                )}
            </div>

            {/* Region Dropdown */}
            <div className="relative w-full" ref={regionRef}>
                <button
                    type="button"
                    onClick={() => setIsRegionOpen(!isRegionOpen)}
                    className="bg-gray-100 w-full p-2 border border-gray-300 rounded-full flex justify-between items-center"
                >
                    {region ? region : "אזור בארץ"}
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                </button>
                {isRegionOpen && (
                    <ul className="absolute z-10 w-full bg-white border border-gray-300 rounded-md shadow-md mt-1">
                        {["צפון", "מרכז", "דרום"].map((regionOption, index) => (
                            <li key={index} className="p-2 hover:bg-gray-100 cursor-pointer"
                                onClick={() => {
                                    setRegion(regionOption);
                                    setIsRegionOpen(false);
                                }}>
                                {regionOption}
                            </li>
                        ))}
                    </ul>
                )}
            </div>

            <button type="submit" className="btn-main mb-4 hover:brightness-75">חפש</button>
        </form>
    );
};

export default Search;
