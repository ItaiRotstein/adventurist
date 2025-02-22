import { useState } from "react";
import { toast } from "react-toastify";
import { sendContactEmail } from "../service/email.service";
import { Icon } from "../cmps/Icon";

export default function Contact() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');

    const [isLoading, setIsLoading] = useState(false);

    async function onHandleSubmit(e) {
        e.preventDefault();
        setIsLoading(true);
        if (!firstName || !lastName || !email) {
            return;
        }
        const formData = {
            firstName,
            lastName,
            email,
            phone,
            message,
        };

        const res = await sendContactEmail(formData);

        if (res.status !== 200) {
            toast.error('הטופס לא נשלח');
        } else {
            toast.success('הטופס נשלח בהצלחה');
            setFirstName('');
            setLastName('');
            setEmail('');
            setPhone('');
            setMessage('');
        }
        setIsLoading(false);
    }

    return (
        <div id="contact" className="pb-8 max-w-2xl mx-auto">
            <div className="text-center pt-24 pb-12">
                <h2 className="text-3xl md:text-4xl">צרו קשר</h2>
                <hr className="border-t-2 w-1/5 mx-auto mt-8" />
            </div>
            <div>
                <div className="px-4 md:px-1 mb-8 rounded">
                    <h3 className="text-xl font-bold">אימייל</h3>
                    <p className="pb-4"><a href="mailto:info@adventurist.co.il">info@adventurist.co.il</a></p>
                    <h3 className="text-xl font-bold">רשתות חברתיות</h3>
                    <div className="flex gap-4 items-center">
                        <a href="https://www.facebook.com/yourpage" target="_blank" rel="noopener noreferrer">
                            <Icon icon="IoLogoFacebook" className="text-3xl text-[#1877F2]" />
                        </a>
                        <a className="instagram-icon" href="https://www.instagram.com/yourpage" target="_blank" rel="noopener noreferrer">
                            <Icon icon="IoLogoInstagram" className="text-3xl" />
                        </a>
                        <a href="https://www.twitter.com/yourpage" target="_blank" rel="noopener noreferrer">
                            <Icon icon="IoLogoTwitter" className="text-3xl text-[#1DA1F2]" />
                        </a>
                    </div>
                </div>
                <form onSubmit={onHandleSubmit} className="text-center">
                    <div className="flex flex-col md:flex-row md:flex-wrap justify-center gap-y-2">
                        <div className="md:w-[50%] px-4 md:px-1">
                            <input required onChange={(e) => setFirstName(e.target.value)} value={firstName} className="w-full bg-gray-100 rounded border-2 p-4" placeholder="שם*" type="text" />
                        </div>
                        <div className="md:w-[50%] px-4 md:px-1">
                            <input required onChange={(e) => setLastName(e.target.value)} value={lastName} className="w-full bg-gray-100 rounded border-2 p-4" placeholder="שם משפחה*" type="text" />
                        </div>
                        <div className="md:w-[50%] px-4 md:px-1">
                            <input required onChange={(e) => setEmail(e.target.value)} value={email} className="w-full bg-gray-100 rounded border-2 p-4" placeholder="אימייל*" type="email" />
                        </div>
                        <div className="md:w-[50%] px-4 md:px-1">
                            <input onChange={(e) => setPhone(e.target.value)} value={phone} className="w-full bg-gray-100 rounded border-2 p-4" placeholder="טלפון" type="text" />
                        </div>
                        <div className="md:w-[100%] px-4 md:px-1">
                            <textarea onChange={(e) => setMessage(e.target.value)} value={message} className="w-full bg-gray-100 rounded border-2 p-4" placeholder="הודעה" />
                        </div>
                    </div>
                    <button type="submit" className="btn-main mx-auto mt-3 shadow">
                        {
                            isLoading &&
                            <svg className="animate-spin ml-1 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                        }
                        שלח
                    </button>
                </form>
            </div>
        </div>
    );
};
