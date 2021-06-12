import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './redux/store';
import {BrowserRouter as Router} from 'react-router-dom'
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import 'react-lazy-load-image-component/src/effects/blur.css';

ReactDOM.render(  
  
  <Provider store={store}>
    <Router>

    <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
