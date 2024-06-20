
const Search = () => {
    return (
        <div className="main-layout py-8">
            <form action="" className="p-4 shadow-md rounded">
                <div className="flex flex-col gap-8 items-center">
                    <div className="relative w-full">
                        <input
                            type="search"
                            placeholder="חפש..."
                            className="bg-gray-100 w-full pr-10 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-clr3 focus:border-transparent"
                        />
                        {/* Magnifying glass icon */}
                        <div className="bg-gray-100 absolute top-0 right-0 mt-2 mr-3">
                            <svg className="w-6 h-6 text-gray-500" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                                <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                            </svg>
                        </div>
                    </div>
                    {/* <div className="mt-2"> */}
                        <select className="bg-gray-100 w-full p-2 border border-gray-300 rounded" name="activity-type">
                            <option value="">סוג פעילות</option>
                            <option value="hiking">גלישה</option>
                            <option value="scuba-diving">צלילה</option>
                            <option value="paragliding">מצנח רחיפה</option>
                        </select>
                        <select className="bg-gray-100 w-full p-2 border border-gray-300 rounded" name="location">
                            <option value="">אזור בארץ</option>
                            <option value="hiking">דרום</option>
                            <option value="scuba-diving">מרכז</option>
                            <option value="paragliding">צפון</option>
                        </select>
                    {/* </div> */}

                </div>
            </form>
        </div>
    );
};

export default Search;