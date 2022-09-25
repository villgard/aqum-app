import en from '../locales/en/index.js';
import ru from '../locales/ru/index.js';
import ua from '../locales/ua/index.js';
import {createI18n, useI18n} from 'vue-i18n';

export const translates = {
  en: {
    ...en,
    sss: 'sdsdsdsdss',
  },
  ru: {
    ...ru,

  },
  ua: {
    ...ua,
  }
}

export const i18n = createI18n({
  legacy: false,
  locale: 'en',
  fallbackLocale: ['ru', 'ua'],
  messages: translates,
});