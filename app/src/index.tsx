import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

function startApp () {
  ReactDOM.render(<App />, document.getElementById('react-app'));
  serviceWorker.unregister();
  
}

export default startApp;
(window as any)
  .startApp = startApp;