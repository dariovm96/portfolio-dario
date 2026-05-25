import SectionShell from "./ui/SectionShell";
import MetaLabel from "./ui/MetaLabel";
import { useLanguage } from "../contexts/LanguageContext";

function Education({ data }) {
  const { content } = useLanguage();
  const ui = content?.ui?.education ?? {};
  const degreeItems = Array.isArray(data?.degrees) ? data.degrees : [];
  const certificationItems = Array.isArray(data?.certifications) ? data.certifications : [];
  const courseItems = Array.isArray(data?.courses) ? data.courses : [];

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
          <MetaLabel
            as="h3"
            className="mb-4 text-outline"
          >
            {ui.degrees ?? "TÍTULOS Y GRADOS"}
          </MetaLabel>
          <div className="grid grid-cols-1 justify-items-start gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {degreeItems.map((item) => (
              <DegreeCard key={`${item.title}-${item.period}`} item={item} />
            ))}
          </div>
        </div>

        <hr
          data-testid="education-subsection-divider"
          className="border-0 border-t border-outline-variant/30"
        />

        <div>
          <MetaLabel
            as="h3"
            className="mb-4 text-outline"
          >
            {ui.certsAndCourses ?? "CERTIFICACIONES & CURSOS"}
          </MetaLabel>

          <div className="space-y-6">
            <div>
              <MetaLabel
                as="h4"
                className="mb-3 text-outline"
              >
                {ui.certifications ?? "CERTIFICACIONES"}
              </MetaLabel>
              <div className="grid grid-cols-1 justify-items-start gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {certificationItems.map((item) => (
                  <CertCourseCard
                    key={`${item.title}-${item.period}`}
                    item={item}
                    accent="green"
                    ui={ui}
                  />
                ))}
              </div>
            </div>

            <div>
              <MetaLabel
                as="h4"
                className="mb-3 text-outline"
              >
                {ui.courses ?? "CURSOS"}
              </MetaLabel>
              <div className="grid grid-cols-1 justify-items-start gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {courseItems.map((item) => (
                  <CertCourseCard
                    key={`${item.title}-${item.period}`}
                    item={item}
                    accent="purple"
                    ui={ui}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}

function DegreeCard({ item }) {
  const institutionAbbr = getInstitutionAbbreviation(item?.institution);

  return (
    <article
      className="group card-ghost-edge flex min-h-[16rem] w-full max-w-[420px] flex-col gap-3 rounded-xl border border-[#22c55e44] border-l-[3px] border-l-[#22c55e] bg-surface-container-low p-5 shadow-[0_12px_24px_rgba(0,0,0,0.24)] transition-colors hover:border-[#22c55e66] hover:border-l-[#22c55e]"
      data-testid="education-degree-card"
    >
      <div className="flex items-start gap-3">
        <div
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-[#22c55e44] bg-surface-container-high text-2xl"
          aria-hidden="true"
        >
          <span>{item?.icon ?? "🎓"}</span>
        </div>
        <div>
          <MetaLabel className="mb-1 inline-flex rounded-full border border-[#22c55e55] bg-[#22c55e22] px-2 py-0.5 text-xs tracking-[0.08em] text-[#22c55e]">
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
        <span className="inline-flex items-center gap-1 rounded-full border border-[#22c55e55] bg-[#22c55e22] px-2 py-1 font-label text-xs uppercase text-[#22c55e]">
          <span className="h-1.5 w-1.5 rounded-full bg-[#22c55e]" aria-hidden="true" />
          {item?.status}
        </span>
        <span className="text-xs italic text-outline">{institutionAbbr}</span>
      </footer>
    </article>
  );
}

function CertCourseCard({ item, accent, ui }) {
  const accentTokens =
    accent === "purple"
      ? {
          border: "border-[#a855f755]",
          left: "border-l-[#a855f7]",
          iconBorder: "border-[#a855f744]",
          badge: "border-[#a855f755] bg-[#a855f722] text-[#a855f7]",
          dot: "bg-[#a855f7]",
          credentialActive:
            "border-[#a855f755] bg-[#a855f711] text-[#a855f7] hover:border-[#a855f799]",
        }
      : {
          border: "border-[#22c55e55]",
          left: "border-l-[#22c55e]",
          iconBorder: "border-[#22c55e44]",
          badge: "border-[#22c55e55] bg-[#22c55e22] text-[#22c55e]",
          dot: "bg-[#22c55e]",
          credentialActive:
            "border-[#22c55e55] bg-[#22c55e11] text-[#22c55e] hover:border-[#22c55e99]",
        };

  const hasCredential = Boolean(item?.credentialUrl && item.credentialUrl !== "#");

  return (
    <article
      className={`group card-ghost-edge flex min-h-[15rem] w-full max-w-[420px] flex-col gap-3 rounded-xl border ${accentTokens.border} border-l-[3px] ${accentTokens.left} bg-surface-container-low p-5 shadow-[0_12px_24px_rgba(0,0,0,0.24)] transition-colors hover:border-l-[3px]`}
      data-testid={accent === "purple" ? "education-course-card" : "education-certification-card"}
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
    </article>
  );
}

function MetaRow({ children, accent = "green", dotClassName }) {
  const computedDotClassName = dotClassName ?? (accent === "purple" ? "bg-[#a855f7]" : "bg-[#22c55e]");

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
