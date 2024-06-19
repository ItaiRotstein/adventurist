
const Search = () => {
    return (
        <div className="main-layout py-8">
            <form action="" className="">
                <div className="flex flex-col">
                    <div className="relative">
                        <input
                            type="search"
                            placeholder="חפש..."
                            className="bg-white w-full pr-10 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-clr3 focus:border-transparent"
                        />
                        {/* Magnifying glass icon */}
                        <div className="bg-white absolute top-0 right-0 mt-2 mr-3">
                            <svg className="w-6 h-6 text-gray-500" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                                <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                            </svg>
                        </div>
                    </div>
                    <div className="flex justify-between mt-2">
                        <select className="bg-white text-center w-1/2 p-2 border border-black rounded-3xl" name="activity-type">
                            <option value="">סוג פעילות</option>
                            <option value="hiking">גלישה</option>
                            <option value="scuba-diving">צלילה</option>
                            <option value="paragliding">מצנח רחיפה</option>
                        </select>
                        <select className="bg-white text-center w-1/2 p-2 border border-black rounded-3xl" name="location">
                            <option value="">אזור בארץ</option>
                            <option value="hiking">דרום</option>
                            <option value="scuba-diving">מרכז</option>
                            <option value="paragliding">צפון</option>
                        </select>
                    </div>

                </div>
            </form>
        </div>
    );
};

export default Search;