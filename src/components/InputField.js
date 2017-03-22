import React from "react";

export default class InputField extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.value
    };
  }

  updateInputField(e) {
    this.setState({value: e.nativeEvent.target.value});
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ value: nextProps.value });
  }

  render() {
    return (
        <input className="inputfield--MAIN" type="text" onBlur={() => this.props.callBack()} value={this.state.value} onChange={(e) => this.updateInputField(e)}/>
    );
  }
}
