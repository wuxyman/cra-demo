import { observable, action, makeObservable } from 'mobx';

export class UIStore {
  appStore = null;

  constructor(appStore) {
    makeObservable(this);
    this.appStore = appStore;
  }

  static languages = [
    {
      text: '中文',
      name: 'zh-CN',
    },
    {
      text: 'En',
      name: 'en',
    },
  ];

  @observable
  loading = false;

  @action
  upLoading(bool) {
    this.loading = bool;
  }
}
