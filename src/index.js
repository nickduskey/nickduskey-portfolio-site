//import styles
//import 'grommet/scss/vanilla/index';
import './lib/modernizr';

if (! Modernizr.flexbox ||
  ! Modernizr.rgba) {
  alert('Unfortunately, your browser appears to be too old. ' +
    'We recommend the latest version of Chrome, Firefox, Safari, or Internet Explorer. ' +
    'If you are using the latest Internet Explorer, you will need to turn off Compatibility Mode.');
}

import React from 'react';
import ReactDOM from 'react-dom';
import App from './js/App';

const element = document.getElementById('content');
ReactDOM.render(<App />, element);
document.body.classList.remove('loading');
