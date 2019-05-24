import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { lat : null, errorMessage: "" };
  }
  componentDidMount(){
    window.navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({ lat: position.coords.latittude })
      },
      err => {
        this.setState({ errorMessage: err.message })
      }
    );
  }
  renderContent(){
    if(this.state.errorMessage && !this.state.lat){
      return <h1>error : {this.state.errorMessage}</h1>;
    }
    if(!this.state.errorMessage && this.state.lat){
      return <SeasonDisplay lat={this.state.lat} />;
    }
    return <Spinner message="Please acceot the location request."/>;

  }

  render() {
    return(
      <div className="border red">
    {this.renderContent()}
    </div>
  );
}
}
ReactDOM.render(<App />, document.querySelector("#root"));
