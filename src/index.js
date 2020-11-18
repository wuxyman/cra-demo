import React from 'react';
import ReactDOM from 'react-dom';
import { configure } from 'mobx';
import './index.less';
import App from './App';
// import reportWebVitals from './reportWebVitals';

console.log('process.env=========', process.env);

/**
 * 强制使用action改变
 */
configure({
  enforceActions: 'always',
});

ReactDOM.render(<App />, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
