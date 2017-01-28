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

