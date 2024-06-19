import { Link } from "react-router-dom"
import { Icon } from "../cmps/Icon";


export const NotFoundPage = () => {
    return (
        <>
            <section className="items-center h-96 text-center flex flex-col justify-center ">
                <Icon icon="FaExclamationTriangle" className="text-yellow-400 text-6xl mb-4"/>
                <h1 className="text-4xl font-bold mb-4">404 שגיאה</h1>
                <p className="text-xl mb-5">הדף הזה לא קיים</p>
                <Link
                    to="/"
                    className="text-white bg-indigo-700 hover:bg-indigo-900 rounded-md px-3 py-2 mt-4"
                >חזרה
                </Link>
            </section>
        </>
    )
}

