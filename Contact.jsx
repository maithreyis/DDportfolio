import { siteContent } from '../data/siteContent';
import { ArrowRight, Mail, Linkedin } from 'lucide-react';

const Contact = () => {
    const { contact } = siteContent;

    return (
        <div className="container min-h-[70vh] flex flex-col justify-center items-center text-center animate-fade-in">
            <h1 className="heading-xl mb-8 max-w-3xl">
                Ready for marketing that drives growth?
            </h1>

            <p className="text-xl text-gray-500 mb-12 max-w-xl font-light">
                {contact.text}
            </p>

            <div className="flex flex-col md:flex-row gap-6">
                <a
                    href={`mailto:${contact.email}`}
                    className="bg-black text-white px-8 py-4 rounded-full font-medium hover:bg-gray-800 transition-all flex items-center justify-center gap-2 min-w-[200px]"
                >
                    <Mail size={18} />
                    Email Me
                </a>
                <a
                    href={contact.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-gray-200 text-black px-8 py-4 rounded-full font-medium hover:bg-gray-50 transition-all flex items-center justify-center gap-2 min-w-[200px]"
                >
                    <Linkedin size={18} />
                    LinkedIn
                </a>
            </div>
        </div>
    );
};

export default Contact;
