import { Helmet } from "react-helmet";
import { useLanguage } from "@/context/LanguageContext";
import { images } from "@/data/images";

// src/pages/ProfileTheo.jsx


export default function ProfileTheo() {
  const { t } = useLanguage();

  return (
    <main className="min-h-screen bg-[#071018] text-white">

      <section className="container mx-auto px-6 py-24">

        <div className="mb-8">
          <a
            href="/"
            className="text-emerald-400 hover:text-emerald-300"
          >
            ← Preaumate
          </a>
        </div>

        <div className="grid lg:grid-cols-[320px_1fr] gap-16">

          {/* PHOTO */}

          <div>
            {/*}
            <img
              src={images.theoProfile}
              alt="Theo Rietveld"
              className="rounded-3xl border border-slate-800 w-full"
            /> */}

            <div className="mt-8 rounded-2xl border border-slate-800 p-6">

              <div className="text-slate-400 mb-2">
                Experience
              </div>

              <div className="font-semibold text-xl">
                20+ Years
              </div>

              <hr className="my-5 border-slate-800" />

              <div className="text-slate-400 mb-2">
                Languages
              </div>

              <div>Dutch</div>
              <div>English</div>
              <div>Spanish</div>
              <div>German</div>

            </div>

          </div>

          {/* CONTENT */}

          <div>

            <div className="inline-flex px-4 py-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-300 text-sm mb-6">
              Founder Profile
            </div>

            <h1 className="text-5xl font-bold mb-4">
              Theo Rietveld
            </h1>

            <p className="text-emerald-400 text-xl mb-8">
              Founder & Automation Engineer
            </p>

            <p className="text-xl text-slate-300 leading-relaxed mb-12">
              Helping manufacturers modernize industrial systems through
              automation, software integration, industrial IoT and practical AI solutions.
            </p>

            <div className="prose prose-invert max-w-none">

              <h2>Professional Profile</h2>

              <p>
                With more than 20 years of experience in industrial automation,
                software development, commissioning and project management,
                Theo has successfully delivered projects across manufacturing,
                food processing, maritime and industrial environments.
              </p>

              <p>
                His experience bridges industrial control systems,
                software engineering, industrial networking and modern
                data integration technologies.
              </p>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}
