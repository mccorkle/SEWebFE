import React from "react";
import Checkbox from './Checkbox.js';
import InputField from './InputField.js';

const labelList = {
  OnOff: 'On/Off',
  ShowInTerminal: 'Show in Terminal',
  ShowInInventory: 'Show in Inventory',
  ShowInToolbarConfig: 'Show in Toolbar Config',
  ShowOnHUD: 'Show on HUD',
  UseConveyor: 'Use Conveyor'
};


export default class Inventory extends React.Component {

  changeBlockName() {
    this.props.onChangeBlockName(this.refs.blockName.state.value);
  }

  toggleProperty(property) {
    this.props.onToggleProperties(property);
  }

  render() {
    return (
      <div className='inventory--MAIN'>
        <InputField value={this.props.data.Name} callBack={() => this.changeBlockName()} ref='blockName'/>
        {this.props.data.Properties.filter((property) => property.Type === 'Boolean').map((property) =>
          <Checkbox checked={property.Value} callBack={() => this.toggleProperty(property.Name)} label={labelList[property.Name]} name={property.Name} key={property.Name} />
        )}
      </div>
    );
  }
}
