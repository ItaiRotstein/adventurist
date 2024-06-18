import { useState } from "react";
import { toast } from "react-toastify";
import { ClipLoader } from "react-spinners";
import { sendContactEmail } from "../service/email.service";

const Contact = () => {
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
        
        const res = await sendContactEmail(formData)

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
        <div id="contact" className="pb-8">
            <div className="text-center pt-24 pb-12">
                <h2 className="text-3xl md:text-4xl">צרו קשר</h2>
                <hr className="border-t-2 w-1/5 mx-auto mt-8" />
            </div>
            <div>
                <form onSubmit={onHandleSubmit} className="text-center">
                    <div className="flex flex-col md:flex-row md:flex-wrap justify-center gap-3 px-8 sm:px-16 md:px-32 lg:px-52 xl:px-64 ">
                        <input required onChange={(e) => setFirstName(e.target.value)} value={firstName} className="md:w-[48%] bg-gray-100 rounded border-2 p-4" placeholder="שם*" type="text" />
                        <input required onChange={(e) => setLastName(e.target.value)} value={lastName} className="md:w-[48%] bg-gray-100 rounded border-2 p-4" placeholder="שם משפחה*" type="text" />
                        <input required onChange={(e) => setEmail(e.target.value)} value={email} className="md:w-[48%] bg-gray-100 rounded border-2 p-4" placeholder="אימייל*" type="email" />
                        <input onChange={(e) => setPhone(e.target.value)} value={phone} className="md:w-[48%] bg-gray-100 rounded border-2 p-4" placeholder="טלפון" type="text" />
                        <textarea onChange={(e) => setMessage(e.target.value)} value={message} className="md:w-[98%] bg-gray-100 rounded border-2 p-4" placeholder="הודעה" />
                    </div>
                    <button type="submit" className="btn-main mx-auto mt-7 shadow">
                        {
                            isLoading ? (
                                <ClipLoader
                                    color="#4338ca"
                                    cssOverride={{ display: 'inline-block', position: 'relative', top: '4px' }}
                                    size={20}
                                />
                            ) : (
                                'שלח'
                            )
                        }
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Contact;