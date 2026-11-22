import { useState, type FormEvent } from 'react';
import { Helmet } from '@dr.pogodin/react-helmet';
import { Link } from 'react-router';
import { motion } from 'motion/react';
import { ArrowRight, Heart, Mail } from 'lucide-react';
import { prayer } from 'virtual:content';

type FormStatus = 'idle' | 'sending' | 'success' | 'error';

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' as const } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

export default function PrayerPage() {
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    if (formData.get('_gotcha')) return;

    const name = String(formData.get('name') ?? '').trim();
    const email = String(formData.get('email') ?? '').trim();
    const prayerType = String(formData.get('prayerType') ?? '');
    const isPrivate = formData.get('private') ? 'Yes' : 'No';
    const request = String(formData.get('request') ?? '').trim();

    setStatus('sending');
    setErrorMsg('');

    try {
      const res = await fetch('/api/contact/prayer-request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          conversation: {
            messages_attributes: [{ body: request || 'New prayer request submission' }],
            data: {
              __gd_contact_form_title: 'Prayer Request',
              'Type of Prayer': prayerType,
              'Keep Private': isPrivate,
            },
          },
          user: { email, name },
        }),
      });

      const json = await res.json();
      if (json.success) {
        setStatus('success');
        form.reset();
      } else {
        throw new Error(json.error || 'Something went wrong.');
      }
    } catch (err) {
      setStatus('error');
      setErrorMsg(err instanceof Error ? err.message : 'Something went wrong. Please try again.');
    }
  }

  return (
    <>
      <Helmet>
        <title>Prayer & Connection — Illumination Global Ministries</title>
        <meta name="description" content="Submit a prayer request to Illumination Global Ministries. Our team will stand in agreement with you and lift you up before the Lord." />
        <meta property="og:title" content="Prayer & Connection — Illumination Global Ministries" />
        <meta property="og:description" content="We'd love to pray with you. Submit a prayer request today." />
        <meta property="og:type" content="website" />
      </Helmet>

      <main>
        {/* HERO */}
        <section className="relative py-32 lg:py-44 flex items-center justify-center overflow-hidden bg-[hsl(var(--secondary))]">
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full pointer-events-none"
            style={{ background: 'radial-gradient(ellipse at center, hsl(var(--primary) / 0.15) 0%, transparent 70%)' }}
          />
          <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="w-16 h-16 rounded-full bg-[hsl(var(--primary))]/15 border border-[hsl(var(--primary))]/30 flex items-center justify-center mx-auto mb-6"
            >
              <Heart size={28} className="text-[hsl(var(--primary))]" />
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="text-[hsl(var(--primary))] text-xs font-semibold uppercase tracking-widest mb-4"
            >
              {prayer.hero.eyebrow}
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
              className="font-heading text-4xl md:text-6xl font-bold text-white leading-tight mb-6"
            >
              {prayer.hero.headline}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="text-white/70 text-lg leading-relaxed max-w-xl mx-auto"
            >
              {prayer.hero.subheadline}
            </motion.p>
          </div>
        </section>

        {/* SCRIPTURE PULL QUOTE */}
        <section className="py-12 bg-[hsl(var(--primary))]">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="font-heading text-xl md:text-2xl font-semibold text-[hsl(var(--secondary))] italic leading-relaxed"
            >
              {prayer.intro.quote}
            </motion.p>
            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-[hsl(var(--secondary))]/60 text-sm mt-3 font-medium"
            >
              {prayer.intro.reference}
            </motion.p>
          </div>
        </section>

        {/* PRAYER FORM */}
        <section className="py-24 lg:py-32 bg-[hsl(var(--background))]">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-start">

              {/* Left: intro copy */}
              <motion.div
                variants={stagger}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="lg:col-span-2 flex flex-col gap-6 lg:sticky lg:top-28"
              >
                <motion.p variants={fadeUp} className="text-[hsl(var(--primary))] text-sm font-semibold uppercase tracking-widest">
                  {prayer.form.eyebrow}
                </motion.p>
                <motion.h2 variants={fadeUp} className="font-heading text-4xl lg:text-5xl font-bold text-[hsl(var(--secondary))] leading-tight">
                  {prayer.form.headline}
                </motion.h2>
                <motion.div variants={fadeUp} className="w-16 h-1 bg-[hsl(var(--primary))] rounded-full" />
                <motion.p variants={fadeUp} className="text-[hsl(var(--foreground))]/65 text-lg leading-relaxed">
                  {prayer.form.body}
                </motion.p>

                {/* Trust signals */}
                <motion.div variants={fadeUp} className="flex flex-col gap-3 pt-2">
                  {['Held in confidence', 'Prayed over by our team', 'No request too small'].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-[hsl(var(--primary))]/15 flex items-center justify-center shrink-0">
                        <div className="w-2 h-2 rounded-full bg-[hsl(var(--primary))]" />
                      </div>
                      <span className="text-[hsl(var(--foreground))]/70 text-sm">{item}</span>
                    </div>
                  ))}
                </motion.div>
              </motion.div>

              {/* Right: form */}
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="lg:col-span-3"
              >
                {status === 'success' ? (
                  <div className="bg-[hsl(var(--card))] rounded-3xl p-10 border border-[hsl(var(--border))] text-center flex flex-col items-center gap-5">
                    <div className="w-20 h-20 rounded-full bg-[hsl(var(--primary))]/15 border border-[hsl(var(--primary))]/30 flex items-center justify-center">
                      <Heart size={36} className="text-[hsl(var(--primary))]" />
                    </div>
                    <h3 className="font-heading text-3xl font-bold text-[hsl(var(--secondary))]" role="status">
                      {prayer.form.fields.success}
                    </h3>
                    <p className="text-[hsl(var(--foreground))]/65 text-lg leading-relaxed max-w-md">
                      {prayer.form.fields.successBody}
                    </p>
                    <button
                      onClick={() => setStatus('idle')}
                      className="mt-2 inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[hsl(var(--secondary))]/30 text-[hsl(var(--secondary))] text-sm font-medium hover:border-[hsl(var(--primary))] hover:text-[hsl(var(--primary))] transition-all duration-200"
                    >
                      Submit another request
                    </button>
                  </div>
                ) : (
                  <form
                    onSubmit={handleSubmit}
                    className="bg-[hsl(var(--card))] rounded-3xl p-8 lg:p-10 border border-[hsl(var(--border))] shadow-sm flex flex-col gap-6"
                  >
                    {/* Honeypot */}
                    <input
                      type="text"
                      name="_gotcha"
                      tabIndex={-1}
                      autoComplete="off"
                      style={{ position: 'absolute', left: '-9999px' }}
                      aria-hidden="true"
                    />

                    {/* Name + Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="flex flex-col gap-2">
                        <label htmlFor="name" className="text-sm font-semibold text-[hsl(var(--foreground))]/80">
                          {prayer.form.fields.name} <span className="text-[hsl(var(--primary))]">*</span>
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          required
                          placeholder="Your full name"
                          className="w-full px-4 py-3 rounded-xl border border-[hsl(var(--border))] bg-[hsl(var(--background))] text-[hsl(var(--foreground))] text-sm placeholder:text-[hsl(var(--foreground))]/35 focus:outline-none focus:ring-2 focus:ring-[hsl(var(--primary))]/40 focus:border-[hsl(var(--primary))]/60 transition-all duration-200"
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label htmlFor="email" className="text-sm font-semibold text-[hsl(var(--foreground))]/80">
                          {prayer.form.fields.email} <span className="text-[hsl(var(--primary))]">*</span>
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          placeholder="you@example.com"
                          className="w-full px-4 py-3 rounded-xl border border-[hsl(var(--border))] bg-[hsl(var(--background))] text-[hsl(var(--foreground))] text-sm placeholder:text-[hsl(var(--foreground))]/35 focus:outline-none focus:ring-2 focus:ring-[hsl(var(--primary))]/40 focus:border-[hsl(var(--primary))]/60 transition-all duration-200"
                        />
                      </div>
                    </div>

                    {/* Prayer type */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="prayerType" className="text-sm font-semibold text-[hsl(var(--foreground))]/80">
                        {prayer.form.fields.prayerType}
                      </label>
                      <select
                        id="prayerType"
                        name="prayerType"
                        className="w-full px-4 py-3 rounded-xl border border-[hsl(var(--border))] bg-[hsl(var(--background))] text-[hsl(var(--foreground))] text-sm focus:outline-none focus:ring-2 focus:ring-[hsl(var(--primary))]/40 focus:border-[hsl(var(--primary))]/60 transition-all duration-200"
                      >
                        {prayer.form.fields.prayerTypeOptions.map((opt) => (
                          <option key={opt} value={opt}>{opt}</option>
                        ))}
                      </select>
                    </div>

                    {/* Prayer request */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="request" className="text-sm font-semibold text-[hsl(var(--foreground))]/80">
                        {prayer.form.fields.request} <span className="text-[hsl(var(--primary))]">*</span>
                      </label>
                      <textarea
                        id="request"
                        name="request"
                        rows={5}
                        required
                        placeholder="Share what's on your heart…"
                        className="w-full px-4 py-3 rounded-xl border border-[hsl(var(--border))] bg-[hsl(var(--background))] text-[hsl(var(--foreground))] text-sm placeholder:text-[hsl(var(--foreground))]/35 focus:outline-none focus:ring-2 focus:ring-[hsl(var(--primary))]/40 focus:border-[hsl(var(--primary))]/60 transition-all duration-200 resize-none"
                      />
                    </div>

                    {/* Private checkbox */}
                    <label className="flex items-center gap-3 cursor-pointer group">
                      <input
                        type="checkbox"
                        name="private"
                        className="w-4 h-4 rounded border-[hsl(var(--border))] accent-[hsl(var(--primary))]"
                      />
                      <span className="text-sm text-[hsl(var(--foreground))]/65 group-hover:text-[hsl(var(--foreground))]/80 transition-colors">
                        {prayer.form.fields.private}
                      </span>
                    </label>

                    {/* Error */}
                    {status === 'error' && (
                      <p role="alert" className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-xl px-4 py-3">
                        {errorMsg}
                      </p>
                    )}

                    {/* Submit */}
                    <button
                      type="submit"
                      disabled={status === 'sending'}
                      className="w-full py-4 rounded-full bg-[hsl(var(--secondary))] text-white font-semibold text-base hover:bg-[hsl(var(--secondary))]/80 disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-300 shadow-lg flex items-center justify-center gap-2"
                    >
                      {status === 'sending' ? (
                        <>
                          <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                          {prayer.form.fields.sending}
                        </>
                      ) : (
                        <>
                          <Heart size={16} />
                          {prayer.form.fields.submit}
                        </>
                      )}
                    </button>
                  </form>
                )}
              </motion.div>
            </div>
          </div>
        </section>

        {/* CONNECT SECTION */}
        <section className="py-24 lg:py-32 bg-[hsl(var(--secondary))]">
          <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center">
            <motion.div variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <motion.p variants={fadeUp} className="text-[hsl(var(--primary))] text-sm font-semibold uppercase tracking-widest mb-4">
                {prayer.connect.eyebrow}
              </motion.p>
              <motion.h2 variants={fadeUp} className="font-heading text-4xl lg:text-5xl font-bold text-white mb-5">
                {prayer.connect.headline}
              </motion.h2>
              <motion.div variants={fadeUp} className="w-16 h-1 bg-[hsl(var(--primary))] rounded-full mx-auto mb-6" />
              <motion.p variants={fadeUp} className="text-white/65 text-lg leading-relaxed max-w-xl mx-auto mb-4">
                {prayer.connect.body}
              </motion.p>
              <motion.a
                variants={fadeUp}
                href={"mailto:" + prayer.connect.email}
                className="inline-flex items-center gap-2 text-[hsl(var(--primary))] text-sm font-medium hover:underline mb-10"
              >
                <Mail size={14} />
                {prayer.connect.email}
              </motion.a>
              <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6">
                <Link
                  to="/events"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[hsl(var(--primary))] text-[hsl(var(--secondary))] font-semibold hover:bg-[hsl(var(--accent))] transition-colors duration-300 shadow-lg"
                >
                  {prayer.connect.watchCta} <ArrowRight size={16} />
                </Link>
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-white/30 text-white font-medium hover:border-[hsl(var(--primary))] hover:text-[hsl(var(--primary))] transition-all duration-300"
                >
                  {prayer.connect.aboutCta}
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
}
