import SnapDemo from "./components/SnapDemo";

const painPoints = [
  {
    title: "UI clutter, every time",
    body:
      "Sidebars, “Who to follow,” promoted posts, and scrollbars ride along in every native screenshot. You end up cropping around the platform instead of the post.",
  },
  {
    title: "Threads don't stitch",
    body:
      "A three-part thread means three screenshots and a fight with Figma to line them up. It rarely looks like one continuous read.",
  },
  {
    title: "Five minutes for a two-second idea",
    body:
      "Screenshot, crop, drag into a design tool, add a background, round the corners, export. By the time it's done, the moment has passed.",
  },
];

const steps = [
  {
    frame: "01",
    title: "Snap",
    body: "A button sits next to every post on your timeline. Click it on a single tweet or the first post in a thread.",
  },
  {
    frame: "02",
    title: "Style",
    body: "Pick a background, adjust padding, switch light or dark, toggle your watermark — all in the popup, all instant.",
  },
  {
    frame: "03",
    title: "Save",
    body: "Export a high-resolution PNG, or leave it in your local gallery to grab later. No account, no upload.",
  },
];

const comparisonRows = [
  {
    label: "Where you start",
    xthreadshot: "✅ Right on the timeline",
    others: "❌ Copy link, open new tab, paste",
  },
  {
    label: "Thread capture",
    xthreadshot: "✅ Full thread, stitched automatically",
    others: "❌ One post at a time",
  },
  // {
  //   label: "Thread trimming",
  //   xthreadshot: "✅ Choose to see only last messages",
  //   others: "❌ Manual cropping required",
  // },
  {
    label: "Where it renders",
    xthreadshot: "✅ Locally, in your browser",
    others: "❌ Uploaded to a server",
  },
  {
    label: "Past snaps",
    xthreadshot: "✅ Saved to a local gallery",
    others: "❌ Gone after download",
  },
  {
    label: "Typical time per post",
    xthreadshot: "✅ ~3 seconds",
    others: "❌ 2–5 minutes",
  },
];

const features = [
  {
    frame: "01",
    title: "One-click snapping",
    body: "A native button injected into the X interface — no copying URLs.",
  },
  {
    frame: "02",
    title: "Beautiful styling",
    body: "Curated backgrounds, light & dark themes, and adjustable padding.",
  },
  {
    frame: "03",
    title: "Thread trimming",
    body: "Long thread? Choose to see only the last few messages for a cleaner snap.",
  },
  {
    frame: "04",
    title: "Toggleable watermark",
    body: "A subtle credit you can switch on or off per snap.",
  },
  {
    frame: "05",
    title: "High-res export",
    body: "Pixel-perfect PNGs sized for LinkedIn, Instagram, and blog embeds.",
  },
  {
    frame: "06",
    title: "Local-only history",
    body: "Every snap is saved to your device, searchable weeks later.",
  },
];

const audiences = [
  "Founders & indie hackers",
  "Marketers & social managers",
  "Newsletter writers",
  "Researchers & archivists",
];

const testimonials = [
  {
    name: "Sarah Jenks",
    handle: "@sarahjenks",
    body: "XThreadShot has completely changed how I share tweets on LinkedIn. It takes 2 seconds and looks incredibly professional. Must have extension!",
    avatar: "https://i.pravatar.cc/150?u=meloni"
  },
  {
    name: "David Chen",
    handle: "@davidchen_dev",
    body: "Finally, a tool that actually stitches threads together. Absolutely brilliant execution.",
    avatar: "https://i.pravatar.cc/150?u=fucking"
  },
  {
    name: "Alex Rivera",
    handle: "@arivera_growth",
    body: "I was manually cropping screenshots for my newsletter every week. This just saved me hours of tedious work. 10/10.",
    avatar: "https://i.pravatar.cc/150?u=systematic"
  }
];

const faqs = [
  {
    q: "Do you store my tweets or data?",
    a: "Absolutely not. All processing happens entirely locally on your device in your browser. We don't have servers that store your data."
  },
  {
    q: "Does it work on Safari or mobile?",
    a: "Currently, XThreadShot is only available as a Chrome & Edge Extension for desktop."
  },
  {
    q: "Can I customize the background?",
    a: "Yes, you can choose from beautiful curated gradients, solid colors, or even transparent PNGs."
  }
];

export default function Home() {
  return (
    <main className="flex flex-col">
      {/* NAV */}
      <header className="sticky top-0 z-50 border-b border-hair bg-ink/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#top" className="flex items-center gap-2">
            <img src="/icons/logo.svg" alt="XThreadShot Logo" width="28" height="28" className="rounded-lg shadow-sm" />
            <span className="font-body text-xl font-bold tracking-tight text-paper">
              XThread<span className="text-amber">Shot</span>
            </span>
          </a>
          <nav className="hidden items-center gap-8 text-sm text-paper-dim md:flex">
            <a href="#problem" className="hover:text-paper transition-colors">The problem</a>
            <a href="#how" className="hover:text-paper transition-colors">How it works</a>
            <a href="#features" className="hover:text-paper transition-colors">Features</a>
            <a href="#compare" className="hover:text-paper transition-colors">Comparison</a>
          </nav>
          <a
            href="#cta"
            className="rounded-full bg-amber px-4 py-2 text-sm font-semibold text-white transition-transform hover:scale-[1.03]"
          >
            Add to Chrome
          </a>
        </div>
      </header>

      {/* HERO */}
      <section id="top" className="relative overflow-hidden">
        <div className="mx-auto grid max-w-6xl gap-14 px-6 pb-16 pt-16 md:grid-cols-2 md:items-center md:pt-24">
          <div>
            <p className="eyebrow mb-5 text-amber">Chrome extension · for X (Twitter)</p>
            <h1 className="font-display text-balance text-[2.75rem] leading-[1.05] tracking-tight text-paper sm:text-6xl">
               Capture X(Twitter) posts and threads instantly
            </h1>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-paper-dim">
              One click turns a thread into a clean,
              on-brand image
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#cta"
                className="rounded-full bg-amber px-6 py-3 text-sm font-semibold text-white shadow-[0_0_0_1px_rgba(0,0,0,0.05)] transition-transform hover:scale-[1.03]"
              >
                Add to Chrome — it&apos;s free
              </a>
              <a
                href="#how"
                className="text-sm font-medium text-paper-dim underline decoration-hair underline-offset-4 hover:text-paper"
              >
                See how it works
              </a>
            </div>
            <div className="mt-10 flex flex-wrap gap-x-10 gap-y-4 text-xs text-paper-dim">
              <span className="eyebrow text-paper-dim">No account needed</span>
              <span className="eyebrow text-paper-dim">Full-thread capture</span>
               <span className="eyebrow text-paper-dim">Thread Customization</span>  
            </div>
            <div className="mt-10 flex items-center gap-4 border-t border-hair pt-6">
              {/* <div className="flex -space-x-2">
                <div className="h-8 w-8 rounded-full border-2 border-ink bg-amber-soft/20 flex items-center justify-center text-xs">👨‍💻</div>
                <div className="h-8 w-8 rounded-full border-2 border-ink bg-mint/20 flex items-center justify-center text-xs">👩‍🎨</div>
                <div className="h-8 w-8 rounded-full border-2 border-ink bg-ember/20 flex items-center justify-center text-xs">📈</div>
                <div className="h-8 w-8 rounded-full border-2 border-ink bg-amber/20 flex items-center justify-center text-xs">✍️</div>
              </div> */}
              <div className="text-sm text-paper-dim">
                <span className="font-semibold text-paper">1,000+</span> creators already use XThreadShot
              </div>
            </div>
          </div>
          <SnapDemo />
        </div>
        <div className="sprockets" aria-hidden="true" />
      </section>

      {/* PROBLEM */}
      <section id="problem" className="bg-ink-soft">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="eyebrow text-ember">The pain it solves</p>
          <h2 className="mt-3 max-w-xl font-display text-3xl leading-tight text-paper sm:text-4xl">
            Screenshots weren&apos;t built for people who publish.
          </h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {painPoints.map((p) => (
              <div key={p.title} className="rounded-2xl border border-hair bg-panel p-6">
                <p className="tick-strike eyebrow inline-block text-paper-dim">
                  contact print, reject
                </p>
                <h3 className="mt-4 font-display text-xl text-paper">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-paper-dim">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how" className="relative">
        <div className="sprockets" aria-hidden="true" />
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="eyebrow text-mint">How it works</p>
          <h2 className="mt-3 max-w-xl font-display text-3xl leading-tight text-paper sm:text-4xl">
            Three frames, start to finish.
          </h2>
          <div className="mt-12 grid gap-10 md:grid-cols-3">
            {steps.map((s, i) => (
              <div key={s.frame} className="relative">
                <div className="font-mono text-6xl font-light text-panel-2" style={{ WebkitTextStroke: "1px var(--hair-strong)" }}>
                  {s.frame}
                </div>
                <h3 className="mt-2 font-display text-2xl text-paper">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-paper-dim">{s.body}</p>
                {i < steps.length - 1 && (
                  <div className="mt-6 hidden h-px w-full bg-hair md:block" aria-hidden="true" />
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="sprockets" aria-hidden="true" />
      </section>

      {/* COMPARISON */}
      <section id="compare" className="bg-ink-soft">
        <div className="mx-auto max-w-4xl px-6 py-20">
          <p className="eyebrow text-amber">Spec sheet</p>
          <h2 className="mt-3 font-display text-3xl leading-tight text-paper sm:text-4xl">
            XThreadShot vs. the copy-paste-crop routine.
          </h2>
          <div className="mt-10 overflow-hidden rounded-2xl border border-hair">
            <div className="grid grid-cols-[1fr_1fr_1fr] bg-panel-2 text-xs text-paper-dim">
              <div className="eyebrow px-5 py-3">Spec</div>
              <div className="eyebrow px-5 py-3 text-amber">XThreadShot</div>
              <div className="eyebrow px-5 py-3">Other tools</div>
            </div>
            {comparisonRows.map((row, i) => (
              <div
                key={row.label}
                className={`grid grid-cols-[1fr_1fr_1fr] border-t border-hair text-sm ${i % 2 === 0 ? "bg-panel" : "bg-ink-soft"
                  }`}
              >
                <div className="px-5 py-4 text-paper-dim">{row.label}</div>
                <div className="px-5 py-4 font-medium text-paper">{row.xthreadshot}</div>
                <div className="px-5 py-4 text-paper-dim">{row.others}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="relative">
        <div className="sprockets" aria-hidden="true" />
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="eyebrow text-mint">Contact sheet</p>
          <h2 className="mt-3 max-w-xl font-display text-3xl leading-tight text-paper sm:text-4xl">
            Six exposures worth keeping.
          </h2>
          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-hair bg-hair sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <div key={f.frame} className="bg-panel p-6">
                <span className="eyebrow text-paper-dim">Fr. {f.frame}</span>
                <h3 className="mt-3 font-display text-lg text-paper">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-paper-dim">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AUDIENCE */}
      <section className="bg-ink-soft">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="eyebrow text-amber">Who it&apos;s for</p>
          <h2 className="mt-3 max-w-xl font-display text-3xl leading-tight text-paper sm:text-4xl">
            Built for people who repurpose good tweets.
          </h2>
          <div className="mt-10 flex flex-wrap gap-3">
            {audiences.map((a) => (
              <span
                key={a}
                className="rounded-full border border-hair bg-panel px-5 py-2.5 text-sm text-paper"
              >
                {a}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* WALL OF LOVE */}
      <section className="relative">
        <div className="sprockets" aria-hidden="true" />
        <div className="mx-auto max-w-6xl px-6 py-20">
          <p className="eyebrow text-mint text-center block">Wall of Love</p>
          <h2 className="mt-3 font-display text-3xl leading-tight text-paper sm:text-4xl text-center">
            Loved by creators and founders.
          </h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <div key={t.handle} className="rounded-2xl border border-hair bg-panel p-6 shadow-sm">
                <div className="flex items-center gap-3 mb-4">
                  <img src={t.avatar} alt={t.name} className="h-10 w-10 shrink-0 rounded-full object-cover border border-hair" />
                  <div>
                    <p className="text-sm font-semibold text-paper">{t.name}</p>
                    <p className="text-xs text-paper-dim">{t.handle}</p>
                  </div>
                </div>
                <p className="text-sm leading-relaxed text-paper-dim">&quot;{t.body}&quot;</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-ink-soft">
        <div className="mx-auto max-w-3xl px-6 py-20">
          <p className="eyebrow text-amber text-center block">FAQ</p>
          <h2 className="mt-3 font-display text-3xl leading-tight text-paper sm:text-4xl text-center mb-12">
            Common questions.
          </h2>
          <div className="flex flex-col gap-4">
            {faqs.map((faq) => (
              <details key={faq.q} className="group rounded-2xl border border-hair bg-panel px-6 py-4 [&_summary::-webkit-details-marker]:hidden">
                <summary className="flex cursor-pointer items-center justify-between gap-4 font-semibold text-paper">
                  {faq.q}
                  <span className="transition-transform group-open:rotate-45 text-amber text-xl">+</span>
                </summary>
                <p className="mt-4 text-sm leading-relaxed text-paper-dim pb-2">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section id="cta" className="relative overflow-hidden">
        <div className="mx-auto max-w-3xl px-6 py-24 text-center">
          <div className="drift mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full border border-amber/40">
            <span className="h-3 w-3 rounded-full bg-amber" />
          </div>
          <h2 className="font-display text-balance text-4xl leading-tight text-paper sm:text-5xl">
            Stop stitching screenshots together.
          </h2>
          <p className="mx-auto mt-5 max-w-md text-paper-dim">
            Install XThreadShot, open your timeline, and snap your next post
            before you finish reading it.
          </p>
          <a
            href="#"
            className="mt-8 inline-block rounded-full bg-amber px-8 py-4 text-sm font-semibold text-white transition-transform hover:scale-[1.03]"
          >
            Add to Chrome — it&apos;s free
          </a>
          <p className="mt-4 text-xs text-paper-dim">
            All processing happens on your device. Nothing is uploaded.
          </p>
        </div>
        <div className="sprockets" aria-hidden="true" />
      </section>

      {/* FOOTER */}
      <footer className="mx-auto w-full max-w-6xl px-6 py-10">
        <div className="flex flex-col items-center justify-between gap-4 text-xs text-paper-dim sm:flex-row">
          <span>© {new Date().getFullYear()} XThreadShot. Not affiliated with X Corp.</span>
          <div className="flex gap-6">
            <a href="#" className="hover:text-paper">Privacy</a>
            <a href="#" className="hover:text-paper">Support</a>
            <a href="#" className="hover:text-paper">Changelog</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
