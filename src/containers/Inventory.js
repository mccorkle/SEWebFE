import React from "react";
import { connect } from 'react-redux'
import { changeBlockName, toggleProperties } from '../actions'
import Inventory from './../components/Inventory.js';

const mapStateToProps = (state) => ({
  data: state
});

const mapDispatchToProps = (dispatch) => {
  return {
    onChangeBlockName: (newValue) => {
      dispatch(changeBlockName(newValue))
    },
    onToggleProperties: (property) => {
      dispatch(toggleProperties(property))
    }
  }
};


const InventoryContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Inventory);

export default InventoryContainer;
