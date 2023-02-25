'use strict';

import React from 'react';
import ReactDOM from 'react-dom/client';

require('./app.sass');
import App from './App';


const container = document.querySelector('#app');
const react_root = ReactDOM.createRoot(container);
react_root.render(
    <App />
);
