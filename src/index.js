import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './components/App.jsx';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    {/* <div className="investors-page">
      <div className="container ">
        <div className="header"> */}
          <App />
        {/* </div>
      </div>
    </div> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
