import React from 'react';
import ReactDOM from 'react-dom';
import './index.less';
import App from './App';
import Eruda from 'eruda';
import UAParser from 'ua-parser-js';
// import reportWebVitals from './reportWebVitals';

const parser = new UAParser();
const userAgentInfo = parser.getResult();

const isMobile = () => {
  return userAgentInfo.device.type === 'mobile';
};

// console.log('process.env=========', process.env);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

if (isMobile()) {
  const el = document.createElement('div');
  document.body.appendChild(el);

  Eruda.init({
    container: el,
    tool: ['console', 'elements'],
  });
}
