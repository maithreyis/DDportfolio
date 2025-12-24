import { siteContent } from '../data/siteContent';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Home = () => {
    const { hero, services, metrics } = siteContent;

    return (
        <div className="home-page animate-fade-in">
            {/* Hero Section */}
            <section className="container min-h-[80vh] flex flex-col justify-center pt-20 pb-32">
                <span className="text-sm font-medium tracking-wide text-gray-500 uppercase mb-6 block">
                    {hero.role}
                </span>
                <h1 className="heading-xl max-w-4xl mb-10 leading-tight">
                    {hero.oneLiner}
                </h1>
                <div className="flex gap-6">
                    <Link to="/work" className="bg-black text-white px-8 py-4 rounded-full font-medium hover:bg-gray-800 transition-all flex items-center gap-2">
                        View Work <ArrowRight size={18} />
                    </Link>
                    <Link to="/contact" className="border border-gray-200 text-black px-8 py-4 rounded-full font-medium hover:bg-gray-50 transition-all">
                        Get in Touch
                    </Link>
                </div>
            </section>

            {/* Services Section */}
            <section className="bg-[var(--bg-secondary)] section">
                <div className="container">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {services.map((service, index) => (
                            <div key={index} className="flex flex-col gap-4">
                                <div className="w-12 h-[1px] bg-black mb-4 opacity-20"></div>
                                <h3 className="text-xl font-semibold">{service.title}</h3>
                                <p className="text-gray-600 leading-relaxed font-light">
                                    {service.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Metrics Strip */}
            <section className="container py-24 border-b border-gray-100">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {metrics.map((metric, index) => (
                        <div key={index} className="text-center md:text-left">
                            <div className="text-4xl md:text-5xl font-bold mb-2 text-[var(--accent)] tracking-tight">
                                {metric.value}
                            </div>
                            <div className="text-sm font-medium text-gray-500 uppercase tracking-wider">
                                {metric.label}
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Home;
