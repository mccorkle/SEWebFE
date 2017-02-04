import React from "react";

export default class Checkbox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: this.props.checked
    };
  }
  toggle(property) {
    this.setState({checked: !this.state.checked});
    this.props.callBack(this.props.Name);
  }
  render() {
    return (
        <div>
          <input type="checkbox" checked={this.state.checked} onChange={() => this.toggle(this.props.Name)}/>
          <label>{this.props.label ? this.props.label : null}</label>
        </div>

    );
  }
}
