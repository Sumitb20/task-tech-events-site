import React from "react";
import { motion } from "framer-motion";

// TASK TECH EVENTS - Homepage Component
export default function App() {
  return (
    <div className="min-h-screen font-inter text-gray-100 bg-gradient-to-b from-[#05060a] to-[#071226]">
      {/* NAV */}
      <header className="fixed w-full z-40 backdrop-blur-sm bg-black/30 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between h-20">
          <div className="flex items-center gap-4">
            <div className="w-11 h-11 rounded-lg bg-gradient-to-br from-[#0066FF] to-[#00E8D4] flex items-center justify-center shadow-xl">
              <span className="font-bold tracking-tight text-black">T</span>
            </div>
            <div>
              <h1 className="text-xl font-semibold">TASK TECH EVENTS</h1>
              <p className="text-xs text-white/60 -mt-1">Industry Summits · Expos · Award Shows</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a className="hover:text-[#00E8D4] transition">Services</a>
            <a className="hover:text-[#00E8D4] transition">Sectors</a>
            <a className="hover:text-[#00E8D4] transition">Past Events</a>
            <a className="hover:text-[#00E8D4] transition">Partners</a>
            <a className="hover:text-[#00E8D4] transition">Contact</a>
            <button className="ml-4 px-4 py-2 rounded-lg bg-gradient-to-r from-[#0066FF] to-[#003E9B] shadow-lg text-white font-medium">Plan an Event</button>
          </nav>

          <div className="md:hidden">
            <button className="p-2 rounded bg-white/5">Menu</button>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="relative h-screen w-full overflow-hidden">
        <div className="absolute inset-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover brightness-75"
            src="https://assets.mixkit.co/videos/preview/mixkit-conference-audience-3190-large.mp4"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/70" />
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-8 h-full flex items-center">
          <div className="w-full lg:w-3/5 py-24">
            <motion.h2
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.6 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight text-white"
            >
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#00E8D4] via-[#0066FF] to-[#E6B800]">
                Where Industries Meet Innovation
              </span>
              <span className="block mt-2 text-xl font-medium text-white/80">
                Summits, Expos, Product Launches and Award Shows — engineered to scale.
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-6 text-lg text-white/70 max-w-2xl"
            >
              We design unforgettable industry experiences — immersive stages, premium networking,
              and seamless production across global venues. Trusted by enterprise leaders and innovators.
            </motion.p>

            <div className="mt-8 flex gap-4">
              <a className="inline-flex items-center gap-3 px-5 py-3 rounded-lg bg-[#0066FF] hover:brightness-110 shadow-2xl font-semibold">
                Plan an Event
              </a>
              <a className="inline-flex items-center gap-3 px-5 py-3 rounded-lg border border-white/10 text-white/90">
                Sponsorship Enquiry
              </a>
            </div>

            <div className="mt-8 flex items-center gap-6 text-sm text-white/70">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-md bg-white/5 flex items-center justify-center">📈</div>
                <div>
                  <div className="font-semibold">120+</div>
                  <div className="text-xs">Global Events</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-md bg-white/5 flex items-center justify-center">🤝</div>
                <div>
                  <div className="font-semibold">10k+</div>
                  <div className="text-xs">Delegates</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-md bg-white/5 flex items-center justify-center">🏆</div>
                <div>
                  <div className="font-semibold">300+</div>
                  <div className="text-xs">Sponsors & Exhibitors</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right visual */}
          <div className="hidden lg:block lg:w-2/5 pl-12">
            <div className="rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/5 bg-gradient-to-br from-white/5 to-white/3 p-1">
              <div className="relative bg-black rounded-xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=1400&auto=format&fit=crop"
                  alt="expo"
                  className="w-full h-96 object-cover brightness-90"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-0 right-0 flex justify-center z-30">
          <div className="text-white/60 text-xs">Scroll to explore past events & services</div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-2xl font-bold">Our Services</h3>
              <p className="text-white/70 mt-2 max-w-xl">
                End-to-end event production, strategic sponsorships, venue selection,
                content programming, audience acquisition and full onsite execution.
              </p>
            </div>
            <a className="hidden md:inline-flex px-4 py-2 rounded-lg border border-white/10">
              View all services
            </a>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Summits", desc: "Keynotes, panels & executive roundtables", icon: "🎤" },
              { title: "Expos", desc: "Large-scale exhibition halls & booths", icon: "🏢" },
              { title: "Corporate Events", desc: "Townhalls, roadshows & product launches", icon: "🚀" },
              { title: "Community Events", desc: "Meetups, workshops & hackathons", icon: "🤝" },
            ].map((s) => (
              <motion.div key={s.title} whileHover={{ y: -6 }} className="bg-white/3 border border-white/5 rounded-2xl p-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-md bg-gradient-to-br from-[#00E8D4] to-[#0066FF] flex items-center justify-center text-black font-bold">
                    {s.icon}
                  </div>
                  <div>
                    <div className="font-semibold text-lg">{s.title}</div>
                    <div className="text-sm text-white/70 mt-1">{s.desc}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTORS */}
      <section className="py-20 bg-gradient-to-b from-transparent to-black/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h3 className="text-2xl font-bold">Industries We Serve</h3>
          <p className="text-white/70 mt-2 max-w-2xl">
            Tailored event strategies across IT, Healthcare, Pharma, Fintech, Construction, Electronics and Manufacturing.
          </p>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "Information Technology", img: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1600&auto=format&fit=crop" },
              { name: "Healthcare & Pharma", img: "https://images.unsplash.com/photo-1584451296551-0c4de7e3c1b8?q=80&w=1600&auto=format&fit=crop" },
              { name: "Fintech", img: "https://images.unsplash.com/photo-1559526324-593bc073d938?q=80&w=1600&auto=format&fit=crop" },
              { name: "Construction & Manufacturing", img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1600&auto=format&fit=crop" },
              { name: "Electronics & Hardware", img: "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1600&auto=format&fit=crop" },
              { name: "Corporate", img: "https://images.unsplash.com/photo-1523958203904-c5f4f1b0b2d8?q=80&w=1600&auto=format&fit=crop" },
            ].map((sec) => (
              <div key={sec.name} className="relative rounded-2xl overflow-hidden shadow-lg">
                <img
                  src={`${sec.img}&ixlib=rb-4.0.3&s=placeholder`}
                  alt={sec.name}
                  className="w-full h-48 object-cover brightness-75"
                />
                <div className="absolute inset-0 p-6 flex items-end">
                  <div>
                    <div className="text-white font-semibold text-lg">{sec.name}</div>
                    <div className="text-xs text-white/70 mt-1">Custom content, speakers & experiences</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PAST EVENTS */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-bold">Past Events</h3>
            <a className="text-sm text-white/60">View full gallery →</a>
          </div>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div key={i} className="rounded-xl overflow-hidden bg-white/3">
                <img
                  src={`https://images.unsplash.com/photo-1551836022-d5d88e9218df?q=80&w=1400&auto=format&fit=crop&s=placeholder${i}`}
                  alt={`event-${i}`}
                  className="w-full h-44 object-cover"
                />
                <div className="p-4">
                  <div className="font-semibold">Industry Expo {i}</div>
                  <div className="text-xs text-white/60 mt-1">City • {2020 + i}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 bg-gradient-to-t from-black/40 to-transparent">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-bold">Trusted by leaders</h3>
              <p className="text-white/70 mt-2">
                Case studies across enterprise launches, largest expo booths and award ceremonies.
              </p>

              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    quote: "Task Tech delivered a flawless product launch — excellent execution.",
                    name: "Head of Product, FinCorp",
                  },
                  {
                    quote: "Our summit saw 3x engagement. Brilliant team and quality.",
                    name: "VP Marketing, HealthNova",
                  },
                ].map((t, idx) => (
                  <div key={idx} className="bg-white/3 p-6 rounded-xl">
                    <div className="text-white/90 italic">“{t.quote}”</div>
                    <div className="mt-4 font-semibold text-sm text-white/80">{t.name}</div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-white/60">Clients & Partners</h4>
              <div className="mt-4 grid grid-cols-3 gap-4">
                {["Client A", "Client B", "Client C", "Client D", "Client E", "Client F"].map((c) => (
                  <div key={c} className="p-3 bg-white/3 rounded-lg text-center text-xs">
                    {c}
                  </div>
                ))}
              </div>

              <div className="mt-6">
                <button className="px-4 py-3 rounded-lg bg-gradient-to-r from-[#0066FF] to-[#003E9B]">
                  Become a Partner
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 bg-gradient-to-r from-[#003E9B]/30 via-transparent to-[#00E8D4]/10 rounded-2xl p-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold">Ready to build a world-class event?</h3>
              <p className="text-white/70 mt-2">
                Connect with our production team for venue scouting, sponsorship packages and full delivery.
              </p>
            </div>
            <div className="flex gap-4">
              <button className="px-5 py-3 rounded-lg bg-[#00E8D4] text-black font-semibold">
                Request a Proposal
              </button>
              <button className="px-5 py-3 rounded-lg border border-white/10">Contact Sales</button>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black/60 border-t border-white/5 py-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded bg-gradient-to-br from-[#0066FF] to-[#00E8D4] flex items-center justify-center">
                T
              </div>
              <div>
                <div className="font-semibold">TASK TECH EVENTS</div>
                <div className="text-xs text-white/60">Premium event production & management</div>
              </div>
            </div>

            <div className="mt-4 text-sm text-white/60">
              123 Business Avenue, City • contact@tasktech.events • +91 98765 43210
            </div>
          </div>

          <div>
            <div className="font-semibold">Services</div>
            <ul className="mt-3 text-sm text-white/60 space-y-2">
              <li>Summits</li>
              <li>Expos</li>
              <li>Product Launches</li>
              <li>Award Shows</li>
            </ul>
          </div>

          <div>
            <div className="font-semibold">Company</div>
            <ul className="mt-3 text-sm text-white/60 space-y-2">
              <li>About</li>
              <li>Careers</li>
              <li>Newsroom</li>
              <li>Contact</li>
            </ul>
          </div>

          <div>
            <div className="font-semibold">Legal</div>
            <ul className="mt-3 text-sm text-white/60 space-y-2">
              <li>Privacy</li>
              <li>Terms</li>
            </ul>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 mt-8 text-xs text-white/60">
          © {new Date().getFullYear()} TASK TECH EVENTS • All rights reserved
        </div>
      </footer>
    </div>
  );
}
