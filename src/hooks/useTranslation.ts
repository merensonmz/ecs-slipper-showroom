import { useLanguage } from "@/i18n/LanguageContext";
import { t as translate, Language, translations } from "@/i18n/translations";

export function useTranslation() {
  const { language, isRTL } = useLanguage();

  const t = (key: string): string => {
    return translate(key, language);
  };

  return { t, language, isRTL, translations };
}
