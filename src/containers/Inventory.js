import React from "react";
import { connect } from 'react-redux'
import { changeBlockName, toggleProperties, selectInventoryBlock, deselectInventoryBlock } from '../actions'
import Inventory from './../components/Inventory.js';

const mapStateToProps = (state, ownProps) => ({
  data: ownProps.data,
  index: ownProps.index,
  isSelected: state.get('selectedInventory').indexOf(ownProps.data.get('Id')) > -1
});

const mapDispatchToProps = (dispatch) => {
  return {
    onChangeBlockName: (newValue) => {
      dispatch(changeBlockName(newValue))
    },
    onToggleProperties: (property) => {
      dispatch(toggleProperties(property))
    },
    onSelectInventoryBlock: (id) => {
      dispatch(selectInventoryBlock(id))
    },
    onDeselectInventoryBlock: (id) => {
      dispatch(deselectInventoryBlock(id))
    }
  }
};

const InventoryContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Inventory);

export default InventoryContainer;
