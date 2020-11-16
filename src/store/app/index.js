import { observable, action, computed, makeObservable } from 'mobx';
import { UIStore } from './ui';

export class AppStore {
  uiStore;

  constructor() {
    makeObservable(this);
    // 在appStore的constructor中实例化UIStore可以获得uistore
    // UIStore 实例化时也能拿到appStore的实例引用
    this.uiStore = new UIStore(this);
  }

  @observable
  name = 'wuxy';

  @observable
  count = 0;

  @action
  increment() {
    this.count = this.count + 1;
  }

  @action
  decrement() {
    this.count = this.count - 1;
  }

  @computed
  get doubleCount() {
    return this.count * 2;
  }

  @action
  changeName(str) {
    this.name = str;
  }

  @computed
  get nameLen() {
    return this.name.length;
  }
}
