const Footer = () => {
    return (
        <footer className="bg-[#FAFAFA] border-t border-gray-200 py-12 mt-20">
            <div className="container flex flex-col md:flex-row justify-between items-center gap-6">
                <div>
                    <h3 className="font-semibold text-lg">Debargha Das</h3>
                    <p className="text-gray-500 text-sm mt-1">Brand & Marketing Strategist</p>
                </div>

                <div className="flex gap-6 text-sm text-gray-600">
                    <a href="#" className="hover:text-black transition-colors">LinkedIn</a>
                    <a href="#" className="hover:text-black transition-colors">Email</a>
                </div>

                <div className="text-xs text-gray-400">
                    © {new Date().getFullYear()}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
