import React from "react";
import Button from "./Button.js";

export default class SearchField extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
  }

  updateSearchField(e) {
    this.setState({value: e.nativeEvent.target.value});
  }

  submitSearch(e) {
    e.preventDefault();
    this.props.onCallBack(this.state.value);
  }

  render() {
    return (
      <form onSubmit={(e) => this.submitSearch(e)}>
        <input type="text" onBlur={(e) => this.submitSearch(e)} value={this.state.value} onChange={(e) => this.updateSearchField(e)}/>
        <Button callBack={(e) => this.submitSearch(e)} type="submit" label="Search"/>
      </form>
    );
  }
}
