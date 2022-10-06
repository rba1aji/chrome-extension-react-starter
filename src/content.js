/* global chrome */
import React from 'react';
import ReactDOM from 'react-dom';
import "./content.css";
import InjectContent from './components/InjectContent';
// import App from './components/App';

try {

  const app = document.createElement('div');
  app.id = "my-extension-root";

  const parent = document.getElementById('title');
  parent.appendChild(app);

  chrome.storage.sync.get(['switchVal'], function (data) {
    console.log('Value currently is ' + data.switchVal);
    if (data.switchVal == 'on') {

      ReactDOM.createRoot(app).render(
        <InjectContent />
      );
    }
    else { }
  });


  //popup.html

  // const popup = ReactDOM.createRoot(document.getElementById('popup-root'));
  // popup.render(
    // <React.StrictMode>
    // <App />
    // </React.StrictMode>
  // );

}

catch (err) {
  console.log(err);
}