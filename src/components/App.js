import React from "react";
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import InventoryList from './../containers/InventoryList.js'
import main from './../reducers'

const store = createStore(main);

export default class App extends React.Component {

  componentWillMount() {
    store.dispatch({ type: 'LOAD' });
  }

  render() {
    const state = store.getState();
    return (
      <Provider store={store}>
        <InventoryList state={state}/>
      </Provider>
    );
  }
}
