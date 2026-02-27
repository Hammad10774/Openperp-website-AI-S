import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, TrendingUp, Users, Zap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { AILoader } from '@/components/ui/ai-loader';

const ServiceCard = ({ title, items, icon: Icon }: any) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-card p-8 border-white/10 bg-black/40 backdrop-blur-md h-full"
    >
        <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-xl bg-accent-gold/20">
                <Icon className="w-6 h-6 text-accent-gold" />
            </div>
            <h3 className="text-2xl font-bold text-white tracking-tight">{title}</h3>
        </div>
        <ul className="space-y-4">
            {items.map((item: string, idx: number) => (
                <li key={idx} className="flex items-start gap-3 text-white/70 group/item">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent-gold mt-2.5 shrink-0 group-hover/item:scale-150 transition-transform" />
                    <span className="text-lg leading-relaxed group-hover/item:text-white transition-colors">{item}</span>
                </li>
            ))}
        </ul>
    </motion.div>
);

export default function AISalesServices() {
    const navigate = useNavigate();

    return (
        <div className="relative min-h-screen bg-black text-white selection:bg-accent-gold/30 pt-32 pb-20 px-4 overflow-hidden">
            <AILoader />

            <div className="max-w-7xl mx-auto relative z-10">
                <button
                    onClick={() => navigate('/')}
                    className="flex items-center gap-2 text-white/50 hover:text-accent-gold transition-colors mb-12 group"
                >
                    <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                    Back to Home
                </button>

                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-20"
                >
                    <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">
                        AI for <span className="text-accent-gold">Sales</span> Teams
                    </h1>
                    <p className="text-xl text-white/50 max-w-2xl mx-auto font-light">
                        Empower your sales force with intelligent tools to close deals faster and eliminate manual grunt work.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <ServiceCard
                        icon={TrendingUp}
                        title="Sales Intelligence"
                        items={[
                            "CRM enrichment",
                            "Lead scoring systems",
                            "Sales call summarization"
                        ]}
                    />
                    <ServiceCard
                        icon={Users}
                        title="Communication"
                        items={[
                            "AI objection handling assistant",
                            "Automated follow-ups",
                            "Personalized outreach"
                        ]}
                    />
                    <ServiceCard
                        icon={Zap}
                        title="Execution"
                        items={[
                            "Proposal automation",
                            "Contract generation",
                            "Sales workflow optimization"
                        ]}
                    />
                </div>
            </div>
        </div>
    );
}
