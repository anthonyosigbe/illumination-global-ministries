import { Helmet } from '@dr.pogodin/react-helmet';
import { motion } from 'motion/react';
import { BookOpen, Clock, Play, ArrowRight, Calendar, ChevronRight, Video, Headphones } from 'lucide-react';
import { Link } from 'react-router';
import { teachings } from 'virtual:content';

const seriesImages: Record<string, string> = {
  'series-1': '/airo-assets/images/pages/teachings/series-kingdom',
  'series-2': '/airo-assets/images/pages/teachings/series-prayer',
  'series-3': '/airo-assets/images/pages/teachings/series-faith',
};

const tagColors: Record<string, string> = {
  'Featured Series': 'bg-primary text-secondary',
  Prayer: 'bg-secondary/10 text-secondary',
  Faith: 'bg-secondary/10 text-secondary',
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' as const } },
} as const;

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
} as const;

export default function TeachingsPage() {
  return (
    <>
      <Helmet>
        <title>Teachings — Illumination Global Ministries</title>
        <meta
          name="description"
          content="Explore sermons and biblical teaching series from Pastor Anthony Osigbe — grounded in Scripture, alive with the Spirit."
        />
        <meta property="og:title" content="Teachings — Illumination Global Ministries" />
        <meta
          property="og:description"
          content="Rooted in the Word, Reaching the World. Sermons and teaching series from Illumination Global Ministries."
        />
        <meta property="og:type" content="website" />
      </Helmet>

      <main>
        {/* ── Hero ── */}
        <section className="relative min-h-[520px] flex items-center overflow-hidden">
          <img
            src="/airo-assets/images/pages/teachings/hero"
            alt="Church pulpit with light rays — biblical teachings"
            className="absolute inset-0 w-full h-full object-cover"
            loading="eager"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/80 to-secondary/30 pointer-events-none" />
          <div className="relative max-w-content mx-auto px-6 py-xxxl">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={stagger}
              className="max-w-2xl"
            >
              <motion.p variants={fadeUp} className="text-primary font-semibold tracking-wide uppercase text-sm mb-4">
                {teachings.hero.eyebrow}
              </motion.p>
              <motion.h1
                variants={fadeUp}
                className="font-heading text-4xl md:text-6xl text-white mb-6 leading-tight"
              >
                {teachings.hero.headline}
              </motion.h1>
              <motion.p variants={fadeUp} className="text-white/75 text-lg md:text-xl leading-relaxed">
                {teachings.hero.subheadline}
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* ── Intro ── */}
        <section className="py-xxl bg-background">
          <div className="max-w-content mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={stagger}
              >
                <motion.p variants={fadeUp} className="text-primary font-semibold tracking-wide uppercase text-sm mb-3">
                  {teachings.intro.headline}
                </motion.p>
                <motion.h2 variants={fadeUp} className="font-heading text-3xl md:text-4xl text-secondary mb-6">
                  {teachings.intro.headline}
                </motion.h2>
                <motion.p variants={fadeUp} className="text-muted-foreground text-lg leading-relaxed">
                  {teachings.intro.subheadline}
                </motion.p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── Teaching Series ── */}
        <section className="py-xxl bg-secondary">
          <div className="max-w-content mx-auto px-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
              className="mb-12"
            >
              <motion.p variants={fadeUp} className="text-primary font-semibold tracking-wide uppercase text-sm mb-3">
                {teachings.hero.eyebrow}
              </motion.p>
              <motion.h2 variants={fadeUp} className="font-heading text-3xl md:text-4xl text-white">
                {teachings.intro.subheadline}
              </motion.h2>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              {teachings.series.map((series: { id: string; title: string; description: string; message_count: string; date: string; tag: string }) => (
                <motion.div
                  key={series.id}
                  variants={fadeUp}
                  className="group rounded-2xl overflow-hidden bg-white/5 border border-white/10 hover:border-primary/50 transition-colors cursor-pointer"
                >
                  {/* Series image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={seriesImages[series.id] ?? '/airo-assets/images/pages/teachings/series-faith'}
                      alt={series.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 to-transparent pointer-events-none" />
                    <span
                      className={`absolute top-4 left-4 text-xs font-semibold px-3 py-1 rounded-full ${tagColors[series.tag] ?? 'bg-primary text-secondary'}`}
                    >
                      {series.tag}
                    </span>
                  </div>

                  {/* Series info */}
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-primary/70 text-xs mb-3">
                      <BookOpen className="w-3.5 h-3.5" />
                      <span>{series.message_count}</span>
                      <span className="mx-1">·</span>
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{series.date}</span>
                    </div>
                    <h3 className="font-heading text-xl text-white mb-3 group-hover:text-primary transition-colors">
                      {series.title}
                    </h3>
                    <p className="text-white/60 text-sm leading-relaxed mb-5">{series.description}</p>
                    <span className="inline-flex items-center gap-1.5 text-primary text-sm font-semibold group-hover:gap-2.5 transition-all">
                      View Series <ChevronRight className="w-4 h-4" />
                    </span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── Recent Messages ── */}
        <section className="py-xxl bg-background">
          <div className="max-w-content mx-auto px-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
              className="mb-12"
            >
              <motion.p variants={fadeUp} className="text-primary font-semibold tracking-wide uppercase text-sm mb-3">
                {teachings.recent.eyebrow}
              </motion.p>
              <motion.h2 variants={fadeUp} className="font-heading text-3xl md:text-4xl text-secondary">
                {teachings.recent.headline}
              </motion.h2>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {teachings.recent.items.map((msg) => (
                <motion.div
                  key={msg.id}
                  variants={fadeUp}
                  className="group bg-card border border-border rounded-2xl p-6 hover:border-primary/40 hover:shadow-lg transition-all"
                >
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <span className="text-xs font-semibold text-primary bg-primary/10 px-2.5 py-0.5 rounded-full">
                          {msg.series}
                        </span>
                      </div>
                      <h3 className="font-heading text-lg text-secondary group-hover:text-primary transition-colors leading-snug">
                        {msg.title}
                      </h3>
                    </div>
                    {/* Play button */}
                    {msg.video_url ? (
                      <a
                        href={msg.video_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="shrink-0 w-11 h-11 rounded-full bg-secondary flex items-center justify-center group-hover:bg-primary transition-colors"
                        aria-label={`Watch ${msg.title}`}
                      >
                        <Play className="w-4 h-4 text-white fill-white" />
                      </a>
                    ) : (
                      <div className="shrink-0 w-11 h-11 rounded-full bg-secondary/40 flex items-center justify-center">
                        <Play className="w-4 h-4 text-white/50 fill-white/50" />
                      </div>
                    )}
                  </div>

                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">{msg.description}</p>

                  {/* Watch / Listen buttons */}
                  {(msg.video_url || msg.audio_url) && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {msg.video_url && (
                        <a
                          href={msg.video_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 bg-secondary text-white text-xs font-semibold px-4 py-2 rounded-full hover:bg-primary hover:text-secondary transition-colors"
                        >
                          <Video className="w-3.5 h-3.5" />
                          Watch
                        </a>
                      )}
                      {msg.audio_url && (
                        <a
                          href={msg.audio_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 border border-secondary text-secondary text-xs font-semibold px-4 py-2 rounded-full hover:bg-secondary hover:text-white transition-colors"
                        >
                          <Headphones className="w-3.5 h-3.5" />
                          Listen
                        </a>
                      )}
                    </div>
                  )}

                  {/* Coming soon placeholder when no links yet */}
                  {!msg.video_url && !msg.audio_url && (
                    <div className="flex items-center gap-2 mb-4">
                      <span className="inline-flex items-center gap-1.5 bg-muted text-muted-foreground text-xs font-medium px-3 py-1.5 rounded-full">
                        <Clock className="w-3 h-3" />
                        Links coming soon
                      </span>
                    </div>
                  )}

                  <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground border-t border-border pt-4">
                    <span className="flex items-center gap-1.5">
                      <BookOpen className="w-3.5 h-3.5 text-primary" />
                      {msg.scripture}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-primary" />
                      {msg.duration}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-primary" />
                      {msg.date}
                    </span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── CTA Banner ── */}
        <section className="py-xxl bg-muted/50">
          <div className="max-w-content mx-auto px-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
              className="bg-secondary rounded-3xl px-8 py-14 md:px-16 text-center relative overflow-hidden"
            >
              {/* decorative glows */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-primary/5 rounded-full blur-2xl" />
              </div>
              <div className="relative">
                <motion.h2 variants={fadeUp} className="font-heading text-3xl md:text-4xl text-white mb-4">
                  {teachings.cta.headline}
                </motion.h2>
                <motion.p variants={fadeUp} className="text-white/70 text-lg max-w-xl mx-auto mb-10">
                  {teachings.cta.subheadline}
                </motion.p>
                <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    to="/events"
                    className="inline-flex items-center justify-center gap-2 bg-primary text-secondary font-semibold px-8 py-4 rounded-full hover:bg-accent transition-colors"
                  >
                    <Play className="w-4 h-4 fill-secondary" />
                    {teachings.cta.primary_label}
                  </Link>
                  <Link
                    to="/prayer"
                    className="inline-flex items-center justify-center gap-2 border border-white/30 text-white font-semibold px-8 py-4 rounded-full hover:bg-white/10 transition-colors"
                  >
                    {teachings.cta.secondary_label}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
}
