
import { Meta } from '@/layout/Meta';
import { Main } from '@/templates/Main';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faCheck } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const Index = () => {

    const [ submit, setSubmit ] = useState<boolean>(false);
    const [ formData, setFormData ] = useState<{ [key: string]: string }>({ 'form-name': 'contactForm' });

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const postFormData = new FormData();

        // @ts-ignore - Process Form Data into FormData Object
        for (const key in formData) postFormData.append(key, formData[key]);

        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: new URLSearchParams(postFormData as any).toString(),
        }).then((response) => {
            if (response.status === 200) 
                setSubmit(true);
            else
                console.log("Form failed to submit!");
        }).catch((error) => console.log(error));
    };

    const fields = [
        { type: 'text', name: 'firstName', label: 'First Name', required: true },
        { type: 'text', name: 'lastName', label: 'Last Name', required: true },
        { type: 'email', name: 'emailAddress', label: 'Email Address', required: true, isFull: true },
        { type: 'textarea', name: 'messageContent', label: 'Message', required: true },
    ];

    return (
        <Main meta={<Meta title="Contact Me 💬"/>}>
            <div className="mb-8 -ml-2">
                <h1>💬Contact Me</h1>
            </div>
            <div className="bg-white rounded-xl p-8">
                <div className="mb-8">
                    Thanks for reaching out to me, I'm really looking forward to hearing from you! In case you had an inquiry, I may have potentially answered them here.
                    <ul className="mb-4">
                        <li>No, I am not interested in your "marketing" emails.</li>
                        <li>No, I will not work for free.</li>
                        <li>Yes, I work on projects free of charge but it's at my own discretion.</li>
                    </ul>
                    <span className="font-semibold">If none of the above applies to you, then please feel free to contact me.</span>
                </div>

                <form id="contactForm" name="contactForm" method="post" onSubmit={handleSubmit} className="grid grid-cols-2 gap-6" data-netlify="true">
                    <input type="hidden" name="form-name" value="contactForm" />
                    {fields.map((item) => (
                        <>
                            {item.type === 'textarea' && <textarea name={item.name} className="col-span-full" rows={6} value={String(formData?.[item.name] || '')} onChange={(e) => setFormData({ ...formData, [item.name]: String(e.target.value) })} placeholder={item.label} required={item.required} />}
                            {item.type !== 'textarea' && <input type={item.type} className={item.isFull ? 'col-span-full' : ''} value={String(formData?.[item.name] || '')} onChange={(e) => setFormData({ ...formData, [item.name]: String(e.target.value) })} name={item.name} placeholder={item.label} required={item.required} />}
                        </>
                    ))}
                    <div className="col-span-full flex justify-end">
                        {!submit ? (
                            <button type="submit">
                                <FontAwesomeIcon icon={faPaperPlane} className="mr-2 w-4 mt-1.5" />
                                Send Message
                            </button>
                        ) : (
                            <div className="text-green-600 font-semibold flex">
                                <FontAwesomeIcon icon={faCheck} className="w-5 mr-1" /> 
                                Your message has been submitted!
                            </div>
                        )}
                    </div>
                </form>
            </div>
        </Main>
    );
};

export default Index;
