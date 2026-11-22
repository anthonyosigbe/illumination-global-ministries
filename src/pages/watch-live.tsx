import { Helmet } from '@dr.pogodin/react-helmet';
import { useState } from 'react';
import { motion } from 'motion/react';
import {
  Play,
  Radio,
  Clock,
  Calendar,
  Youtube,
  MessageCircle,
  Bell,
  ArrowRight,
  Wifi,
  Heart,
  CheckCircle,
  Send,
} from 'lucide-react';
import { Link } from 'react-router';
import { watch_live } from 'virtual:content';

/* ── animation presets ── */
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' as const } },
} as const;

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.11 } },
} as const;

const dayColors: Record<string, string> = {
  Sunday: 'bg-primary text-secondary',
  Wednesday: 'bg-secondary/80 text-white',
};

const howIcons = [
  <Youtube key="yt" className="w-6 h-6" />,
  <MessageCircle key="mc" className="w-6 h-6" />,
  <Play key="pl" className="w-6 h-6" />,
];


/* ── Prayer & Connection Form (inline) ── */
type FormState = 'idle' | 'submitting' | 'success' | 'error';

function WatchLivePrayerForm() {
  const [formState, setFormState] = useState<FormState>('idle');
  const [requestType, setRequestType] = useState('Prayer request');
  const [wantsContact, setWantsContact] = useState<'yes' | 'no' | ''>('');
  const [request, setRequest] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setFormState('submitting');
    try {
      const res = await fetch('/api/contact/prayer-request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          requestType,
          request,
          wantsContact,
          name: name || undefined,
          email: email || undefined,
          source: 'Watch Live page',
        }),
      });
      if (!res.ok) throw new Error('Failed');
      setFormState('success');
    } catch {
      setFormState('error');
    }
  }

  if (formState === 'success') {
    return (
      <div className="text-center py-8">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
          <CheckCircle className="w-8 h-8 text-primary" />
        </div>
        <h3 className="font-heading text-xl text-secondary mb-2">We've Received Your Message</h3>
        <p className="text-muted-foreground">
          Thank you for reaching out. Our team will be praying with you and will follow up if you requested contact.
        </p>
      </div>
    );
  }

  const inputClass =
    'w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 transition';
  const labelClass = 'block text-sm font-semibold text-secondary mb-1.5';

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Request type */}
      <div>
        <label className={labelClass}>What brings you here today? <span className="text-destructive">*</span></label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {['Prayer request', 'Spiritual guidance', 'Salvation or rededication', 'Connect with the ministry', 'Other'].map((opt) => (
            <button
              key={opt}
              type="button"
              onClick={() => setRequestType(opt)}
              className={[
                'text-left px-4 py-2.5 rounded-xl border text-sm font-medium transition-colors',
                requestType === opt
                  ? 'border-primary bg-primary/10 text-secondary'
                  : 'border-border bg-background text-muted-foreground hover:border-primary/50',
              ].join(' ')}
            >
              {opt}
            </button>
          ))}
        </div>
      </div>

      {/* Prayer request textarea */}
      <div>
        <label htmlFor="wl-request" className={labelClass}>
          How can we pray with you or support you? <span className="text-destructive">*</span>
        </label>
        <textarea
          id="wl-request"
          required
          rows={4}
          value={request}
          onChange={(e) => setRequest(e.target.value)}
          placeholder="Share what's on your heart..."
          className={inputClass + ' resize-none'}
        />
      </div>

      {/* Wants contact */}
      <div>
        <label className={labelClass}>
          Would you like a ministry representative to contact you? <span className="text-destructive">*</span>
        </label>
        <div className="flex gap-3">
          {(['yes', 'no'] as const).map((opt) => (
            <button
              key={opt}
              type="button"
              onClick={() => setWantsContact(opt)}
              className={[
                'flex-1 py-2.5 rounded-xl border text-sm font-medium capitalize transition-colors',
                wantsContact === opt
                  ? 'border-primary bg-primary/10 text-secondary'
                  : 'border-border bg-background text-muted-foreground hover:border-primary/50',
              ].join(' ')}
            >
              {opt === 'yes' ? 'Yes' : 'No'}
            </button>
          ))}
        </div>
      </div>

      {/* Optional contact fields */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="wl-name" className={labelClass + ' font-normal text-muted-foreground'}>Your name <span className="text-xs">(optional)</span></label>
          <input
            id="wl-name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Full name"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="wl-email" className={labelClass + ' font-normal text-muted-foreground'}>Email address <span className="text-xs">(optional)</span></label>
          <input
            id="wl-email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            className={inputClass}
          />
        </div>
      </div>

      {formState === 'error' && (
        <p className="text-sm text-destructive">Something went wrong. Please try again.</p>
      )}

      <button
        type="submit"
        disabled={formState === 'submitting' || !request || !wantsContact}
        className="w-full inline-flex items-center justify-center gap-2 bg-primary text-secondary font-semibold px-6 py-3.5 rounded-full hover:bg-accent transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {formState === 'submitting' ? (
          <>
            <span className="w-4 h-4 border-2 border-secondary/30 border-t-secondary rounded-full animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send className="w-4 h-4" />
            Send Prayer Request
          </>
        )}
      </button>
    </form>
  );
}

export default function WatchLivePage() {
  return (
    <>
      <Helmet>
        <title>Watch Live — Illumination Global Ministries</title>
        <meta
          name="description"
          content="Stream Illumination Global Ministries services live every Sunday and Wednesday. Join Pastor Anthony Osigbe from anywhere in the world."
        />
        <meta property="og:title" content="Watch Live — Illumination Global Ministries" />
        <meta
          property="og:description"
          content="Experience the presence of God from anywhere. Services stream live every Sunday and Wednesday."
        />
        <meta property="og:type" content="website" />
      </Helmet>

      <main>
        {/* ── Hero ── */}
        <section className="relative min-h-[500px] flex items-center overflow-hidden">
          <img
            src="/airo-assets/images/pages/watch-live/hero"
            alt="Church congregation worshipping together during a live service"
            className="absolute inset-0 w-full h-full object-cover"
            loading="eager"
            fetchPriority="high"
          />
          {/* layered gradient: deep navy left, fade right */}
          <div className="absolute inset-0 bg-gradient-to-r from-secondary via-secondary/85 to-secondary/20 pointer-events-none" />

          <div className="relative max-w-content mx-auto px-6 py-xxxl">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={stagger}
              className="max-w-2xl"
            >
              {/* live badge */}
              <motion.div variants={fadeUp} className="flex items-center gap-2 mb-5">
                <span className="inline-flex items-center gap-2 bg-primary/20 border border-primary/40 text-primary text-xs font-semibold px-3 py-1.5 rounded-full">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  {watch_live.hero.eyebrow}
                </span>
              </motion.div>

              <motion.h1
                variants={fadeUp}
                className="font-heading text-4xl md:text-6xl text-white mb-6 leading-tight"
              >
                {watch_live.hero.headline}
              </motion.h1>
              <motion.p
                variants={fadeUp}
                className="text-white/75 text-lg md:text-xl leading-relaxed mb-10"
              >
                {watch_live.hero.subheadline}
              </motion.p>

              <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4">
                <a
                  href={watch_live.stream.channel_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-primary text-secondary font-semibold px-8 py-4 rounded-full hover:bg-accent transition-colors"
                >
                  <Play className="w-4 h-4 fill-secondary" />
                  {watch_live.stream.channel_label}
                </a>
                <a
                  href={watch_live.stream.channel_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 border border-white/30 text-white font-semibold px-8 py-4 rounded-full hover:bg-white/10 transition-colors"
                >
                  <Bell className="w-4 h-4" />
                  {watch_live.stream.subscribe_label}
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ── Stream Player Placeholder ── */}
        <section className="bg-secondary py-xxl">
          <div className="max-w-content mx-auto px-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
              className="mb-10"
            >
              <motion.p variants={fadeUp} className="text-primary font-semibold tracking-wide uppercase text-sm mb-3">
                {watch_live.stream.eyebrow}
              </motion.p>
              <motion.h2 variants={fadeUp} className="font-heading text-3xl md:text-4xl text-white">
                {watch_live.stream.offline_headline}
              </motion.h2>
            </motion.div>

            {/* Player frame */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="relative w-full rounded-2xl overflow-hidden border border-white/10 bg-black/40"
              style={{ aspectRatio: '16 / 9' }}
            >
              {/* Offline state — replace with <iframe> embed when stream is live */}
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 p-8 text-center">
                {/* decorative glow */}
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
                </div>

                <div className="relative w-20 h-20 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center">
                  <Radio className="w-9 h-9 text-primary" />
                </div>

                <div className="relative">
                  <h3 className="font-heading text-2xl md:text-3xl text-white mb-3">
                    {watch_live.stream.offline_headline}
                  </h3>
                  <p className="text-white/60 text-base max-w-md mx-auto mb-8">
                    {watch_live.stream.offline_body}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <a
                      href={watch_live.stream.channel_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 bg-primary text-secondary font-semibold px-7 py-3.5 rounded-full hover:bg-accent transition-colors text-sm"
                    >
                      <Youtube className="w-4 h-4" />
                      {watch_live.stream.channel_label}
                    </a>
                    <a
                      href={watch_live.stream.channel_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 border border-white/20 text-white/80 font-semibold px-7 py-3.5 rounded-full hover:bg-white/10 transition-colors text-sm"
                    >
                      <MessageCircle className="w-4 h-4" />
                      {watch_live.stream.chat_label}
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* YouTube note */}
            <motion.p
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="text-white/40 text-sm text-center mt-5"
            >
              {watch_live.stream.youtube_note}
            </motion.p>
          </div>
        </section>

        {/* ── Service Times ── */}
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
                {watch_live.services.eyebrow}
              </motion.p>
              <motion.h2 variants={fadeUp} className="font-heading text-3xl md:text-4xl text-secondary">
                {watch_live.services.headline}
              </motion.h2>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              {watch_live.services.items.map((svc) => (
                <motion.div
                  key={svc.id}
                  variants={fadeUp}
                  className="bg-card border border-border rounded-2xl p-7 hover:border-primary/40 hover:shadow-lg transition-all group"
                >
                  {/* day badge */}
                  <span
                    className={`inline-block text-xs font-semibold px-3 py-1 rounded-full mb-5 ${dayColors[svc.day] ?? 'bg-primary text-secondary'}`}
                  >
                    {svc.day}
                  </span>

                  {/* time */}
                  <div className="flex items-center gap-2 text-secondary mb-2">
                    <Clock className="w-4 h-4 text-primary shrink-0" />
                    <span className="font-heading text-2xl">{svc.time}</span>
                  </div>

                  <h3 className="font-heading text-lg text-secondary mb-3 group-hover:text-primary transition-colors">
                    {svc.label}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    {svc.description}
                  </p>

                  {/* live indicator */}
                  <div className="flex items-center gap-2 text-xs text-primary font-semibold">
                    <Wifi className="w-3.5 h-3.5" />
                    Streams Live
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* link to full schedule */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="text-center mt-10"
            >
              <Link
                to="/events"
                className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
              >
                <Calendar className="w-4 h-4" />
                View Full Events Calendar
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </section>

        {/* ── How It Works ── */}
        <section className="py-xxl bg-secondary">
          <div className="max-w-content mx-auto px-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
              className="text-center mb-12"
            >
              <motion.p variants={fadeUp} className="text-primary font-semibold tracking-wide uppercase text-sm mb-3">
                {watch_live.howto.eyebrow}
              </motion.p>
              <motion.h2 variants={fadeUp} className="font-heading text-3xl md:text-4xl text-white">
                {watch_live.howto.headline}
              </motion.h2>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {watch_live.howto.items.map((item, i) => (
                <motion.div
                  key={item.id}
                  variants={fadeUp}
                  className="relative text-center"
                >
                  {/* connector line between steps */}
                  {i < watch_live.howto.items.length - 1 && (
                    <div className="hidden md:block absolute top-10 left-[calc(50%+3rem)] right-[calc(-50%+3rem)] h-px bg-white/10" />
                  )}

                  <div className="relative inline-flex w-20 h-20 rounded-full bg-primary/15 border border-primary/30 items-center justify-center text-primary mb-6 mx-auto">
                    {howIcons[i]}
                    <span className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-primary text-secondary text-xs font-bold flex items-center justify-center">
                      {item.step}
                    </span>
                  </div>

                  <h3 className="font-heading text-xl text-white mb-3">{item.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── Prayer CTA ── */}
        <section className="py-xxl bg-muted/50">
          <div className="max-w-content mx-auto px-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
              className="bg-card border border-border rounded-3xl px-8 py-14 md:px-16 text-center relative overflow-hidden"
            >
              {/* gold accent bar */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-primary rounded-b-full" />

              <motion.p variants={fadeUp} className="text-primary font-semibold tracking-wide uppercase text-sm mb-3">
                {watch_live.prayer.eyebrow}
              </motion.p>
              <motion.h2 variants={fadeUp} className="font-heading text-3xl md:text-4xl text-secondary mb-5">
                {watch_live.prayer.headline}
              </motion.h2>
              <motion.p variants={fadeUp} className="text-muted-foreground text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
                {watch_live.prayer.body}
              </motion.p>
              <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/prayer"
                  className="inline-flex items-center justify-center gap-2 bg-secondary text-white font-semibold px-8 py-4 rounded-full hover:bg-secondary/80 transition-colors"
                >
                  {watch_live.prayer.cta_primary}
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/teachings"
                  className="inline-flex items-center justify-center gap-2 border border-secondary/30 text-secondary font-semibold px-8 py-4 rounded-full hover:bg-secondary/5 transition-colors"
                >
                  {watch_live.prayer.cta_secondary}
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ── Prayer & Connection Form ── */}
        <section className="py-xxl bg-background">
          <div className="max-w-content mx-auto px-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
              className="max-w-2xl mx-auto"
            >
              {/* heading */}
              <motion.div variants={fadeUp} className="text-center mb-xl">
                <span className="inline-flex items-center gap-2 text-primary font-semibold text-sm mb-4">
                  <Heart className="w-4 h-4" />
                  Prayer &amp; Connection
                </span>
                <h2 className="font-heading text-3xl md:text-4xl text-secondary mb-4">
                  We'd Love to Hear From You
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Whether you have a prayer request, need spiritual guidance, or simply want to connect with our ministry — reach out. We are here for you.
                </p>
              </motion.div>

              {/* form card */}
              <motion.div variants={fadeUp} className="bg-card border border-border rounded-2xl p-8 shadow-sm">
                <WatchLivePrayerForm />
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
}
