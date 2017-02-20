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

  constructor(props) {
    super(props);
    this.state = {
      isSelected: this.props.isSelected
    };
  }

  changeBlockName() {
    this.props.onChangeBlockName(this.refs.blockName.state.value);
  }

  toggleProperty(property) {
    this.props.onToggleProperties(property);
  }

  toggleInventoryBlock() {
    const id = this.props.data.get('Id');
    if (this.state.isSelected) {
      this.props.onDeselectInventoryBlock(id);
    }
    else {
      this.props.onSelectInventoryBlock(id);
    }
    this.setState({isSelected: !this.state.isSelected})
  }

  render() {
    return (
      <div className='inventory--MAIN'>
        <Checkbox checked={false} callBack={() => this.toggleInventoryBlock()} label={false} name={this.props.data.get('Name')} key={this.props.data.get('Name')} />
        <InputField value={this.props.data.get('Name')} callBack={() => this.changeBlockName()} ref='blockName'/>
        <div className="inventory--properties-list">
          {this.props.data.get('Properties').filter((property) => property.get('Type') === 'Boolean').map((property) =>
            <Checkbox checked={property.get('Value')} callBack={() => this.toggleProperty(property.get('Name'))} label={labelList[property.get('Name')]} name={property.get('Name')} key={property.get('Name')} />
          )}
        </div>
      </div>
    );
  }
}
