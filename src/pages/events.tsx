import { Helmet } from '@dr.pogodin/react-helmet';
import { Link } from 'react-router';
import { motion } from 'motion/react';
import { Clock, MapPin, Wifi, ArrowRight, Tag } from 'lucide-react';
import { events } from 'virtual:content';

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' as const } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

export default function EventsPage() {
  return (
    <>
      <Helmet>
        <title>Events & Services — Illumination Global Ministries</title>
        <meta name="description" content="Join Illumination Global Ministries for weekly worship services, Bible study, and upcoming special events. All are welcome — in person and online." />
        <meta property="og:title" content="Events & Services — Illumination Global Ministries" />
        <meta property="og:description" content="Gather. Worship. Grow. Weekly services and upcoming events." />
        <meta property="og:type" content="website" />
      </Helmet>

      <main>
        {/* HERO */}
        <section className="relative h-[55vh] min-h-[400px] flex items-center justify-center overflow-hidden">
          <img
            src="/airo-assets/images/pages/events/hero"
            alt="Congregation gathered in worship"
            className="absolute inset-0 w-full h-full object-cover"
            loading="eager"
            fetchPriority="high"
            width={1920}
            height={800}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[hsl(var(--secondary))]/80 via-[hsl(var(--secondary))]/55 to-[hsl(var(--secondary))]/80 pointer-events-none" />
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] rounded-full pointer-events-none"
            style={{ background: 'radial-gradient(ellipse at center, hsl(var(--primary) / 0.18) 0%, transparent 70%)' }}
          />
          <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-[hsl(var(--primary))] text-xs font-semibold uppercase tracking-widest mb-4"
            >
              {events.hero.eyebrow}
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
              className="font-heading text-4xl md:text-6xl font-bold text-white leading-tight mb-5"
            >
              {events.hero.headline}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.65 }}
              className="text-white/75 text-lg"
            >
              {events.hero.subheadline}
            </motion.p>
          </div>
        </section>

        {/* WEEKLY SERVICES */}
        <section className="py-24 lg:py-32 bg-[hsl(var(--background))]">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-16">
              <motion.p variants={fadeUp} className="text-[hsl(var(--primary))] text-sm font-semibold uppercase tracking-widest mb-3">
                {events.services.eyebrow}
              </motion.p>
              <motion.h2 variants={fadeUp} className="font-heading text-4xl lg:text-5xl font-bold text-[hsl(var(--secondary))] mb-3">
                {events.services.headline}
              </motion.h2>
              <motion.p variants={fadeUp} className="text-[hsl(var(--foreground))]/60 text-lg">
                {events.services.subtext}
              </motion.p>
            </motion.div>

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              {events.services.items.map((svc) => (
                <motion.div
                  key={svc.id}
                  variants={fadeUp}
                  className="bg-[hsl(var(--secondary))] rounded-2xl p-8 flex flex-col gap-4 hover:shadow-xl transition-shadow duration-300 group"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[hsl(var(--primary))] text-xs font-semibold uppercase tracking-widest">{svc.day}</span>
                    <span className="flex items-center gap-1 text-white/40 text-xs">
                      <Wifi size={12} />
                      {svc.type}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock size={18} className="text-[hsl(var(--primary))] shrink-0" />
                    <span className="font-heading text-3xl font-bold text-white">{svc.time}</span>
                  </div>
                  <div className="w-10 h-0.5 bg-[hsl(var(--primary))]/40 rounded-full" />
                  <h3 className="font-heading text-xl font-bold text-white">{svc.label}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{svc.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* WATCH LIVE BANNER */}
        <section className="py-16 bg-[hsl(var(--primary))]">
          <div className="max-w-5xl mx-auto px-6 lg:px-8">
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-col md:flex-row items-center justify-between gap-8"
            >
              <div className="flex flex-col gap-3 text-center md:text-left">
                <motion.p variants={fadeUp} className="text-[hsl(var(--secondary))] text-xs font-semibold uppercase tracking-widest">
                  {events.watch.eyebrow}
                </motion.p>
                <motion.h2 variants={fadeUp} className="font-heading text-3xl lg:text-4xl font-bold text-[hsl(var(--secondary))]">
                  {events.watch.headline}
                </motion.h2>
                <motion.p variants={fadeUp} className="text-[hsl(var(--secondary))]/70 text-base max-w-lg">
                  {events.watch.body}
                </motion.p>
                <motion.p variants={fadeUp} className="text-[hsl(var(--secondary))]/50 text-xs italic">
                  {events.watch.note}
                </motion.p>
              </div>
              <motion.div variants={fadeUp} className="shrink-0">
                <Link
                  to="/events"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[hsl(var(--secondary))] text-white font-semibold hover:bg-[hsl(var(--secondary))]/80 transition-colors duration-300 shadow-lg whitespace-nowrap"
                >
                  {events.watch.cta} <ArrowRight size={16} />
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* UPCOMING EVENTS */}
        <section className="py-24 lg:py-32 bg-[hsl(var(--muted))]">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-16">
              <motion.p variants={fadeUp} className="text-[hsl(var(--primary))] text-sm font-semibold uppercase tracking-widest mb-3">
                {events.upcoming.eyebrow}
              </motion.p>
              <motion.h2 variants={fadeUp} className="font-heading text-4xl lg:text-5xl font-bold text-[hsl(var(--secondary))]">
                {events.upcoming.headline}
              </motion.h2>
            </motion.div>

            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {events.upcoming.items.map((evt) => (
                <motion.div
                  key={evt.id}
                  variants={fadeUp}
                  className="bg-[hsl(var(--card))] rounded-2xl overflow-hidden border border-[hsl(var(--border))] hover:border-[hsl(var(--primary))]/40 hover:shadow-lg transition-all duration-300 group flex"
                >
                  {/* Date block */}
                  <div className="bg-[hsl(var(--secondary))] w-24 shrink-0 flex flex-col items-center justify-center gap-1 p-4">
                    <span className="text-[hsl(var(--primary))] text-xs font-semibold uppercase tracking-wide">{evt.day.slice(0, 3)}</span>
                    <span className="font-heading text-3xl font-bold text-white leading-none">
                      {evt.date.split(' ')[1].replace(',', '')}
                    </span>
                    <span className="text-white/50 text-xs">{evt.date.split(' ')[0].slice(0, 3)}</span>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col gap-3 flex-1">
                    <div className="flex items-center gap-3 flex-wrap">
                      <span className="inline-flex items-center gap-1 text-[hsl(var(--primary))] text-xs font-semibold bg-[hsl(var(--primary))]/10 px-3 py-1 rounded-full">
                        <Tag size={10} />
                        {evt.tag}
                      </span>
                      <span className="flex items-center gap-1 text-[hsl(var(--foreground))]/50 text-xs">
                        <Clock size={11} />
                        {evt.time}
                      </span>
                    </div>
                    <h3 className="font-heading text-xl font-bold text-[hsl(var(--secondary))] group-hover:text-[hsl(var(--primary))] transition-colors duration-200">
                      {evt.title}
                    </h3>
                    <p className="text-[hsl(var(--foreground))]/65 text-sm leading-relaxed">{evt.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* LOCATION */}
        <section className="py-24 lg:py-32 bg-[hsl(var(--secondary))]">
          <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center">
            <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <motion.p variants={fadeUp} className="text-[hsl(var(--primary))] text-sm font-semibold uppercase tracking-widest mb-4">
                {events.location.eyebrow}
              </motion.p>
              <motion.h2 variants={fadeUp} className="font-heading text-4xl lg:text-5xl font-bold text-white mb-6">
                {events.location.headline}
              </motion.h2>
              <motion.div variants={fadeUp} className="w-16 h-1 bg-[hsl(var(--primary))] rounded-full mx-auto mb-8" />

              <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-8">
                <div className="flex items-start gap-3 text-left">
                  <MapPin size={20} className="text-[hsl(var(--primary))] shrink-0 mt-0.5" />
                  <div>
                    <p className="text-white font-medium">{events.location.address}</p>
                    <p className="text-white/60">{events.location.city}</p>
                  </div>
                </div>
                <div className="hidden sm:block w-px h-10 bg-white/20" />
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 shrink-0 flex items-center justify-center">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5 text-[hsl(var(--primary))]">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  </div>
                  <p className="text-white/70">{events.location.email}</p>
                </div>
              </motion.div>

              <motion.p variants={fadeUp} className="text-white/50 text-sm italic max-w-xl mx-auto mb-10">
                {events.location.note}
              </motion.p>

              <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  to="/prayer"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[hsl(var(--primary))] text-[hsl(var(--secondary))] font-semibold hover:bg-[hsl(var(--accent))] transition-colors duration-300 shadow-lg"
                >
                  Connect With Us <ArrowRight size={16} />
                </Link>
                <Link
                  to="/give"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-white/30 text-white font-medium hover:border-[hsl(var(--primary))] hover:text-[hsl(var(--primary))] transition-all duration-300"
                >
                  Support the Ministry
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
}
