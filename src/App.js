import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { Provider } from 'mobx-react';
import routes from './routes';
import { AppStore } from './store/app';

const supportsHistory = 'pushState' in window.history;
const defaultStore = new AppStore();

window.store = defaultStore;

const App = (props) => {
  return (
    <Provider store={defaultStore}>
      <Router forceRefresh={!supportsHistory}>
        <div>{renderRoutes(routes)}</div>
      </Router>
    </Provider>
  );
};

export default App;
