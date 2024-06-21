import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getAllTypes } from "../service/spot.service";
import { ClipLoader } from "react-spinners";

const Search = ({ parent }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [region, setRegion] = useState('');
    const [type, setType] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [types, setTypes] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const getTypes = async () => {
            try {
                const response = await getAllTypes();
                setTypes(response);
            } catch (error) {
                console.log("Error fetching types", error);
            } finally {
                setIsLoading(false);
            }
        };
        getTypes();
    }, []);

    function handleSubmit(e) {
        e.preventDefault();
        if (type === '' && searchTerm === '' && region === '') return;
        parent === 'HomePage' ? (
            navigate(`search_results/?q=${encodeURIComponent(searchTerm)}&type=${encodeURIComponent(type)}&region=${encodeURIComponent(region)}`)
        ) : (
            navigate(`?q=${encodeURIComponent(searchTerm)}&type=${encodeURIComponent(type)}&region=${encodeURIComponent(region)}`)
        );
        setSearchTerm('');
        setType('');
        setRegion('');
    }

    return (
        <form
            onSubmit={(e) => handleSubmit(e)}
            className={`${parent === 'HomePage' ? 'main-layout shadow-2xl p-4 mt-8 gap-8' : 'p-16 px-0 gap-4'} flex flex-col items-center rounded`}
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
                {/* Magnifying glass icon */}
                <label htmlFor="search" className="bg-gray-100 absolute top-0 right-0 mt-2 mr-3">
                    <svg className="w-6 h-6 text-gray-500" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                    </svg>
                </label>
            </div>
            {
                isLoading ? (
                    <div className="flex justify-center items-center bg-gray-100 w-full p-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-clr3 focus:border-transparent">
                        <ClipLoader size={23} />
                    </div>
                ) : (
                    <select
                        className="bg-gray-100 w-full p-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-clr3 focus:border-transparent"
                        onChange={(e) => { setType(e.target.value); }}
                        value={type}
                    >
                        <option value="">סוג פעילות</option>
                        {types.map((type, index) => (
                            <option key={type + index} value={type}>{type}</option>
                        ))}
                    </select>
                )
            }
            <select
                className="bg-gray-100 w-full p-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-clr3 focus:border-transparent"
                onChange={(e) => { setRegion(e.target.value); }}
                value={region}
            >
                <option value="">אזור בארץ</option>
                <option value="צפון">צפון</option>
                <option value="דרום">דרום</option>
                <option value="מרכז">מרכז</option>
            </select>
            <button type="submit" className="bg-clr3 text-white w-1/2 py-2 rounded-full hover:brightness-75 shadow">חפש</button>
        </form>
    );
};

export default Search;