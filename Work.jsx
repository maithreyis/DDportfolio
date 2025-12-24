import { caseStudies } from '../data/caseStudies';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Work = () => {
    return (
        <div className="container py-20 animate-fade-in">
            <div className="max-w-2xl mb-16">
                <h1 className="heading-lg mb-4">Selected Work</h1>
                <p className="text-body">
                    A collection of strategic interventions across fintech, edtech, and consumer brands.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
                {caseStudies.map((study) => (
                    <Link key={study.id} to={`/work/${study.id}`} className="group block">
                        <article className="border-t border-gray-200 pt-6 transition-all hover:border-black">
                            <div className="flex justify-between items-start mb-4">
                                <span className="text-sm font-medium text-gray-400 uppercase tracking-widest">
                                    {study.category}
                                </span>
                                <ArrowRight className="opacity-0 -translate-x-2 transition-all group-hover:opacity-100 group-hover:translate-x-0" size={20} />
                            </div>

                            <h2 className="heading-md mb-3 group-hover:text-[var(--accent)] transition-colors">
                                {study.title}
                            </h2>

                            <p className="text-gray-600 mb-6 leading-relaxed">
                                {study.summary}
                            </p>

                            <div className="flex gap-6 text-sm text-gray-500">
                                {study.metrics.slice(0, 2).map((metric, i) => (
                                    <div key={i}>
                                        <span className="block font-semibold text-black">{metric.value}</span>
                                        <span className="text-xs">{metric.label}</span>
                                    </div>
                                ))}
                            </div>
                        </article>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Work;
