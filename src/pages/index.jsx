import React from 'react';
import { Route, HashRouter } from 'react-router-dom';
import { Provider } from 'mobx-react';
import { AppStore } from '@/stores/app';
import ThemeContainer from '../containers/theme-container';
import Loading from '@components/loading';
import RoomDialog from '@components/dialog';
import { RoomPage } from './classroom/index';
import { OneToOne } from './classroom/one-to-one';
import Home from './home';

import '../icon.less';

const defaultStore = new AppStore();

window.store = defaultStore;

export default function () {
  return (
    <Provider store={defaultStore}>
      <ThemeContainer>
        <HashRouter>
          <Loading />
          <RoomDialog />
          <Route exact path="/classroom/one-to-one">
            <RoomPage>
              <OneToOne />
            </RoomPage>
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </HashRouter>
      </ThemeContainer>
    </Provider>
  );
}
