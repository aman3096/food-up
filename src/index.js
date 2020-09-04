import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import './Assets/Fonts/Metropolis/Metropolis-Black.otf';
import './Assets/Fonts/Metropolis/Metropolis-BlackItalic.otf';
import './Assets/Fonts/Metropolis/Metropolis-Bold.otf';
import './Assets/Fonts/Metropolis/Metropolis-BoldItalic.otf';
import './Assets/Fonts/Metropolis/Metropolis-ExtraBold.otf';
import './Assets/Fonts/Metropolis/Metropolis-ExtraBoldItalic.otf';
import './Assets/Fonts/Metropolis/Metropolis-ExtraLight.otf';
import './Assets/Fonts/Metropolis/Metropolis-ExtraLightItalic.otf';
import './Assets/Fonts/Metropolis/Metropolis-Light.otf';
import './Assets/Fonts/Metropolis/Metropolis-LightItalic.otf';
import './Assets/Fonts/Metropolis/Metropolis-Medium.otf';
import './Assets/Fonts/Metropolis/Metropolis-MediumItalic.otf';
import './Assets/Fonts/Metropolis/Metropolis-Regular.otf';
import './Assets/Fonts/Metropolis/Metropolis-SemiBold.otf';
import './Assets/Fonts/Metropolis/Metropolis-SemiBoldItalic.otf';
import './Assets/Fonts/Metropolis/Metropolis-Thin.otf';
import './Assets/Fonts/Metropolis/Metropolis-ThinItalic.otf';


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
