import React from 'react'
import ReactDOM from 'react-dom'
import App from "./components/App.js";
const rootEl = document.getElementById('app');

import { createStore } from 'redux'
import main from './reducers'

const store = createStore(main);

const render = () => ReactDOM.render(

  <App/>,
  rootEl
);

render();
store.subscribe(render);
