/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ArrowRight,
  BarChart3,
  Zap,
  Users,
  BookOpen,
  Calendar,
  CheckCircle2,
  ChevronRight,
  Globe,
  Cpu,
  Bot,
  Layers,
  MessageSquare
} from 'lucide-react';

// --- Components ---

const Logo = ({ className = "h-10" }) => (
  <img src="/logo.png" alt="OpenPerp Logo" className={className} style={{ objectFit: 'contain' }} />
);

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 border-b border-accent-gold/20 bg-accent-gold/5 backdrop-blur-xl">
    <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <Logo className="h-12" />
      </div>

      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/60">
        <a
          href="https://cal.com/hammad-nasir-a7w2pg"
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-2 rounded-full bg-accent-gold text-black font-bold hover:bg-white transition-all"
        >
          Book a Call
        </a>
      </div>
    </div>
  </nav>
);

const Hero = () => (
  <section className="relative pt-40 pb-20 overflow-hidden">
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[150%] h-[800px] glow-horizon -z-10 opacity-50" />

    <div className="max-w-7xl mx-auto px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl md:text-8xl font-extrabold tracking-tight mb-6 leading-[1.1]">
          Scale Your Business <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-accent-blue via-accent-purple to-accent-blue animate-gradient">with AI Systems</span>
        </h1>
        <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-12 font-light">
          Discover your AI bottlenecks, deploy high ROI systems, and <br className="hidden md:block" />
          access world-class AI automation.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 1 }}
        className="relative mx-auto max-w-5xl"
      >
        <div className="glass-card p-4 md:p-8 shadow-2xl shadow-accent-gold/10">
          <div className="flex items-center gap-2 mb-6 border-b border-white/10 pb-4">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500/50" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
              <div className="w-3 h-3 rounded-full bg-green-500/50" />
            </div>
            <div className="ml-4 text-[10px] font-mono text-white/30 uppercase tracking-widest">Live AI Dashboard</div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-white/5 rounded-xl p-6 border border-white/5">
                <div className="text-xs text-white/40 uppercase mb-1">Total Revenue</div>
                <div className="text-3xl font-bold">$3,000</div>
                <div className="text-xs text-accent-green mt-2 font-medium">▲ 100% vs last month</div>
              </div>
              <div className="bg-white/5 rounded-xl p-6 border border-white/5">
                <div className="text-xs text-white/40 uppercase mb-1">Pipeline Value</div>
                <div className="text-3xl font-bold">$15,000</div>
                <div className="text-xs text-accent-green mt-2 font-medium">▲ 50% vs last month</div>
              </div>
              <div className="md:col-span-2 bg-white/5 rounded-xl p-6 border border-white/5 relative overflow-hidden">
                <div className="flex justify-between items-end">
                  <div>
                    <div className="text-xs text-white/40 uppercase mb-1">AI Systems Deployed</div>
                    <div className="text-5xl font-bold">2</div>
                  </div>
                  <div className="flex gap-1 items-end h-20">
                    {[10, 20, 15, 40, 30, 60, 100].map((h, i) => (
                      <div key={i} className="w-3 bg-accent-purple/50 rounded-t-sm" style={{ height: `${h}%` }} />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/5 rounded-xl p-6 border border-white/5 flex flex-col justify-between">
              <div>
                <div className="text-xs text-white/40 uppercase mb-1">Weekly Growth</div>
                <div className="text-4xl font-bold text-accent-green">+150%</div>
              </div>
              <div className="mt-8 h-32 relative">
                <svg viewBox="0 0 100 40" className="w-full h-full">
                  <path
                    d="M0 35 Q 25 30, 50 20 T 100 5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="text-accent-green"
                  />
                  <path
                    d="M0 35 Q 25 30, 50 20 T 100 5 L 100 40 L 0 40 Z"
                    fill="url(#grad)"
                    className="opacity-20 text-accent-green fill-current"
                  />
                  <defs>
                    <linearGradient id="grad" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="currentColor" />
                      <stop offset="100%" stopColor="transparent" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <a
            href="https://cal.com/hammad-nasir-a7w2pg"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-5 rounded-full bg-white text-black font-bold text-lg hover:scale-105 transition-transform shadow-[0_0_40px_rgba(255,255,255,0.2)]"
          >
            Book a Free 1-2-1 Call
          </a>
        </div>
      </motion.div>
    </div>
  </section>
);

const TechMarquee = () => {
  const icons = [
    { name: 'GitHub', icon: <Globe className="w-6 h-6" /> },
    { name: 'Notion', icon: <Layers className="w-6 h-6" /> },
    { name: 'Gmail', icon: <MessageSquare className="w-6 h-6" /> },
    { name: 'Figma', icon: <Zap className="w-6 h-6" /> },
    { name: 'Slack', icon: <Users className="w-6 h-6" /> },
    { name: 'OpenAI', icon: <Bot className="w-6 h-6" /> },
    { name: 'Anthropic', icon: <Cpu className="w-6 h-6" /> },
  ];

  return (
    <div className="py-20 border-y border-white/5 overflow-hidden bg-black/20">
      <div className="text-center mb-10 text-[10px] font-mono text-white/30 uppercase tracking-[0.3em]">Build with your favorite tech</div>
      <div className="flex whitespace-nowrap animate-marquee">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex gap-16 items-center px-8">
            {icons.map((tech, idx) => (
              <div key={idx} className="flex items-center gap-3 text-white/40 grayscale hover:grayscale-0 transition-all cursor-default">
                <div className="p-3 rounded-xl bg-white/5 border border-white/5">
                  {tech.icon}
                </div>
                <span className="font-medium text-sm">{tech.name}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

const FeatureSection = ({ number, title, subtitle, description, badge, colorClass, children }: any) => (
  <section className="py-24 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
    <div className={number % 2 === 0 ? 'lg:order-2' : ''}>
      <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider mb-6 ${colorClass} bg-opacity-10 border border-current border-opacity-20`}>
        <span className="opacity-60">{badge}</span>
      </div>
      <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
        {title} <br />
        <span className={`opacity-60 ${colorClass.replace('text-', 'text-opacity-60 text-')}`}>{subtitle}</span>
      </h2>
      <p className="text-lg text-white/50 mb-8 max-w-xl leading-relaxed">
        {description}
      </p>
      {children}
    </div>
    <div className={`relative ${number % 2 === 0 ? 'lg:order-1' : ''}`}>
      <div className="glass-card p-8 border-white/5 bg-gradient-to-br from-white/5 to-transparent">
        {/* Visual representation of the feature */}
        {number === 1 && (
          <div className="space-y-4">
            <div className="flex justify-between items-center text-sm mb-4">
              <span className="text-white/40">Monthly Value</span>
              <span className="text-accent-green font-bold">$32,500</span>
            </div>
            {[
              { label: 'Lead Generation', val: '15 hrs' },
              { label: 'Client Communication', val: '12 hrs' },
              { label: 'Lead Qualification', val: '8 hrs' },
              { label: 'Social Media Posting', val: '6 hrs' },
            ].map((item, i) => (
              <div key={i} className="flex justify-between items-center py-3 border-b border-white/5">
                <span className="text-white/60">{item.label}</span>
                <span className="font-mono font-bold">{item.val}</span>
              </div>
            ))}
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="bg-white/5 p-4 rounded-xl border border-white/5">
                <div className="text-2xl font-bold">$390k+</div>
                <div className="text-[10px] text-white/30 uppercase mt-1">Projected Annual Value</div>
              </div>
              <div className="bg-white/5 p-4 rounded-xl border border-white/5">
                <div className="text-2xl font-bold">13x</div>
                <div className="text-[10px] text-white/30 uppercase mt-1">ROI Year 1</div>
              </div>
            </div>
          </div>
        )}
        {number === 2 && (
          <div className="space-y-6">
            <div className="h-40 bg-white/5 rounded-xl border border-white/5 relative overflow-hidden flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-t from-accent-purple/20 to-transparent" />
              <Bot className="w-16 h-16 text-accent-purple animate-pulse" />
            </div>
            <div className="space-y-3">
              <div className="h-2 w-3/4 bg-white/10 rounded-full" />
              <div className="h-2 w-1/2 bg-white/10 rounded-full" />
              <div className="flex gap-2 pt-2">
                <div className="h-8 w-24 bg-accent-purple/20 rounded-lg border border-accent-purple/30 flex items-center justify-center text-[10px] font-bold">New Lead Captured</div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/5 p-4 rounded-xl border border-white/5">
                <div className="text-xl font-bold">80-320hrs</div>
                <div className="text-[10px] text-white/30 uppercase mt-1">Time Saved Monthly</div>
              </div>
              <div className="bg-white/5 p-4 rounded-xl border border-white/5">
                <div className="text-xl font-bold">100%</div>
                <div className="text-[10px] text-white/30 uppercase mt-1">ROI Guaranteed</div>
              </div>
            </div>
          </div>
        )}
        {number === 3 && (
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="aspect-square bg-white/5 rounded-2xl border border-white/5 flex items-center justify-center group hover:bg-accent-green/10 transition-colors">
                  <BookOpen className="w-8 h-8 text-white/20 group-hover:text-accent-green transition-colors" />
                </div>
              ))}
            </div>
            <div className="bg-accent-green/10 p-6 rounded-2xl border border-accent-green/20">
              <div className="text-sm font-bold mb-2">Master AI Systems Architecture</div>
              <p className="text-xs text-white/50 leading-relaxed">Join 1,000+ founders building the future with AI. No theory, no fluff. Just technical architecture.</p>
            </div>
          </div>
        )}
      </div>
    </div>
  </section>
);

const Booking = () => (
  <section id="contact" className="py-24 max-w-7xl mx-auto px-6 text-center">
    <h2 className="text-4xl md:text-6xl font-bold mb-4">Book a Free <span className="text-accent-blue">1-2-1 Call</span></h2>
    <p className="text-white/50 mb-16 max-w-xl mx-auto">Get a custom deployment strategy and automate your workflow to scale revenue on autopilot.</p>

    <div className="glass-card max-w-5xl mx-auto min-h-[600px] relative overflow-hidden">
      <iframe
        src="https://cal.com/hammad-nasir-a7w2pg?embed=true"
        width="100%"
        height="600"
        frameBorder="0"
        className="w-full h-[600px] rounded-2xl"
        title="Book a call with OpenPerp"
      />
    </div>
  </section>
);

const Footer = () => (
  <footer className="py-20 border-t border-white/5 bg-black">
    <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
      <div className="md:col-span-2">
        <div className="flex items-center gap-2 mb-6">
          <Logo className="h-16" />
        </div>
        <p className="text-white/40 max-w-sm leading-relaxed text-sm">
          Building custom AI systems and automation for businesses making $50k/mo+ who want to scale without hiring more people.
        </p>
      </div>

      <div>
        <h4 className="font-bold mb-6 text-sm uppercase tracking-widest text-white/30">Navigation</h4>
        <ul className="space-y-4 text-sm text-white/60">
          <li><a href="#" className="hover:text-accent-gold transition-colors">Community</a></li>
        </ul>
      </div>

      <div>
        <h4 className="font-bold mb-6 text-sm uppercase tracking-widest text-white/30">Legal</h4>
        <ul className="space-y-4 text-sm text-white/60">
          <li><a href="#" className="hover:text-accent-gold transition-colors">Privacy Policy</a></li>
          <li><a href="#" className="hover:text-accent-gold transition-colors">Terms of Service</a></li>
          <li><a href="#" className="hover:text-accent-gold transition-colors">Cookie Policy</a></li>
        </ul>
      </div>
    </div>

    <div className="max-w-7xl mx-auto px-6 mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-mono text-white/20 uppercase tracking-widest">
      <div>© 2026 OpenPerp AI Agency. All rights reserved.</div>
      <div className="flex gap-8">
        <a href="#" className="hover:text-white transition-colors">Twitter</a>
        <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
        <a href="#" className="hover:text-white transition-colors">YouTube</a>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen font-sans">
      <Navbar />

      <main>
        <Hero />

        <TechMarquee />

        <div id="solutions">
          <FeatureSection
            number={1}
            badge="01. Audit"
            title="Find the"
            subtitle="Biggest Opportunities"
            description="We identify your bottlenecks, uncover high-value opportunities, and quantify exactly how much time and money you're leaving on the table. You get a clear roadmap with project value and ROI projections so you can make informed decisions."
            colorClass="text-accent-blue"
          >
            <div className="flex items-center gap-4 mt-10">
              <CheckCircle2 className="text-accent-blue w-5 h-5" />
              <span className="text-sm font-medium text-white/70">Full workflow mapping</span>
            </div>
            <div className="flex items-center gap-4 mt-4">
              <CheckCircle2 className="text-accent-blue w-5 h-5" />
              <span className="text-sm font-medium text-white/70">ROI Projection Report</span>
            </div>
          </FeatureSection>

          <FeatureSection
            number={2}
            badge="02. Custom Projects"
            title="Scale Without"
            subtitle="Hiring More People"
            description="From advanced lead generation and social media automation to complex data systems. Imagine doubling your output without doubling your team. Custom AI systems that handle the work of 5-10 employees, running 24/7 with zero mistakes. That's not the future. That's what we build today."
            colorClass="text-accent-purple"
          />
        </div>

        <Booking />
      </main>

      <Footer />

      {/* Floating Chat Button Placeholder */}
      <div className="fixed bottom-8 right-8 z-50">
        <button className="w-14 h-14 rounded-full bg-accent-blue shadow-lg shadow-accent-blue/20 flex items-center justify-center hover:scale-110 transition-transform">
          <MessageSquare className="w-6 h-6 text-white" />
        </button>
      </div>
    </div>
  );
}
