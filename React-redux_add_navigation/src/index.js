import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import store from "./js/store/index";
import App from "./js/components/App";

render(
  <Provider store={store}>

    <App />
  </Provider>,
  document.getElementById("root")
);



// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from "./js/components/App";
// import reportWebVitals from './reportWebVitals';

// ReactDOM.render(
//   <React.StrictMode>
//     <App  />
//   </React.StrictMode>,
//   document.getElementById('root')
// );