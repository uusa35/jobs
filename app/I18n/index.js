import I18n from 'react-native-i18n';

const en = require('./en.json');
const ar = require('./ar.json');

I18n.fallbacks = true;
I18n.locale = 'en';

I18n.translations = {
  en,
  ar,
};
