import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const location = useLocation();
    const isHome = location.pathname === '/';

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Work', path: '/work' },
        { name: 'How I Think', path: '/how-i-think' },
        { name: 'About', path: '/about' },
        { name: 'Contact', path: '/contact' }
    ];

    return (
        <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100 transition-all duration-300">
            <div className="container h-[80px] flex items-center justify-between">
                <Link to="/" className="text-xl font-semibold tracking-tight hover:opacity-70 transition-opacity">
                    Debargha Das
                </Link>

                <div className="flex items-center gap-8">
                    <div className="hidden md:flex gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                className={`text-sm font-medium transition-colors hover:text-black ${location.pathname === link.path ? 'text-black' : 'text-gray-500'}`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    <Link
                        to="/contact"
                        className="px-5 py-2.5 bg-black text-white text-sm font-medium rounded-full hover:bg-gray-800 transition-transform hover:scale-[1.02] active:scale-[0.98]"
                    >
                        Let's Talk
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
