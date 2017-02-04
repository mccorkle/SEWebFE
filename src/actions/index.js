export const toggleProperties = (property) => {
  return {
    type: 'TOGGLE_PROPERTIES',
    property
  }
};

export const changeBlockName = (oldName, newName) => {
  return {
    type: 'CHANGE_BLOCK_NAME',
    newName
  }
};

export const selectInventoryBlock = (id) => {
  return {
    type: 'SELECT_INVENTORY_BLOCK',
    id
  }
};

export const deselectInventoryBlock = (id) => {
  return {
    type: 'DESELECT_INVENTORY_BLOCK',
    id
  }
};

