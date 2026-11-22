import { Helmet } from '@dr.pogodin/react-helmet';
import { Link } from 'react-router';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { about } from 'virtual:content';

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' as const } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.13 } },
};

export default function AboutPage() {
  return (
    <>
      <Helmet>
        <title>About — Illumination Global Ministries</title>
        <meta name="description" content="Learn about Illumination Global Ministries, Lead Pastor Anthony Osigbe, and the story behind a Christ-centered ministry reaching the world with the light of the Gospel." />
        <meta property="og:title" content="About — Illumination Global Ministries" />
        <meta property="og:description" content="Reaching the World with the Light of Christ's Kingdom." />
        <meta property="og:type" content="website" />
      </Helmet>

      <main>
        {/* HERO */}
        <section className="relative h-[60vh] min-h-[440px] flex items-center justify-center overflow-hidden">
          <img
            src="/airo-assets/images/pages/about/hero"
            alt="Our community united in faith"
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
              className="text-[hsl(var(--primary))] text-xs font-semibold uppercase tracking-widest mb-5"
            >
              {about.hero.eyebrow}
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
              className="font-heading text-4xl md:text-6xl font-bold text-white leading-tight mb-5"
            >
              {about.hero.headline}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.65 }}
              className="text-white/75 text-lg md:text-xl italic font-heading"
            >
              {about.hero.subheadline}
            </motion.p>
          </div>
        </section>

        {/* OUR CALLING */}
        <section className="py-24 lg:py-32 bg-[hsl(var(--background))]">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <motion.p variants={fadeUp} className="text-[hsl(var(--primary))] text-sm font-semibold uppercase tracking-widest mb-4">
                {about.calling.eyebrow}
              </motion.p>
              <motion.h2 variants={fadeUp} className="font-heading text-4xl lg:text-5xl font-bold text-[hsl(var(--secondary))] mb-6">
                {about.calling.headline}
              </motion.h2>
              <motion.div variants={fadeUp} className="w-16 h-1 bg-[hsl(var(--primary))] rounded-full mx-auto mb-8" />
              <motion.p variants={fadeUp} className="text-[hsl(var(--foreground))]/70 text-lg leading-relaxed mb-5">
                {about.calling.body1}
              </motion.p>
              <motion.p variants={fadeUp} className="text-[hsl(var(--foreground))]/70 text-lg leading-relaxed">
                {about.calling.body2}
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* MEET THE PASTOR */}
        <section className="py-24 lg:py-32 bg-[hsl(var(--secondary))]">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="relative flex justify-center lg:justify-start"
              >
                <div className="relative">
                  <img
                    src="/airo-assets/images/team/leader-1"
                    alt="Pastor Anthony Osigbe"
                    className="w-72 h-72 md:w-80 md:h-80 object-cover rounded-full shadow-2xl border-4 border-[hsl(var(--primary))]/40"
                    loading="lazy"
                    width={320}
                    height={320}
                  />
                  <div className="absolute -inset-3 rounded-full border-2 border-[hsl(var(--primary))]/20" />
                  <div
                    className="absolute inset-0 rounded-full pointer-events-none"
                    style={{ boxShadow: '0 0 60px hsl(var(--primary) / 0.2)' }}
                  />
                </div>
              </motion.div>
              <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex flex-col gap-5">
                <motion.p variants={fadeUp} className="text-[hsl(var(--primary))] text-sm font-semibold uppercase tracking-widest">
                  {about.pastor.eyebrow}
                </motion.p>
                <motion.h2 variants={fadeUp} className="font-heading text-4xl lg:text-5xl font-bold text-white leading-tight">
                  {about.pastor.name}
                </motion.h2>
                <motion.p variants={fadeUp} className="text-[hsl(var(--primary))] font-semibold text-sm uppercase tracking-wide">
                  {about.pastor.role}
                </motion.p>
                <motion.div variants={fadeUp} className="w-16 h-1 bg-[hsl(var(--primary))] rounded-full" />
                <motion.p variants={fadeUp} className="text-white/70 text-lg leading-relaxed">
                  {about.pastor.summary}
                </motion.p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* HIS STORY */}
        <section className="py-24 lg:py-32 bg-[hsl(var(--background))]">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex flex-col gap-6">
                <motion.p variants={fadeUp} className="text-[hsl(var(--primary))] text-sm font-semibold uppercase tracking-widest">
                  {about.story.eyebrow}
                </motion.p>
                <motion.h2 variants={fadeUp} className="font-heading text-4xl lg:text-5xl font-bold text-[hsl(var(--secondary))] leading-tight">
                  {about.story.headline}
                </motion.h2>
                <motion.div variants={fadeUp} className="w-16 h-1 bg-[hsl(var(--primary))] rounded-full" />
                {about.story.paragraphs.map((para) => (
                  <motion.p key={para.id} variants={fadeUp} className="text-[hsl(var(--foreground))]/70 text-lg leading-relaxed">
                    {para.text}
                  </motion.p>
                ))}
              </motion.div>
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="relative lg:sticky lg:top-28"
              >
                <img
                  src="/airo-assets/images/pages/about/story"
                  alt="Open Bible in warm golden light"
                  className="w-full h-[460px] object-cover rounded-2xl shadow-2xl"
                  loading="lazy"
                  width={700}
                  height={460}
                />
                <div className="absolute -bottom-4 -right-4 w-full h-full rounded-2xl border-2 border-[hsl(var(--primary))]/25 -z-10" />
              </motion.div>
            </div>
          </div>
        </section>

        {/* TIMELINE */}
        <section className="py-24 lg:py-32 bg-[hsl(var(--muted))]">
          <div className="max-w-5xl mx-auto px-6 lg:px-8">
            <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="text-center mb-16">
              <motion.p variants={fadeUp} className="text-[hsl(var(--primary))] text-sm font-semibold uppercase tracking-widest mb-3">
                {about.timeline.eyebrow}
              </motion.p>
              <motion.h2 variants={fadeUp} className="font-heading text-4xl lg:text-5xl font-bold text-[hsl(var(--secondary))]">
                {about.timeline.headline}
              </motion.h2>
            </motion.div>
            <div className="relative">
              <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-[hsl(var(--primary))]/25 md:-translate-x-px" />
              <div className="flex flex-col gap-12">
                {about.timeline.items.map((item, i) => (
                  <motion.div
                    key={item.id}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className={"relative flex items-start gap-8 md:gap-0 " + (i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse")}
                  >
                    <div className={"pl-14 md:pl-0 md:w-[calc(50%-2rem)] " + (i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12")}>
                      <div className="bg-[hsl(var(--card))] rounded-2xl p-6 border border-[hsl(var(--border))] shadow-sm hover:shadow-md transition-shadow duration-300">
                        <p className="text-[hsl(var(--primary))] text-xs font-semibold uppercase tracking-widest mb-2">{item.date}</p>
                        <h3 className="font-heading text-xl font-bold text-[hsl(var(--secondary))] mb-2">{item.title}</h3>
                        <p className="text-[hsl(var(--foreground))]/65 text-sm leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                    <div className="absolute left-6 md:left-1/2 md:-translate-x-1/2 top-6 w-3 h-3 rounded-full bg-[hsl(var(--primary))] border-2 border-[hsl(var(--background))] shadow-md" />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* BIRTH OF THE MINISTRY */}
        <section className="py-24 lg:py-32 bg-[hsl(var(--secondary))]">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <motion.p variants={fadeUp} className="text-[hsl(var(--primary))] text-sm font-semibold uppercase tracking-widest mb-4">
                {about.birth.eyebrow}
              </motion.p>
              <motion.h2 variants={fadeUp} className="font-heading text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                {about.birth.headline}
              </motion.h2>
              <motion.div variants={fadeUp} className="w-16 h-1 bg-[hsl(var(--primary))] rounded-full mx-auto mb-8" />
              <motion.p variants={fadeUp} className="text-white/70 text-lg leading-relaxed">
                {about.birth.body}
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* HEART BEHIND THE WORK */}
        <section className="py-24 lg:py-32 bg-[hsl(var(--background))]">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="relative"
              >
                <img
                  src="/airo-assets/images/team/leader-2"
                  alt="Pastor Anthony Osigbe preaching"
                  className="w-full h-[480px] object-cover rounded-2xl shadow-2xl"
                  loading="lazy"
                  width={700}
                  height={480}
                />
                <div className="absolute -top-4 -left-4 w-full h-full rounded-2xl border-2 border-[hsl(var(--primary))]/20 -z-10" />
              </motion.div>
              <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex flex-col gap-6">
                <motion.p variants={fadeUp} className="text-[hsl(var(--primary))] text-sm font-semibold uppercase tracking-widest">
                  {about.heart.eyebrow}
                </motion.p>
                <motion.h2 variants={fadeUp} className="font-heading text-4xl lg:text-5xl font-bold text-[hsl(var(--secondary))] leading-tight">
                  {about.heart.headline}
                </motion.h2>
                <motion.div variants={fadeUp} className="w-16 h-1 bg-[hsl(var(--primary))] rounded-full" />
                <motion.p variants={fadeUp} className="text-[hsl(var(--foreground))]/70 text-lg leading-relaxed">
                  {about.heart.body}
                </motion.p>
                <motion.p variants={fadeUp} className="font-heading text-xl font-semibold text-[hsl(var(--secondary))] italic">
                  {about.heart.tagline}
                </motion.p>
                <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 pt-2">
                  <Link
                    to="/prayer"
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[hsl(var(--secondary))] text-white font-semibold hover:bg-[hsl(var(--secondary))]/80 transition-colors duration-300 shadow-lg"
                  >
                    {about.heart.cta} <ArrowRight size={16} />
                  </Link>
                  <Link
                    to="/events"
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-[hsl(var(--secondary))]/30 text-[hsl(var(--secondary))] font-medium hover:border-[hsl(var(--primary))] hover:text-[hsl(var(--primary))] transition-all duration-300"
                  >
                    Watch Live <ArrowRight size={16} />
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
