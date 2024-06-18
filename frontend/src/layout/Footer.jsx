
import { IoLogoInstagram } from "react-icons/io5";
import { IoLogoFacebook } from "react-icons/io5";
import { IoLogoWhatsapp } from "react-icons/io5";
import { IoMailOutline } from "react-icons/io5";
import { IoCallOutline } from "react-icons/io5";


export const Footer = () => {
  return (
    <footer className="bg-clr2 text-white text-center text-md py-6 xl:px-80">
      <div className="flex flex-col md:flex-row-reverse md:justify-around gap-6">
        <div className=" w-1/4 mx-auto">
            <ul>
              <li className="hover:underline mb-3"><a href="/">Adventurist</a></li>
              <li className="hover:underline mb-3"><a href="/פעילויות" >כל הפעילויות</a></li>
              <li className="hover:underline mb-3"><a href="/#faq">שאלות נפוצות</a></li>
              <li className="hover:underline mb-3"><a href="#contact">צור קשר</a></li>
              <li className="hover:underline mb-3"><a href="/conditions-privacy">תנאי שימוש ופרטיות</a></li>
            </ul>
          <div className="mt-8">
            <h2 className="font-heebo_bold"><small>®</small>Adventurist</h2>
            <p>תל-אביב</p>
          </div>
        </div>
        <div className="md:-order-1 w-1/4 mx-auto">
          <h2>עקבו אחרינו</h2>
          <div className="flex justify-center items-center gap-6 mt-2">
            <a href="http://www.instagram.com/silveretteisrael"><IoLogoInstagram className="w-7 h-7" /></a>
            <a href="http://www.facebook.com/silveretteisrael"><IoLogoFacebook className="w-7 h-7" /></a>
          </div>
        </div>
        <div className=" w-1/4 mx-auto">
          <h2>דברו איתנו</h2>
          <div className="flex justify-center gap-6 mt-2">
            <a href="https://wa.me/972549934906"><IoLogoWhatsapp className="w-7 h-7" /></a>
            <a href="mailto:silveretteisrael@gmail.com"><IoMailOutline className="w-7 h-7" /></a>
            <a href="tel:0549934906"><IoCallOutline className="w-7 h-7" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};