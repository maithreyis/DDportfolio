import { siteContent } from '../data/siteContent';

const About = () => {
    const { about } = siteContent;

    return (
        <div className="container py-24 animate-fade-in flex flex-col items-center">
            <h1 className="heading-lg mb-12">About Debargha</h1>

            <div className="max-w-2xl text-center">
                <p className="text-xl leading-relaxed font-light text-gray-800 mb-12">
                    {about.bio}
                </p>

                <div className="w-16 h-[1px] bg-gray-200 mx-auto mb-12"></div>

                <p className="text-lg font-medium italic text-[var(--accent)]">
                    "{about.closing}"
                </p>
            </div>

            {/* Brief Timeline/Logo Strip could go here but minimal request says keep it clean */}
        </div>
    );
};

export default About;
