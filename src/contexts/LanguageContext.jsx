import { createContext, useContext, useState } from 'react'
import { content as allContent } from '../data/content'

const LanguageContext = createContext(null)

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(
    () => localStorage.getItem('portfolio_lang') || 'es'
  )

  function setLang(newLang) {
    localStorage.setItem('portfolio_lang', newLang)
    setLangState(newLang)
  }

  const content = allContent[lang]

  return (
    <LanguageContext.Provider value={{ lang, setLang, content }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider')
  return ctx
}
