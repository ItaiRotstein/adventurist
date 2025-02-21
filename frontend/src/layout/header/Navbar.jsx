import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <ul className="hidden lg:flex flex-wrap gap-6 xl:gap-8 justify-center xl:text-lg font-varela relative">
      <li>
        <a href="/spots" className="hover:underline">כל הפעילויות</a>
      </li>
      <li className="relative group">
        <p className="hover:underline cursor-pointer">אזורים</p>
        <RegionsSubMenu />
      </li>
      <li>
        <a className="hover:underline" href="/blog">חוויות</a>
      </li>
      <li>
        <a className="hover:underline" href="/favorites">מועדפים</a>
      </li>
      <li>
        <a className="hover:underline" href="/about">מי אנחנו</a>
      </li>
      <li>
        <a className="hover:underline" href="/contact">צור קשר</a>
      </li>
    </ul>
  );
};

function RegionsSubMenu() {
  return (
    < ul className="absolute right-0 mt-2 w-36 bg-white shadow-lg rounded-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300" >
      {
        ["צפון", "מרכז", "דרום"].map((region) => (
          <li key={region} className="border-b last:border-none">
            <Link
              to={`/search_results/?region=${region}`}
              className="block px-4 py-2 hover:bg-gray-100 text-right"
            >
              {region}
            </Link>
          </li>
        ))
      }
    </ul >
  );
}