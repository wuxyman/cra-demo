import { useContext } from 'react';
import { MobXProviderContext } from 'mobx-react';

export const useAppStore = () => {
  const context = useContext(MobXProviderContext);
  return context.store;
};

export const useUIStore = () => {
  const context = useContext(MobXProviderContext);
  return context.store.uiStore;
};
