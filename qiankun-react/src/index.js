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

export async function bootstrap(props) {

}

export async function mount(props) {
  render(props)
}

export async function unmount(props) {
  ReactDOM.unmountComponentAtNode(document.getElementById('root'))
}

