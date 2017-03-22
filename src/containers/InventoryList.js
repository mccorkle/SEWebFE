import React from "react";
import { connect } from 'react-redux'
import { searchInventoryList } from '../actions'
import InventoryList from './../components/InventoryList.js';

const mapStateToProps = (state, ownProps) => ({
  listItems: state.get('search') ? state.get('filteredInventoryList') : state.get('inventoryList')
});

const mapDispatchToProps = (dispatch) => {
  return {
      onCallBack: (newValue) => {
      dispatch(searchInventoryList(newValue))
    }
  }
};

const InventoryListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(InventoryList);

export default InventoryListContainer;
