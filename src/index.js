import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './components/App.jsx';
<<<<<<< HEAD


ReactDOM.render(
  <React.StrictMode>
    <div className='investors-page'>
      <div class="container">
        <div className='header'>
          <App />
        </div>
      </div>
    </div>
=======
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
>>>>>>> dd4c94719ff73c953339dceafb79cbd4a6c871e8
  </React.StrictMode>,
  document.getElementById('root')
);


