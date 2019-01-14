import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Main from './assets/containers/main';

ReactDOM.render(
    <BrowserRouter
        basename="/"
    >
        <Main />
    </BrowserRouter>,
    document.getElementById('app')
);

