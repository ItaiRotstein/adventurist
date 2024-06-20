import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getAllKinds } from "../service/spot.service";
import { ClipLoader } from "react-spinners";

const Search = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [region, setRegion] = useState('');
    const [kind, setKind] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [kinds, setKinds] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const getKinds = async () => {
            try {
                const response = await getAllKinds();
                setKinds(response);
            } catch (error) {
                console.log("Error fetching kinds", error);
            } finally {
                setIsLoading(false);
            }
        };
        getKinds();

    }, []);

    function handleSubmit(e) {
        e.preventDefault();
        if (kind === '' && searchTerm === '' && region === '') return;
        navigate(`search_results/?q=${encodeURIComponent(searchTerm)}&kind=${encodeURIComponent(kind)}&region=${encodeURIComponent(region)}`);
        setSearchTerm('');
        setKind('');
        setRegion('');
    }

    return (
        <div className="main-layout py-8">
            <form onSubmit={(e) => handleSubmit(e)} className="p-4 shadow-md rounded">
                <div className="flex flex-col gap-8 items-center">
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
                                onChange={(e) => { setKind(e.target.value); }}
                                value={kind}
                            >
                                <option value="">סוג פעילות</option>
                                {kinds.map((kind, index) => (
                                    <option key={kind + index} value={kind}>{kind}</option>
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
                </div>
            </form>
        </div>
    );
};

export default Search;