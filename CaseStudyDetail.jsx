import { useParams, Navigate } from 'react-router-dom';
import { caseStudies } from '../data/caseStudies';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const CaseStudyDetail = () => {
    const { slug } = useParams();
    const study = caseStudies.find(s => s.id === slug);

    if (!study) return <Navigate to="/work" />;

    const { title, category, metrics, content } = study;

    return (
        <article className="animate-fade-in pb-20">
            {/* Header */}
            <header className="bg-[var(--bg-secondary)] border-b border-gray-100 py-20">
                <div className="container">
                    <Link to="/work" className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-black mb-8 transition-colors">
                        <ArrowLeft size={16} className="mr-2" /> Back to Work
                    </Link>

                    <span className="block text-sm font-medium tracking-widest text-gray-400 uppercase mb-4">
                        {category}
                    </span>
                    <h1 className="heading-xl mb-12">{title}</h1>

                    {/* Metrics Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-gray-200/50 pt-8">
                        {metrics.map((m, i) => (
                            <div key={i}>
                                <div className="text-2xl font-bold text-[var(--accent)] mb-1">{m.value}</div>
                                <div className="text-xs font-medium text-gray-500 uppercase">{m.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </header>

            {/* Content */}
            <div className="container max-w-4xl mx-auto pt-20">
                <div className="space-y-16">
                    <Section title="Context" content={content.context} />
                    <Section title="Insight" content={content.insight} />
                    <Section title="Strategy" content={content.strategy} />

                    <section>
                        <h2 className="heading-md mb-6 text-black border-l-2 border-black pl-4">Execution</h2>
                        <ul className="space-y-4">
                            {content.execution.map((item, index) => (
                                <li key={index} className="flex gap-4 p-6 bg-gray-50 rounded-lg">
                                    <div className="text-body" dangerouslySetInnerHTML={{
                                        __html: item.replace(/\*\*(.*?)\*\*/g, '<strong class="text-black font-semibold">$1</strong>')
                                    }} />
                                </li>
                            ))}
                        </ul>
                    </section>

                    <Section title="Impact" content={content.impact} />
                </div>
            </div>
        </article>
    );
};

const Section = ({ title, content }) => (
    <section>
        <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">{title}</h3>
        <p className="text-xl leading-relaxed text-gray-800 font-light">
            {content}
        </p>
    </section>
);

export default CaseStudyDetail;
