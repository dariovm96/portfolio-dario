import { useLanguage } from '../../contexts/LanguageContext'

function LanguageToggle() {
  const { lang, setLang } = useLanguage()
  return (
    <div className="inline-flex items-center gap-1 rounded-lg border border-outline-variant/40 px-1 py-0.5">
      {['es', 'en'].map((l) => (
        <button
          key={l}
          type="button"
          onClick={() => setLang(l)}
          aria-label={`Switch to ${l.toUpperCase()}`}
          aria-pressed={lang === l}
          className={`font-label text-xs uppercase px-2.5 py-1 rounded-md transition-colors ${
            lang === l
              ? 'text-primary tonal-layer-1'
              : 'text-on-surface-variant hover:tonal-layer-1'
          }`}
        >
          {l.toUpperCase()}
        </button>
      ))}
    </div>
  )
}

export default LanguageToggle
