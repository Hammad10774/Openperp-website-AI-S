import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Receipt, TrendingUp, ShieldCheck } from 'lucide-react';
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

export default function AIFinanceServices() {
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
                        AI for <span className="text-accent-gold">Finance</span> & Accounting
                    </h1>
                    <p className="text-xl text-white/50 max-w-2xl mx-auto font-light">
                        Automate your financial operations and gain predictive insights with enterprise-grade AI accounting systems.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <ServiceCard
                        icon={Receipt}
                        title="Accounting Automation"
                        items={[
                            "Invoice reading automation",
                            "Expense categorization",
                            "Payroll automation"
                        ]}
                    />
                    <ServiceCard
                        icon={TrendingUp}
                        title="Financial Intelligence"
                        items={[
                            "Cashflow forecasting",
                            "Financial report summarization",
                            "Predictive budgeting"
                        ]}
                    />
                    <ServiceCard
                        icon={ShieldCheck}
                        title="Risk & Compliance"
                        items={[
                            "Fraud detection",
                            "Audit log automation",
                            "Compliance monitoring"
                        ]}
                    />
                </div>
            </div>
        </div>
    );
}
