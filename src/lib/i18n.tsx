import { createContext, useContext, useState, ReactNode } from "react";

type Lang = "en" | "es";

interface I18nContext {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (en: string, es: string) => string;
}

const I18nCtx = createContext<I18nContext>({
  lang: "en",
  setLang: () => {},
  t: (en) => en,
});

export const I18nProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLang] = useState<Lang>("en");
  const t = (en: string, es: string) => (lang === "es" ? es : en);
  return <I18nCtx.Provider value={{ lang, setLang, t }}>{children}</I18nCtx.Provider>;
};

export const useI18n = () => useContext(I18nCtx);
