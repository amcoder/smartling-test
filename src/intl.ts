import { createIntl, createIntlCache } from 'react-intl';
// import deMessages from './lang/messages_de-DE.json';
import enMessages from './lang/messages_en.json';
// import enGBMessages from './lang/messages_en-GB.json';
import frMessages from './lang/messages_fr.json';
// import frFRMessages from './lang/messages_fr-FR.json';
// import jaMessages from './lang/messages_ja-JP.json';

const messages: { [index: string]: { [index: string]: any } } = {
  en: enMessages,
//   'en-GB': enGBMessages,
  fr: frMessages,
//   'fr-FR': frFRMessages,
//   de: deMessages,
//   ja: jaMessages,
};

let locale = navigator.language;
if (!messages[locale]) {
  locale = locale.split('-')[0];
  if (!messages[locale]) {
    locale = 'en';
  }
}

const cache = createIntlCache();
const intl = createIntl(
  {
    locale,
    messages: messages[locale],
  },
  cache,
);

export { intl };
