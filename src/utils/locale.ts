import { createI18n } from 'vue-i18n';
import translates from '@/locales';
import { detectBrowserLocale } from './navigator';

export type LocaleObject = {
  key: string;
  flag: string;
  label: string;
};

export const localeObjects: Record<string, LocaleObject> = {
  en: {
    key: 'en',
    flag: 'us',
    label: 'EN',
  },
  ar: {
    key: 'ar',
    flag: 'ar',
    label: 'AR',
  },
};

export const i18n = createI18n({
  legacy: true,
  locale: 'en',
  fallbackLocale: 'ar',
  messages: translates,
  globalInjection: true,
  allowComposition: true,
});

if (localStorage.getItem('i18n_locale_manager') && localStorage.getItem('i18n_locale_manager') !== 'null') {
  i18n.global.locale = localStorage.getItem('i18n_locale_manager') || 'en';
} else {
  i18n.global.locale = detectBrowserLocale();
}

export function setLocale(locale: string) {
  if (Object.keys(localeObjects).includes(locale)) {
    i18n.global.locale = locale;
    localStorage.setItem('i18n_locale_manager', locale);

    document.documentElement.setAttribute('dir', locale.toLowerCase() === 'ar' ? 'rtl' : 'ltr');
    document.documentElement.className = '';
    document.documentElement.classList.add(locale.toLowerCase() === 'ar' ? 'rtl' : 'ltr');
  }
}
