import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import Home from "./components/Home.js";
import homeReducer from './reducers'

const store = createStore(homeReducer);
const rootEl = document.getElementById('app');

const render = () => ReactDOM.render(
  <Home/>,
  rootEl
);

render();
store.subscribe(render);
