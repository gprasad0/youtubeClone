import React, { Component } from "react";
import VideoSearchTerm from "./VideoSearchTerm";
import Api from "./Api";
import VideoPlayer from "./VideoPlayer";
import VideoList from "./VideoList";
class App extends Component {
  state = {
    video: [],
    selectedVideo: null
  };

  componentDidMount() {
    this.videoSearchTerm("manchester united");
  }

  videoSearchTerm = async term => {
    Api.get(`/search`, {
      params: {
        q: term
      }
    })
      .then(response => {
        const data = response.data.items;
        this.setState({
          video: data,
          selectedVideo:data[0]
        });
      })
      .catch(e => console.log(e));
  };

  onVideoSelect = selectedVideo => {
    this.setState({
      selectedVideo: selectedVideo,

    });
  };

  render() {
    return (
      <div className="ui container">
        <VideoSearchTerm videoSearchTerm={this.videoSearchTerm} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoPlayer selectedVideo={this.state.selectedVideo} />
             
            </div>
            <div className="five wide column">
              <VideoList
                videos={this.state.video}
                onVideoSelect={this.onVideoSelect}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
