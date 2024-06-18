
const Search = () => {
    return (
        <div className="main-layout py-8">
            <form action="">
                <div className="flex flex-col">
                    <input type="search" placeholder="חיפוש חופשי" className="border border-black rounded p-2" />
                    <div className="flex justify-around mt-2">
                        <select className="p-2 border border-black rounded-3xl" name="activity-type">
                            <option value="">סוג פעילות</option>
                            <option value="hiking">גלישה</option>
                            <option value="scuba-diving">צלילה</option>
                            <option value="paragliding">מצנח רחיפה</option>
                        </select>
                        <select className="p-2 border border-black rounded-3xl" name="location">
                            <option value="">אזור בארץ</option>
                            <option value="hiking">דרום</option>
                            <option value="scuba-diving">מרכז</option>
                            <option value="paragliding">צפון</option>
                        </select>
                    </div>
                    <div className="flex justify-around mt-2">
                        <select className="p-2 border border-black rounded-3xl" name="difficulty">
                            <option value="">דרגת קושי</option>
                            <option value="beginner">מתחיל</option>
                            <option value="intermediate">מתקדם</option>
                            <option value="advanced">מקצוען</option>
                        </select>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Search;