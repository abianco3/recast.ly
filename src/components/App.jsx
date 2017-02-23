// var App = () => (
//   <div>
//     <Nav />
//     <div className="col-md-7">
//       <VideoPlayer video={exampleVideoData[0]}/>
//     </div>
//     <div className="col-md-5">
//       <VideoList videos={exampleVideoData}/>
//     </div>
//   </div>
// );

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentVideo: {
        id: {
          kind: '',
          videoId: ''
        },
        snippet: {
          title: '',
          description: '',
          thumbnails: {
            default: {
              url: '',
              width: 120,
              height: 90
            }
          }
        }
      },
      videoList: exampleVideoData
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(video) {
    this.setState({
      currentVideo: video
    });
  }

  componentDidMount() {
    console.log(this.props);
    this.props.searchYouTube({query: 'apple', max: '5', key: window.YOUTUBE_API_KEY}, (library) => {
      console.log('apple');
      this.setState({videoList: library, currentVideo: library[0]});
    });
  }

  render() {

    return (
      <div>
        <Nav />
        <div className="col-md-7">
          <VideoPlayer video={this.state.currentVideo} />
        </div>
        <div className="col-md-5">
          <VideoList videos={this.state.videoList} handleClick={this.handleClick} />
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
