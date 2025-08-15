import React, { createRef, PureComponent } from "react";
import ReactDOM from "react-dom/client";
class App extends PureComponent {
  constructor() {
    super();
    this.state = {
      name: "",
      counter: 0,
    };
    this.input = createRef();
  }
  changeName = () => {
    this.setState({
      name: this.input.current.value,
    });
  };
  componentDidMount(){
    this.input.current.focus()
  }

  render() {
    return (
      <div className="content">
        <h1>Word Guessing</h1>
        <p>Count : {this.state.counter++}</p>
        <input ref={this.input} placeholder="input word ..." />
        <div className="action">
          <button className="save" onClick={this.changeName}>
            Save
          </button>
          <button
            className="hide"
            onClick={() => (this.input.current.value = "")}
          >
            Hide
          </button>
        </div>
      </div>
    );
  }
}
export default App;
