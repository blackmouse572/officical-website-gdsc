import { formatDistance, formatRelative, isDate } from 'date-fns';
import { enUS, vi } from 'date-fns/locale';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import resources from '../i18n/translate.json';
const LOCALE: Record<string, Locale> = {
  en: enUS,
  vi: vi,
};
i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  keySeparator: false,
  interpolation: {
    escapeValue: false,
    format: function (value, format, lng) {
      if (isDate(value)) {
        const locale = LOCALE[lng || 'en'];

        if (format === 'short') return 'dd/MM/yyyy';
        if (format === 'long') return 'dd/MM/yyyy HH:mm:ss';
        if (format === 'relative') return formatRelative(value, new Date(), { locale });
        if (format === 'ago')
          return formatDistance(value, new Date(), {
            locale,
            addSuffix: true,
          });
      }
      return value;
    },
  },
});

export default i18n;
