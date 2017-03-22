import React from "react";
import Inventory from './../containers/Inventory.js';
import SearchField from './../components/SearchField.js';

export default class InventoryList extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="inventory-list--MAIN">
        <SearchField onCallBack={this.props.onCallBack}/>
        {this.props.listItems.map((item, index) => <Inventory data={item} key={index} /> ) }
      </div>
    );
  }
}
