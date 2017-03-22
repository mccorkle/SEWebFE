import React from "react";

export default class Button extends React.Component {
  constructor(props) {
    super(props);
  }

  clickHandler(e) {
    this.props.callBack(e);
  }

  render() {
    return (
      <button type={this.props.submit} onClick={(e) => this.clickHandler(e)}>{this.props.icon ? this.props.icon : this.props.label}</button>
    );
  }
}
