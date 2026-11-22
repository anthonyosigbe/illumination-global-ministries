import { Helmet } from '@dr.pogodin/react-helmet';
import { motion } from 'motion/react';
import { Globe, BookOpen, Heart, Users, ArrowRight, Mail } from 'lucide-react';
import { Link } from 'react-router';
import { give } from 'virtual:content';

const iconMap: Record<string, React.ReactNode> = {
  Globe: <Globe className="w-7 h-7" />,
  BookOpen: <BookOpen className="w-7 h-7" />,
  Heart: <Heart className="w-7 h-7" />,
  Users: <Users className="w-7 h-7" />,
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' as const } },
} as const;

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
} as const;

export default function GivePage() {
  return (
    <>
      <Helmet>
        <title>Give — Illumination Global Ministries</title>
        <meta
          name="description"
          content="Partner with Illumination Global Ministries through your generous giving. Support global outreach, biblical teachings, and prayer ministry."
        />
        <meta property="og:title" content="Give — Illumination Global Ministries" />
        <meta
          property="og:description"
          content="Your generosity fuels the mission — reaching the nations with the light of Christ's Kingdom."
        />
        <meta property="og:type" content="website" />
      </Helmet>

      <main>
        {/* ── Hero ── */}
        <section className="relative bg-secondary overflow-hidden py-xxxl">
          {/* decorative glow */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/10 blur-3xl" />
          </div>
          <div className="relative max-w-content mx-auto px-6 text-center">
            <motion.p
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="text-primary font-semibold tracking-wide uppercase text-sm mb-4"
            >
              {give.hero.eyebrow}
            </motion.p>
            <motion.h1
              initial="hidden"
              animate="visible"
              variants={{ ...fadeUp, visible: { ...fadeUp.visible, transition: { duration: 0.6, delay: 0.1, ease: 'easeOut' as const } } }}
              className="font-heading text-4xl md:text-6xl text-white mb-6 leading-tight"
            >
              {give.hero.headline}
            </motion.h1>
            <motion.p
              initial="hidden"
              animate="visible"
              variants={{ ...fadeUp, visible: { ...fadeUp.visible, transition: { duration: 0.6, delay: 0.2, ease: 'easeOut' as const } } }}
              className="text-white/75 text-lg md:text-xl max-w-2xl mx-auto"
            >
              {give.hero.subheadline}
            </motion.p>
          </div>
        </section>

        {/* ── Why We Give ── */}
        <section className="py-xxl bg-background">
          <div className="max-w-content mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={stagger}
              >
                <motion.p variants={fadeUp} className="text-primary font-semibold tracking-wide uppercase text-sm mb-3">
                  {give.why.eyebrow}
                </motion.p>
                <motion.h2 variants={fadeUp} className="font-heading text-3xl md:text-4xl text-secondary mb-6">
                  {give.why.headline}
                </motion.h2>
                <motion.p variants={fadeUp} className="text-muted-foreground text-lg leading-relaxed mb-8">
                  {give.why.body}
                </motion.p>
              </motion.div>

              {/* Scripture card */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="bg-secondary rounded-2xl p-8 md:p-10 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-40 h-40 bg-primary/10 rounded-full blur-2xl pointer-events-none" />
                <div className="relative">
                  <div className="w-10 h-1 bg-primary rounded mb-6" />
                  <blockquote className="text-white/90 text-xl md:text-2xl font-heading italic leading-relaxed mb-6">
                    {give.why.scripture}
                  </blockquote>
                  <p className="text-primary font-semibold">{give.why.reference}</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── Where Your Gift Goes ── */}
        <section className="py-xxl bg-muted/40">
          <div className="max-w-content mx-auto px-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
              className="text-center mb-12"
            >
              <motion.p variants={fadeUp} className="text-primary font-semibold tracking-wide uppercase text-sm mb-3">
                {give.areas.eyebrow}
              </motion.p>
              <motion.h2 variants={fadeUp} className="font-heading text-3xl md:text-4xl text-secondary">
                {give.areas.headline}
              </motion.h2>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {give.areas.items.map((item) => (
                <motion.div
                  key={item.id}
                  variants={fadeUp}
                  className="bg-card rounded-2xl p-6 border border-border hover:border-primary/40 transition-colors"
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-5">
                    {iconMap[item.icon] ?? <Heart className="w-7 h-7" />}
                  </div>
                  <h3 className="font-heading text-lg text-secondary mb-3">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── Ways to Give ── */}
        <section className="py-xxl bg-background">
          <div className="max-w-content mx-auto px-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
              className="text-center mb-12"
            >
              <motion.p variants={fadeUp} className="text-primary font-semibold tracking-wide uppercase text-sm mb-3">
                {give.ways.eyebrow}
              </motion.p>
              <motion.h2 variants={fadeUp} className="font-heading text-3xl md:text-4xl text-secondary mb-4">
                {give.ways.headline}
              </motion.h2>
              <motion.p variants={fadeUp} className="text-muted-foreground max-w-xl mx-auto">
                {give.ways.note}
              </motion.p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              {give.ways.items.map((way) => (
                <motion.div
                  key={way.id}
                  variants={fadeUp}
                  className={`rounded-2xl p-8 border flex flex-col ${
                    way.status === 'coming_soon'
                      ? 'bg-secondary border-secondary/50'
                      : 'bg-card border-border'
                  }`}
                >
                  <h3
                    className={`font-heading text-xl mb-3 ${
                      way.status === 'coming_soon' ? 'text-white' : 'text-secondary'
                    }`}
                  >
                    {way.title}
                  </h3>
                  <p
                    className={`text-sm leading-relaxed mb-6 flex-1 ${
                      way.status === 'coming_soon' ? 'text-white/70' : 'text-muted-foreground'
                    }`}
                  >
                    {way.description}
                  </p>
                  {way.title === 'Online Giving' ? (
                    <Link
                      to="/give/donate"
                      className="inline-flex items-center gap-2 bg-primary text-secondary font-semibold px-5 py-2.5 rounded-full hover:bg-accent transition-colors text-sm"
                    >
                      <ArrowRight className="w-4 h-4" />
                      {way.cta}
                    </Link>
                  ) : way.title === 'Bank Transfer' ? (
                    <Link
                      to="/prayer"
                      className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 transition-all"
                    >
                      <Mail className="w-4 h-4" />
                      {way.cta}
                    </Link>
                  ) : (
                    <Link
                      to="/events"
                      className="inline-flex items-center gap-2 text-primary font-semibold text-sm hover:gap-3 transition-all"
                    >
                      <ArrowRight className="w-4 h-4" />
                      {way.cta}
                    </Link>
                  )}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── CTA Banner ── */}
        <section className="py-xxl bg-secondary relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-2xl" />
          </div>
          <div className="relative max-w-content mx-auto px-6 text-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
            >
              <motion.h2 variants={fadeUp} className="font-heading text-3xl md:text-5xl text-white mb-6">
                {give.cta.headline}
              </motion.h2>
              <motion.p variants={fadeUp} className="text-white/75 text-lg max-w-2xl mx-auto mb-10">
                {give.cta.body}
              </motion.p>
              <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/give/donate"
                  className="inline-flex items-center justify-center gap-2 bg-primary text-secondary font-semibold px-8 py-4 rounded-full hover:bg-accent transition-colors"
                >
                  {give.cta.button}
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/about"
                  className="inline-flex items-center justify-center gap-2 border border-white/30 text-white font-semibold px-8 py-4 rounded-full hover:bg-white/10 transition-colors"
                >
                  {give.cta.secondary}
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
}
