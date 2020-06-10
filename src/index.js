import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './components/App.jsx';


ReactDOM.render(
  <React.StrictMode>
    <div className='investors-page'>
      <div class="container">
        <div className='header'>
          <App />
        </div>
      </div>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);


