import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './components/App.jsx';


ReactDOM.render(
  <React.StrictMode>
    {/*
    Отключил задний фон, для продакшена
    
    <div className='investors-page'>
      <div className="container">
        <div className='header'> */}
          <App />
        {/* </div>
      </div>
    </div> */}
  </React.StrictMode>,
  document.getElementById('root') 
  // Можно поеменять root на другой элемент
);


