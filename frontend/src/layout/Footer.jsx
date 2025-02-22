
import { IoLogoInstagram } from "react-icons/io5";
import { IoLogoFacebook } from "react-icons/io5";
import { IoLogoWhatsapp } from "react-icons/io5";
import { IoMailOutline } from "react-icons/io5";
import { IoCallOutline } from "react-icons/io5";

import { HashLink } from 'react-router-hash-link';
import { Link } from "react-router-dom";


export const Footer = () => {
  return (
    <footer className="bg-clr2 text-white text-center text-md py-6 xl:px-80">
      <div className="flex flex-col md:flex-row-reverse md:justify-around gap-6">
        <div className=" w-1/4 mx-auto">
            <ul>
              <li className="hover:underline mb-3"><Link to="/">Adventurist</Link></li>
              <li className="hover:underline mb-3"><Link to="/spots" >כל הפעילויות</Link></li>
              <li className="hover:underline mb-3"><HashLink to="/#faq">שאלות נפוצות</HashLink></li>
              <li className="hover:underline mb-3"><Link to="/contact">צור קשר</Link></li>
              <li className="hover:underline mb-3"><Link to="/conditions-privacy">תנאי שימוש ופרטיות</Link></li>
            </ul>
          <div className="mt-8">
            <h2 className="font-heebo_bold"><small>®</small>Adventurist</h2>
            <p>תל-אביב</p>
          </div>
        </div>
        <div className="md:-order-1 w-1/4 mx-auto">
          <h2>עקבו אחרינו</h2>
          <div className="flex justify-center items-center gap-6 mt-2">
            <a href="#"><IoLogoInstagram className="w-7 h-7" /></a>
            <a href="#"><IoLogoFacebook className="w-7 h-7" /></a>
          </div>
        </div>
        <div className=" w-1/4 mx-auto">
          <h2>דברו איתנו</h2>
          <div className="flex justify-center gap-6 mt-2">
            <a href="https://wa.me/972549934906"><IoLogoWhatsapp className="w-7 h-7" /></a>
            <a href="mailto:info@adventurist.co.il"><IoMailOutline className="w-7 h-7" /></a>
            <a href="tel:0549934906"><IoCallOutline className="w-7 h-7" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};