import { GlobalStorage } from '@utils/custom-storage';
import get from 'lodash/get';
import isEmpty from 'lodash/isEmpty';
import zhCN from './i18n/zh';
import en from './i18n/en';

export const BUILD_VERSION = process.env.REACT_APP_BUILD_VERSION;

export const t = (name, options) => {
  const lang = GlobalStorage.getLanguage().match(/zh/) ? zhCN : en;
  let content = get(lang, name, null);
  if (!content) {
    console.error(`${lang}: ${name} has no match`);
    return `${lang}.${name}`;
  }

  if (!isEmpty(options)) {
    if (options.reason && content.match(/\{.+\}/)) {
      content = content.replace(/\{.+\}/, options.reason);
    }
  }

  return content;
};
