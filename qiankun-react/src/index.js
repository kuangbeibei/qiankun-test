import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

function render(props) {
  console.log('qiankun-react props ', props);
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  );
}

// 如果是独立运行的
if (!window.__POWERED_BY_QIANKUN__) { 
  render()
}

/* global __webpack_public_path__:writable */
if (window.__POWERED_BY_QIANKUN__) {
  __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
}

export async function bootstrap(props) {
  console.log('qiankun-react bootstrap');
}

export async function mount(props) {
  console.log('qiankun-react mount');
  render(props)
}

export async function unmount(props) {
  console.log('qiankun-react unmount');
  ReactDOM.unmountComponentAtNode(document.getElementById('root'))
}

