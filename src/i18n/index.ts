import en from './en.json';
import ja from './ja.json';

export type Lang = 'en' | 'ja';

const translations = { en, ja } as const;

export type Translations = typeof en;

export function getLangFromUrl(url: URL): Lang {
  const [, first] = url.pathname.split('/');
  return first === 'ja' ? 'ja' : 'en';
}

export function useTranslations(lang: Lang): Translations {
  return translations[lang] as Translations;
}

/** '/ja' for Japanese, '' for English */
export function langPrefix(lang: Lang): string {
  return lang === 'ja' ? '/ja' : '';
}

/**
 * Returns the equivalent URL in the target language.
 * e.g. '/about' → '/ja/about', '/ja/portfolio' → '/portfolio'
 */
export function getEquivalentUrl(pathname: string, targetLang: Lang): string {
  if (targetLang === 'ja') {
    return pathname === '/' ? '/ja/' : `/ja${pathname}`;
  }
  const stripped = pathname.replace(/^\/ja/, '') || '/';
  return stripped;
}
