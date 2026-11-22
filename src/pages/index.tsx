import { Helmet } from '@dr.pogodin/react-helmet';
import { Link } from 'react-router';
import { motion } from 'motion/react';
import { ArrowRight, MapPin, Clock, ChevronDown } from 'lucide-react';
import { home } from 'virtual:content';

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' as const } }
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } }
};

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>Illumination Global Ministries — You Are Welcome Here</title>
        <meta
          name="description"
          content="Illuminating lives with the hope, love, and transforming power of Jesus Christ — to every nation, every community, every heart." />
        
        <meta property="og:title" content="Illumination Global Ministries" />
        <meta
          property="og:description"
          content="Spreading the light of hope, love, and transformation to communities around the world." />
        
        <meta property="og:type" content="website" />
      </Helmet>

      <main>
        {/* ── HERO ─────────────────────────────────────────────── */}
        <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
          {/* Background image */}
          <img
            src="/airo-assets/images/pages/home/hero"
            alt="Radiant light breaking through clouds"
            className="absolute inset-0 w-full h-full object-cover"
            loading="eager"
            fetchPriority="high"
            width={1920}
            height={1080} />
          
          {/* Warm overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-[hsl(var(--secondary))]/70 via-[hsl(var(--secondary))]/50 to-[hsl(var(--secondary))]/80 pointer-events-none" />
          {/* Radiant glow behind headline */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full pointer-events-none"
            style={{
              background:
              'radial-gradient(ellipse at center, hsl(var(--primary) / 0.18) 0%, transparent 70%)'
            }} />
          

          {/* Content */}
          <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-2xl text-[hsl(var(--primary))] font-semibold uppercase tracking-widest mb-6 text-center">
              
              Illumination Global Ministries
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
              className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight mb-6">
              
              {home.hero.headline}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.65 }}
              className="text-white/80 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-10">
              
              {home.hero.subheadline}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.85 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
              
              <Link
                to="/events"
                className="group relative px-8 py-4 rounded-full bg-[hsl(var(--primary))] text-[hsl(var(--secondary))] font-semibold text-base shadow-lg shadow-[hsl(var(--primary))]/30 hover:bg-[hsl(var(--accent))] transition-all duration-300 overflow-hidden"
                style={{ animation: 'glow-pulse 3s ease-in-out infinite' }}>
                
                <span className="relative z-10">{home.hero.cta_primary}</span>
              </Link>
              <Link
                to="/about"
                className="px-8 py-4 rounded-full border border-white/40 text-white font-medium text-base hover:border-[hsl(var(--primary))] hover:text-[hsl(var(--primary))] transition-all duration-300">
                
                {home.hero.cta_secondary}
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.1 }}
              className="flex items-center justify-center gap-2 text-white/60 text-sm">
              
              <Clock size={14} className="text-[hsl(var(--primary))]" />
              <span>{home.hero.service_note}</span>
            </motion.div>
          </div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.4 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40">
            
            <ChevronDown size={28} className="animate-bounce" />
          </motion.div>
        </section>

        {/* ── MISSION ──────────────────────────────────────────── */}
        <section className="py-24 lg:py-32 bg-[hsl(var(--background))]">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Left: image */}
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="relative">
                
                <img
                  src="/airo-assets/images/pages/home/mission"
                  alt="Our community gathered in worship"
                  className="w-full h-[480px] object-cover rounded-2xl shadow-2xl"
                  loading="lazy"
                  width={700}
                  height={480} />
                
                {/* Gold accent frame */}
                <div className="absolute -bottom-4 -right-4 w-full h-full rounded-2xl border-2 border-[hsl(var(--primary))]/30 -z-10" />
              </motion.div>

              {/* Right: copy */}
              <motion.div
                variants={stagger}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex flex-col gap-6">
                
                <motion.p variants={fadeUp} className="text-[hsl(var(--primary))] text-sm font-semibold uppercase tracking-widest">
                  {home.mission.eyebrow}
                </motion.p>
                <motion.h2
                  variants={fadeUp}
                  className="font-heading text-4xl lg:text-5xl font-bold text-[hsl(var(--secondary))] leading-tight">
                  
                  {home.mission.pull_quote}
                </motion.h2>
                {/* Gold accent line */}
                <motion.div variants={fadeUp} className="w-16 h-1 bg-[hsl(var(--primary))] rounded-full" />
                <motion.p variants={fadeUp} className="text-[hsl(var(--foreground))]/70 text-lg leading-relaxed">
                  {home.mission.body}
                </motion.p>
                <motion.div variants={fadeUp}>
                  <Link
                    to="/about"
                    className="inline-flex items-center gap-2 text-[hsl(var(--primary))] font-semibold hover:gap-3 transition-all duration-200 group">
                    
                    {home.mission.cta}
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-200" />
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── MINISTRIES ───────────────────────────────────────── */}
        <section className="py-24 lg:py-32 bg-[hsl(var(--muted))]">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-center mb-16">
              
              <motion.p variants={fadeUp} className="text-[hsl(var(--primary))] text-sm font-semibold uppercase tracking-widest mb-3">
                {home.ministries.eyebrow}
              </motion.p>
              <motion.h2 variants={fadeUp} className="font-heading text-4xl lg:text-5xl font-bold text-[hsl(var(--secondary))]">
                {home.ministries.headline}
              </motion.h2>
            </motion.div>

            {/* Bento grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Large card — Worship */}
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="relative overflow-hidden rounded-2xl group cursor-pointer md:row-span-1">
                
                <img
                  src="/airo-assets/images/pages/home/ministry-worship"
                  alt={home.ministries.items[0].name}
                  className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                  width={700}
                  height={288} />
                
                <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--secondary))]/90 via-[hsl(var(--secondary))]/30 to-transparent pointer-events-none" />
                <div className="absolute bottom-0 left-0 p-6">
                  <p className="text-[hsl(var(--primary))] text-xs font-semibold uppercase tracking-widest mb-1">Ministry</p>
                  <h3 className="font-heading text-2xl font-bold text-white mb-2">{home.ministries.items[0].name}</h3>
                  <p className="text-white/70 text-sm">{home.ministries.items[0].description}</p>
                </div>
              </motion.div>

              {/* Large card — Outreach */}
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="relative overflow-hidden rounded-2xl group cursor-pointer">
                
                <img
                  src="/airo-assets/images/pages/home/ministry-outreach"
                  alt={home.ministries.items[1].name}
                  className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                  width={700}
                  height={288} />
                
                <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--secondary))]/90 via-[hsl(var(--secondary))]/30 to-transparent pointer-events-none" />
                <div className="absolute bottom-0 left-0 p-6">
                  <p className="text-[hsl(var(--primary))] text-xs font-semibold uppercase tracking-widest mb-1">Ministry</p>
                  <h3 className="font-heading text-2xl font-bold text-white mb-2">{home.ministries.items[1].name}</h3>
                  <p className="text-white/70 text-sm">{home.ministries.items[1].description}</p>
                </div>
              </motion.div>

              {/* Small card — Missions */}
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-[hsl(var(--secondary))] rounded-2xl p-8 flex flex-col justify-between group hover:bg-[hsl(var(--secondary))]/90 transition-colors duration-300">
                
                <div>
                  <div className="w-10 h-10 rounded-full bg-[hsl(var(--primary))]/20 flex items-center justify-center mb-4">
                    <div className="w-4 h-4 rounded-full bg-[hsl(var(--primary))]" />
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-white mb-3">{home.ministries.items[2].name}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{home.ministries.items[2].description}</p>
                </div>
                <Link
                  to="/about"
                  className="mt-6 inline-flex items-center gap-2 text-[hsl(var(--primary))] text-sm font-semibold group-hover:gap-3 transition-all duration-200">
                  
                  Learn more <ArrowRight size={14} />
                </Link>
              </motion.div>

              {/* Small card — Youth */}
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-[hsl(var(--primary))]/10 border border-[hsl(var(--primary))]/20 rounded-2xl p-8 flex flex-col justify-between group hover:bg-[hsl(var(--primary))]/15 transition-colors duration-300">
                
                <div>
                  <div className="w-10 h-10 rounded-full bg-[hsl(var(--primary))]/20 flex items-center justify-center mb-4">
                    <div className="w-4 h-4 rounded-full bg-[hsl(var(--primary))]" />
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-[hsl(var(--secondary))] mb-3">{home.ministries.items[3].name}</h3>
                  <p className="text-[hsl(var(--foreground))]/60 text-sm leading-relaxed">{home.ministries.items[3].description}</p>
                </div>
                <Link
                  to="/about"
                  className="mt-6 inline-flex items-center gap-2 text-[hsl(var(--primary))] text-sm font-semibold group-hover:gap-3 transition-all duration-200">
                  
                  Learn more <ArrowRight size={14} />
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── SERVICE TIMES ────────────────────────────────────── */}
        <section className="py-24 lg:py-32 bg-[hsl(var(--secondary))]">
          <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center">
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}>
              
              <motion.p variants={fadeUp} className="text-[hsl(var(--primary))] text-sm font-semibold uppercase tracking-widest mb-3">
                {home.services.eyebrow}
              </motion.p>
              <motion.h2 variants={fadeUp} className="font-heading text-4xl lg:text-5xl font-bold text-white mb-4">
                {home.services.headline}
              </motion.h2>
              <motion.p variants={fadeUp} className="text-white/60 text-lg mb-16 max-w-xl mx-auto">
                {home.services.subtext}
              </motion.p>

              <motion.div
                variants={stagger}
                className="grid grid-cols-1 md:grid-cols-3 gap-6">
                
                {home.services.times.map((svc) =>
                <motion.div
                  key={svc.id}
                  variants={fadeUp}
                  className="border border-white/10 rounded-2xl p-8 hover:border-[hsl(var(--primary))]/50 hover:bg-white/5 transition-all duration-300">
                  
                    <div className="flex items-center justify-center gap-2 mb-4">
                      <Clock size={16} className="text-[hsl(var(--primary))]" />
                      <span className="text-[hsl(var(--primary))] text-xs font-semibold uppercase tracking-widest">{svc.day}</span>
                    </div>
                    <p className="font-heading text-3xl font-bold text-white mb-2">{svc.time}</p>
                    <p className="text-white/50 text-sm">{svc.label}</p>
                  </motion.div>
                )}
              </motion.div>

              <motion.div variants={fadeUp} className="mt-10 flex items-center justify-center gap-2 text-white/40 text-sm">
                <MapPin size={14} className="text-[hsl(var(--primary))]" />
                <span>123 Light Street, Suite 100 — Your City, ST 00000</span>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ── PRAYER ───────────────────────────────────────────── */}
        <section className="py-24 lg:py-32 bg-[hsl(var(--background))]">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                variants={stagger}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex flex-col gap-6">
                
                <motion.p variants={fadeUp} className="text-[hsl(var(--primary))] text-sm font-semibold uppercase tracking-widest">
                  {home.prayer.eyebrow}
                </motion.p>
                <motion.h2 variants={fadeUp} className="font-heading text-4xl lg:text-5xl font-bold text-[hsl(var(--secondary))] leading-tight">
                  {home.prayer.headline}
                </motion.h2>
                <motion.div variants={fadeUp} className="w-16 h-1 bg-[hsl(var(--primary))] rounded-full" />
                <motion.p variants={fadeUp} className="text-[hsl(var(--foreground))]/70 text-lg leading-relaxed">
                  {home.prayer.body}
                </motion.p>
                <motion.div variants={fadeUp}>
                  <Link
                    to="/prayer"
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[hsl(var(--secondary))] text-white font-semibold hover:bg-[hsl(var(--secondary))]/80 transition-colors duration-300 shadow-lg">
                    
                    {home.prayer.cta}
                    <ArrowRight size={16} />
                  </Link>
                </motion.div>
              </motion.div>

              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="relative">
                
                <img
                  src="/airo-assets/images/pages/home/ministry-prayer"
                  alt="Hands reaching toward each other in prayer"
                  className="w-full h-[420px] object-cover rounded-2xl shadow-2xl"
                  loading="lazy"
                  width={700}
                  height={420} />
                
                <div className="absolute -top-4 -left-4 w-full h-full rounded-2xl border-2 border-[hsl(var(--primary))]/20 -z-10" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── GIVE ─────────────────────────────────────────────── */}
        <section className="py-24 lg:py-32 bg-[hsl(var(--muted))]">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-3xl overflow-hidden shadow-2xl">
              {/* Image side */}
              <div className="relative h-72 lg:h-auto">
                <img
                  src="/airo-assets/images/pages/home/give"
                  alt="Generous giving and community support"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  width={700}
                  height={500} />
                
                <div className="absolute inset-0 bg-[hsl(var(--secondary))]/40 pointer-events-none" />
              </div>

              {/* Copy side */}
              <motion.div
                variants={stagger}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-[hsl(var(--secondary))] p-12 lg:p-16 flex flex-col justify-center gap-6">
                
                <motion.p variants={fadeUp} className="text-[hsl(var(--primary))] text-sm font-semibold uppercase tracking-widest">
                  {home.give.eyebrow}
                </motion.p>
                <motion.h2 variants={fadeUp} className="font-heading text-4xl font-bold text-white leading-tight">
                  {home.give.headline}
                </motion.h2>
                <motion.div variants={fadeUp} className="w-16 h-1 bg-[hsl(var(--primary))] rounded-full" />
                <motion.p variants={fadeUp} className="text-white/70 text-lg leading-relaxed">
                  {home.give.body}
                </motion.p>
                <motion.div variants={fadeUp} className="flex flex-col gap-3">
                  <p className="text-white/40 text-sm italic">{home.give.cta_note}</p>
                  <Link
                    to="/teachings"
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[hsl(var(--primary))] text-[hsl(var(--secondary))] font-semibold hover:bg-[hsl(var(--accent))] transition-colors duration-300 shadow-lg shadow-[hsl(var(--primary))]/20 self-start">
                    
                    {home.give.cta}
                    <ArrowRight size={16} />
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <style>{
        `@keyframes glow-pulse {
          0%, 100% { box-shadow: 0 0 20px hsl(var(--primary) / 0.3), 0 4px 24px hsl(var(--primary) / 0.2); }
          50% { box-shadow: 0 0 40px hsl(var(--primary) / 0.5), 0 4px 32px hsl(var(--primary) / 0.35); }
        }`
        }</style>
    </>);

}