import isEmpty from 'lodash/isEmpty';

export class CustomStorage {
  storage = null;

  languageKey = 'edu_language';

  constructor() {
    this.storage = window.sessionStorage;
  }

  read(key) {
    try {
      let json = JSON.parse(this.storage.getItem(key));
      return json;
    } catch (_) {
      return this.storage.getItem(key);
    }
  }

  save(key, val) {
    this.storage.setItem(key, JSON.stringify(val));
  }

  clear(key) {
    this.storage.removeItem(key);
  }

  setLanguage(lang) {
    this.save(this.languageKey, lang);
  }

  getLanguage() {
    const language = this.read(this.languageKey)
      ? this.read(this.languageKey)
      : navigator.language;
    return language;
  }

  // 返回值 {count, messages: any[]}
  getRtmMessage() {
    const channelMessages = GlobalStorage.read('channelMessages');
    if (isEmpty(channelMessages)) {
      return {
        count: 0,
        messages: [],
      };
    }
    const messages = channelMessages.filter(
      (it) => it.message_type === 'group_message'
    );
    const chatMessages = messages.reduce((collect, value) => {
      const payload = value.payload;
      const json = JSON.parse(payload);
      if (json.content) {
        return collect.concat({
          account: json.account,
          content: json.content,
          ms: value.ms,
          src: value.src,
        });
      }
      return collect;
    }, []);
    return {
      messages: chatMessages,
      count: chatMessages.length,
    };
  }
}

export const GlobalStorage = new CustomStorage();

window.GlobalStorage = GlobalStorage;
