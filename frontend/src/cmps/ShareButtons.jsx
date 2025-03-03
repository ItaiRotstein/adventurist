
import { useState } from "react";

import { IoShareSocial } from "react-icons/io5";
import { IoClose } from "react-icons/io5";

import {
  EmailShareButton,
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  EmailIcon,
  FacebookIcon,
  TwitterIcon,
  WhatsappIcon,
} from "react-share";

export const ShareButtons = () => {
  const [isShareMenuOpen, setIsShareMenuOpen] = useState(false);

  return (
    <div className="relative">
      {
        isShareMenuOpen ? (
          <IoClose
            onClick={() => setIsShareMenuOpen(false)}
            className="text-clr3 hover:brightness-75 cursor-pointer p-2 w-10 h-10 ms-auto border rounded-full shadow"
          />
        ) : (
          <IoShareSocial
            onClick={() => setIsShareMenuOpen(true)}
            className="text-clr3 hover:brightness-75 cursor-pointer p-2 w-10 h-10 ms-auto border rounded-full shadow"
          />
        )
      }

          <div className="">
            <EmailShareButton className={`absolute top-0 ${isShareMenuOpen ? 'left-[45px] z-0 ' : 'left-0 -z-10 '} transition-all text-clr3 hover:brightness-90 p-2 w-10 h-10 ms-auto border rounded-full shadow`}
              url={window.location.href}
              subject="כדאי לך לבדוק את האתר הזה"
            >
              <EmailIcon className={`text-clr3 hover:brightness-90 p-2 w-10 h-10 ms-auto border rounded-full shadow`} />
            </EmailShareButton>
            <FacebookShareButton className={`absolute top-0 ${isShareMenuOpen ? 'left-[90px] z-0 ' : 'left-0 -z-10 '} transition-all text-clr3 hover:brightness-90 p-2 w-10 h-10 ms-auto border rounded-full shadow`} url={window.location.href}>
              <FacebookIcon className={`text-clr3 hover:brightness-90 p-2 w-10 h-10 ms-auto border rounded-full shadow`} />
            </FacebookShareButton>
            <TwitterShareButton className={`absolute top-0 ${isShareMenuOpen ? 'left-[135px] z-0 ' : 'left-0 -z-10 '} transition-all text-clr3 hover:brightness-90 p-2 w-10 h-10 ms-auto border rounded-full shadow`} url={window.location.href}>
              <TwitterIcon className={` text-clr3 hover:brightness-90 p-2 w-10 h-10 ms-auto border rounded-full shadow`} />
            </TwitterShareButton>
            <WhatsappShareButton className={`absolute top-0 ${isShareMenuOpen ? 'left-[180px] z-0 ' : 'left-0 -z-10 '} transition-all text-clr3 hover:brightness-90 p-2 w-10 h-10 ms-auto border rounded-full shadow`} url={window.location.href}>
              <WhatsappIcon className={` text-clr3 hover:brightness-90 p-2 w-10 h-10 ms-auto border rounded-full shadow`} />
            </WhatsappShareButton>
          </div>

    </div>
  );
};