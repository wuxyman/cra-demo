import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import './index.less';
import App from './App';
import Login from './login';
import Home from './home';
import About from './about';
import Me from './me';
// import reportWebVitals from './reportWebVitals';
const supportsHistory = 'pushState' in window.history;

ReactDOM.render(
  <BrowserRouter forceRefresh={!supportsHistory}>
    <Route path="/login" component={Login} />
    <Route path="/" component={App}>
      <Route path="home" component={Home} />
      <Route path="about" component={About} />
      <Route path="me" component={Me} />
    </Route>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
