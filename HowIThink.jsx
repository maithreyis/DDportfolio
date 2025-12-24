import { siteContent } from '../data/siteContent';

const HowIThink = () => {
    const { howIThink } = siteContent;

    return (
        <div className="container py-24 animate-fade-in max-w-4xl">
            <h1 className="heading-lg mb-20 text-center">Strategic Philosophy</h1>

            <div className="space-y-24">
                {howIThink.map((section, index) => (
                    <section key={index} className="grid grid-cols-1 md:grid-cols-12 gap-8">
                        <h2 className="col-span-12 md:col-span-4 text-xl font-bold tracking-tight">
                            {section.title}
                        </h2>
                        <div className="col-span-12 md:col-span-8">
                            {section.content && (
                                <p className="text-xl leading-relaxed font-light text-gray-800">
                                    {section.content}
                                </p>
                            )}
                            {section.items && (
                                <ul className="space-y-4">
                                    {section.items.map((item, i) => (
                                        <li key={i} className="flex items-center gap-4 text-xl font-light text-gray-800">
                                            <span className="w-1.5 h-1.5 bg-[var(--accent)] rounded-full"></span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    </section>
                ))}
            </div>
        </div>
    );
};

export default HowIThink;
