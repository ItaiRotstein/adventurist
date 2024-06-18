import { Link } from "react-router-dom";

export const Navbar = () => {

  return (
    <ul className="hidden lg:flex flex-wrap gap-6 xl:gap-8 justify-center xl:text-lg font-varela">
      <li>
        <a href={"/פעילויות"} className="hover:underline">כל הפעילויות</a>
      </li>
      <li>
        <a className="hover:underline" href="#size">אזורים</a>
      </li>
      <li>
        <a className="hover:underline" href="#attributes">המלצות</a>
      </li>
      <li>
        <a className="hover:underline" href="#how-to-use">מי אנחנו</a>
      </li>
      <li>
        <a className="hover:underline" href="#faq">שאלות נפוצות</a>
      </li>
      <li>
        <a className="hover:underline" href="#contact">צור קשר</a>
      </li>
    </ul>
  );
};