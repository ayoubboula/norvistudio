export default function App() {
  const services = [
    {
      title: "Product Page Optimization",
      description:
        "We improve product titles, meta descriptions, product copy, structure and image SEO to help your pages rank better and convert more visitors into customers.",
      bullets: [
        "Higher Google visibility",
        "Better product page SEO",
        "Stronger conversion structure",
      ],
    },
    {
      title: "E-commerce Page Design",
      description:
        "We create and improve product pages, landing pages and webshop sections with a clear focus on conversion, clarity and a better customer journey.",
      bullets: [
        "AI-assisted web design",
        "Cleaner page layouts",
        "Better user experience",
      ],
    },
    {
      title: "Audits & Consulting",
      description:
        "We review your webshop and identify practical improvements in SEO, product pages, content and conversion opportunities.",
      bullets: [
        "Store and page audits",
        "Clear action points",
        "Practical growth advice",
      ],
    },
  ];

  const packages = [
    {
      name: "Starter",
      price: "€350",
      detail: "20 products",
      note: "Perfect for smaller stores or a first optimization project.",
    },
    {
      name: "Growth",
      price: "€749.99",
      detail: "50 products",
      note: "A strong fit for growing e-commerce brands.",
    },
    {
      name: "Scale",
      price: "€1499",
      detail: "100 products",
      note: "Built for larger product catalogs and ongoing optimization.",
    },
  ];

  const results = [
    "More sales from better product pages",
    "Higher search rankings in Google",
    "More website visitors through SEO",
    "Better product visibility online",
    "Stronger brand awareness",
    "Improved conversion rates",
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="mx-auto max-w-7xl px-6 py-8 md:px-10 lg:px-12">
        <header className="flex items-center justify-between py-4">
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500 text-base font-bold text-black">
                N
              </div>
              <div>
                <div className="text-xl font-semibold tracking-tight">
                  Norvi Studio
                </div>
                <div className="text-sm text-neutral-400">
                  E-commerce & Digital Consulting
                </div>
              </div>
            </div>
          </div>

          <div className="hidden items-center gap-2 md:flex">
            <button className="rounded-lg border border-white/15 px-3 py-1 text-xs text-white">
              EN
            </button>
            <button className="rounded-lg border border-white/15 px-3 py-1 text-xs text-white">
              NL
            </button>
          </div>
        </header>

        <main>
          <section className="grid gap-12 py-16 md:grid-cols-2 md:items-center md:py-24">
            <div>
              <div className="mb-4 inline-flex rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs uppercase tracking-[0.24em] text-emerald-400">
                Growth through better product pages
              </div>

              <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
                Increase sales, visibility and traffic with stronger product page SEO.
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-7 text-neutral-300 md:text-lg">
                Norvi Studio helps webshops improve SEO, product page quality and
                digital performance. Better optimized pages lead to more Google
                visibility, more website visitors, stronger brand awareness and
                higher conversion rates.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#pricing"
                  className="rounded-2xl bg-emerald-500 px-5 py-3 text-sm font-medium text-black transition hover:bg-emerald-400"
                >
                  View Pricing
                </a>
                <a
                  href="#audit"
                  className="rounded-2xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/10"
                >
                  Get Free Audit
                </a>
              </div>

              <div className="mt-10 grid gap-3 sm:grid-cols-2">
                {results.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-neutral-200"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-4">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl">
                <div className="text-sm text-neutral-400">Why this matters</div>
                <h2 className="mt-3 text-2xl font-medium">
                  Better SEO is not just rankings. It is revenue.
                </h2>
                <p className="mt-4 text-sm leading-7 text-neutral-300">
                  Many webshops lose traffic and sales because product pages are
                  poorly optimized. Missing keywords, weak titles, bad structure and
                  thin content reduce discoverability and conversions.
                </p>

                <div className="mt-6 grid gap-3 text-sm">
                  <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/10 p-4 text-emerald-300">
                    More organic traffic
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-black/20 p-4 text-neutral-200">
                    Better page quality
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-black/20 p-4 text-neutral-200">
                    Higher sales potential
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-black/20 p-4 text-neutral-200">
                    Stronger brand visibility
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="py-12 md:py-20">
            <div className="mb-10 max-w-2xl">
              <div className="text-sm uppercase tracking-[0.24em] text-neutral-400">
                Example
              </div>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
                What optimization can look like
              </h2>
              <p className="mt-4 text-sm leading-7 text-neutral-300">
                A simple example of how a product page can be improved for SEO,
                clarity and conversion.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <div className="text-sm text-neutral-400">Before</div>
                <div className="mt-4 space-y-3 text-sm text-neutral-300">
                  <div>
                    <strong>Title:</strong> Office Chair Black Model X12
                  </div>
                  <div>
                    <strong>Description:</strong> Comfortable office chair with
                    wheels and adjustable height.
                  </div>
                  <div>
                    <strong>SEO:</strong> No meta description, weak keyword usage,
                    low visibility.
                  </div>
                </div>
              </div>

              <div className="rounded-3xl border border-emerald-500/20 bg-emerald-500/10 p-6">
                <div className="text-sm text-emerald-300">After</div>
                <div className="mt-4 space-y-3 text-sm text-neutral-100">
                  <div>
                    <strong>SEO Title:</strong> Ergonomic Office Chair – Adjustable
                    Desk Chair with Lumbar Support
                  </div>
                  <div>
                    <strong>Meta:</strong> Upgrade your workspace with this ergonomic
                    office chair featuring adjustable height and lumbar support.
                  </div>
                  <div>
                    <strong>Result:</strong> Better discoverability, clearer value
                    proposition and stronger conversion potential.
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="py-12 md:py-20" id="services">
            <div className="mb-10 max-w-2xl">
              <div className="text-sm uppercase tracking-[0.24em] text-neutral-400">
                Services
              </div>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
                Focused services for growing e-commerce brands
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {services.map((service) => (
                <div
                  key={service.title}
                  className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl"
                >
                  <h3 className="text-xl font-medium">{service.title}</h3>
                  <p className="mt-4 text-sm leading-6 text-neutral-300">
                    {service.description}
                  </p>

                  <ul className="mt-6 space-y-2 text-sm text-neutral-200">
                    {service.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="rounded-xl border border-white/10 bg-black/20 px-3 py-2"
                      >
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section className="py-12 md:py-20" id="pricing">
            <div className="mb-10 max-w-2xl">
              <div className="text-sm uppercase tracking-[0.24em] text-neutral-400">
                Pricing
              </div>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
                Straightforward starting packages
              </h2>
              <p className="mt-4 text-sm leading-7 text-neutral-300">
                These prices are starting points for product page optimization
                projects. Consulting and design support can be scoped separately.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {packages.map((pkg) => (
                <div
                  key={pkg.name}
                  className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl"
                >
                  <div className="text-sm uppercase tracking-[0.24em] text-neutral-400">
                    {pkg.name}
                  </div>
                  <div className="mt-4 text-4xl font-semibold tracking-tight">
                    {pkg.price}
                  </div>
                  <div className="mt-2 text-neutral-300">{pkg.detail}</div>
                  <p className="mt-6 text-sm leading-6 text-neutral-300">
                    {pkg.note}
                  </p>
                  <div className="mt-6 rounded-2xl border border-emerald-500/20 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-300">
                    Excl. VAT
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="py-12 md:py-20" id="audit">
            <div className="rounded-[2rem] border border-emerald-500/20 bg-emerald-500/10 p-8 shadow-2xl md:p-12">
              <div className="grid gap-8 md:grid-cols-2 md:items-end">
                <div>
                  <div className="text-sm uppercase tracking-[0.24em] text-emerald-300">
                    Free Audit
                  </div>
                  <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
                    Get a free mini product page audit
                  </h2>
                  <p className="mt-4 max-w-xl text-sm leading-7 text-neutral-200">
                    We review a selection of your product pages and point out quick
                    wins that can improve SEO, visibility and conversion.
                  </p>
                </div>

                <div className="grid gap-4 text-sm text-neutral-100">
                  <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                    SEO opportunities
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                    Content and structure improvements
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                    Conversion-focused recommendations
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="py-12 md:py-20" id="contact">
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-2xl md:p-12">
              <div className="grid gap-8 md:grid-cols-2 md:items-end">
                <div>
                  <div className="text-sm uppercase tracking-[0.24em] text-neutral-400">
                    Contact
                  </div>
                  <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">
                    Let’s improve your webshop
                  </h2>
                  <p className="mt-4 max-w-xl text-sm leading-7 text-neutral-300">
                    Looking for better SEO, stronger product pages and more sales
                    potential? Let’s discuss the right setup for your store.
                  </p>
                </div>

                <div className="grid gap-4 text-sm text-neutral-200">
                  <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                    Email: hello@norvistudio.com
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                    LinkedIn: Norvi Studio
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                    Based in the Netherlands · Working remotely
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
