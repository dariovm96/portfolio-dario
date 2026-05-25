import { motion } from "framer-motion";
import { getStaggerContainer, getItemReveal, getCardInteract } from "../motion/variants";
import { useMotionPrefs } from "../motion/useMotionPrefs";
import SectionShell from "./ui/SectionShell";
import MetaLabel from "./ui/MetaLabel";
import { useLanguage } from "../contexts/LanguageContext";

function Education({ data }) {
  const { content } = useLanguage();
  const { reduce, canHoverMotion } = useMotionPrefs();
  const ui = content?.ui?.education ?? {};
  const degreeItems = Array.isArray(data?.degrees) ? data.degrees : [];
  const certificationItems = Array.isArray(data?.certifications) ? data.certifications : [];
  const courseItems = Array.isArray(data?.courses) ? data.courses : [];

  const containerMotion = getStaggerContainer(reduce);

  return (
    <SectionShell id="education" labelledBy="education-heading" title={null} tone="base">
      <header className="mb-8">
        <h2
          id="education-heading"
          className="text-3xl font-headline font-semibold leading-tight text-on-surface md:text-4xl"
        >
          {ui.sectionTitle ?? "Formación Académica"}
        </h2>
        <div className="mt-1 h-0.5 w-10 rounded-full bg-primary" aria-hidden="true" />
      </header>

      <div className="space-y-8">
        <div>
          <MetaLabel as="h3" className="mb-4 text-outline">
            {ui.degrees ?? "TÍTULOS Y GRADOS"}
          </MetaLabel>
          <motion.div
            className="grid grid-cols-1 justify-items-start gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
            {...containerMotion}
          >
            {degreeItems.map((item, index) => (
              <motion.div key={`${item.title}-${item.period}`} {...getItemReveal(reduce, index * 0.05)}>
                <DegreeCard item={item} reduce={reduce} canHoverMotion={canHoverMotion} />
              </motion.div>
            ))}
          </motion.div>
        </div>

        <hr
          data-testid="education-subsection-divider"
          className="border-0 border-t border-outline-variant/30"
        />

        <div>
          <MetaLabel as="h3" className="mb-4 text-outline">
            {ui.certsAndCourses ?? "CERTIFICACIONES & CURSOS"}
          </MetaLabel>

          <div className="space-y-6">
            <div>
              <MetaLabel as="h4" className="mb-3 text-outline">
                {ui.certifications ?? "CERTIFICACIONES"}
              </MetaLabel>
              <motion.div
                className="grid grid-cols-1 justify-items-start gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
                {...containerMotion}
              >
                {certificationItems.map((item, index) => (
                  <motion.div key={`${item.title}-${item.period}`} {...getItemReveal(reduce, index * 0.05)}>
                    <CertCourseCard item={item} accent="green" ui={ui} reduce={reduce} />
                  </motion.div>
                ))}
              </motion.div>
            </div>

            <div>
              <MetaLabel as="h4" className="mb-3 text-outline">
                {ui.courses ?? "CURSOS"}
              </MetaLabel>
              <motion.div
                className="grid grid-cols-1 justify-items-start gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
                {...containerMotion}
              >
                {courseItems.map((item, index) => (
                  <motion.div key={`${item.title}-${item.period}`} {...getItemReveal(reduce, index * 0.05)}>
                    <CertCourseCard item={item} accent="purple" ui={ui} reduce={reduce} />
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}

function DegreeCard({ item, reduce, canHoverMotion }) {
  const institutionAbbr = getInstitutionAbbreviation(item?.institution);

  return (
    <motion.article
      className="group card-ghost-edge flex min-h-[16rem] w-full max-w-[420px] flex-col gap-3 rounded-xl border border-[#6bff8f44] border-l-[3px] border-l-[#6bff8f] bg-surface-container-low p-5 shadow-[0_12px_24px_rgba(0,0,0,0.24)] transition-colors hover:border-[#6bff8f66] hover:border-l-[#6bff8f]"
      data-testid="education-degree-card"
      {...getCardInteract(reduce, canHoverMotion)}
    >
      <div className="flex items-start gap-3">
        <div
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-[#6bff8f44] bg-surface-container-high text-2xl"
          aria-hidden="true"
        >
          <span>{item?.icon ?? "🎓"}</span>
        </div>
        <div>
          <MetaLabel className="mb-1 inline-flex rounded-full border border-[#6bff8f55] bg-[#6bff8f22] px-2 py-0.5 text-xs tracking-[0.08em] text-[#6bff8f]">
            {item?.typeBadge}
          </MetaLabel>
          <h4 className="font-body text-base font-semibold leading-snug text-on-surface">{item?.title}</h4>
        </div>
      </div>

      <div className="space-y-1 text-sm text-on-surface-variant">
        <MetaRow accent="green">{item?.institution}</MetaRow>
        <MetaRow accent="green">{item?.period}</MetaRow>
        <MetaRow accent="green">{item?.location}</MetaRow>
      </div>

      <footer className="mt-auto flex items-center justify-between border-t border-outline-variant/30 pt-2.5">
        <span className="inline-flex items-center gap-1 rounded-full border border-[#6bff8f55] bg-[#6bff8f22] px-2 py-1 font-label text-xs uppercase text-[#6bff8f]">
          <span className="h-1.5 w-1.5 rounded-full bg-[#6bff8f]" aria-hidden="true" />
          {item?.status}
        </span>
        <span className="text-xs italic text-outline">{institutionAbbr}</span>
      </footer>
    </motion.article>
  );
}

function CertCourseCard({ item, accent, ui, reduce }) {
  const accentTokens =
    accent === "purple"
      ? {
          border: "border-[#c180ff55]",
          left: "border-l-[#c180ff]",
          iconBorder: "border-[#c180ff44]",
          badge: "border-[#c180ff55] bg-[#c180ff22] text-[#c180ff]",
          dot: "bg-[#c180ff]",
          credentialActive:
            "border-[#c180ff55] bg-[#c180ff11] text-[#c180ff] hover:border-[#c180ff99]",
          glowHover: "0 0 20px rgba(193,128,255,0.12)",
        }
      : {
          border: "border-[#6bff8f55]",
          left: "border-l-[#6bff8f]",
          iconBorder: "border-[#6bff8f44]",
          badge: "border-[#6bff8f55] bg-[#6bff8f22] text-[#6bff8f]",
          dot: "bg-[#6bff8f]",
          credentialActive:
            "border-[#6bff8f55] bg-[#6bff8f11] text-[#6bff8f] hover:border-[#6bff8f99]",
          glowHover: "0 0 20px rgba(107,255,143,0.12)",
        };

  const hasCredential = Boolean(item?.credentialUrl && item.credentialUrl !== "#");

  return (
    <motion.article
      className={`group card-ghost-edge flex min-h-[15rem] w-full max-w-[420px] flex-col gap-3 rounded-xl border ${accentTokens.border} border-l-[3px] ${accentTokens.left} bg-surface-container-low p-5 shadow-[0_12px_24px_rgba(0,0,0,0.24)] transition-colors hover:border-l-[3px]`}
      data-testid={accent === "purple" ? "education-course-card" : "education-certification-card"}
      whileHover={!reduce ? { boxShadow: accentTokens.glowHover } : undefined}
      transition={{ duration: 0.2 }}
    >
      <div className="flex items-start gap-3">
        <div
          className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border bg-surface-container-high text-2xl ${accentTokens.iconBorder}`}
          aria-hidden="true"
        >
          <span>{item?.icon ?? "🏅"}</span>
        </div>
        <div>
          <MetaLabel className={`mb-1 inline-flex rounded-full border px-2 py-0.5 text-xs tracking-[0.08em] ${accentTokens.badge}`}>
            {item?.typeBadge}
          </MetaLabel>
          <h4 className="font-body text-base font-semibold leading-snug text-on-surface">{item?.title}</h4>
        </div>
      </div>

      <div className="space-y-1 text-sm text-on-surface-variant">
        <MetaRow dotClassName={accentTokens.dot}>{item?.entity}</MetaRow>
        <MetaRow dotClassName={accentTokens.dot}>{item?.period}</MetaRow>
      </div>

      <footer className="mt-auto border-t border-outline-variant/30 pt-2.5">
        {hasCredential ? (
          <a
            href={item.credentialUrl}
            target="_blank"
            rel="noreferrer"
            className={`inline-flex items-center gap-1 rounded-md border px-3 py-1.5 font-label text-xs uppercase ${accentTokens.credentialActive}`}
          >
            {ui?.viewCredential ?? "Ver credencial ↗"}
          </a>
        ) : (
          <button
            type="button"
            disabled
            className="inline-flex cursor-default items-center gap-1 rounded-md border border-outline-variant bg-surface-container-high px-3 py-1.5 font-label text-xs uppercase text-outline"
          >
            {ui?.comingSoon ?? "Próximamente"}
          </button>
        )}
      </footer>
    </motion.article>
  );
}

function MetaRow({ children, accent = "green", dotClassName }) {
  const computedDotClassName = dotClassName ?? (accent === "purple" ? "bg-[#c180ff]" : "bg-[#6bff8f]");

  return (
    <p className="flex items-center gap-1.5 font-body">
      <span className={`h-1 w-1 shrink-0 rounded-full ${computedDotClassName}`} aria-hidden="true" />
      <span>{children}</span>
    </p>
  );
}

function getInstitutionAbbreviation(institution = "") {
  const normalized = institution.trim();

  if (normalized.includes("DUOC UC")) {
    return "DUOC UC";
  }

  return normalized;
}

export default Education;
