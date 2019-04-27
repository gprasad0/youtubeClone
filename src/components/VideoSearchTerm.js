import React, { Component } from "react";

class VideoSearchTerm extends Component {
  state = {
    videoSearchTerm: ""
  };

  onChange = e => {
    console.log("This is the onChange function", e.target.value);
    this.setState({
      videoSearchTerm: e.target.value
    });
  };

  onFormSubmit = event => {
    event.preventDefault();
    console.log("this is onSubmit function", this.state.videoSearchTerm);
    let term = this.state.videoSearchTerm;
    this.props.videoSearchTerm(term);
  };

  render() {
    return (
      <div className="search-bar ui segment " >
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>VIDEO SEARCH</label>
            <input
              type="text"
              placeholder="Search"
              value={this.state.videoSearchTerm}
              onChange={this.onChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default VideoSearchTerm;
