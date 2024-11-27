import { Component } from "react";

class ClassTimer extends Component {
  interval;
  constructor(props) {
    super(props);

    this.state = {
      timer: 0,
    };
  }

  componentDidMount(): void {
    this.interval = setInterval(() => {
      this.setState((prevState) => ({ timer: prevState.timer + 1 }));
    }, 1000);
  }

  componentWillUnmount(): void {
    clearInterval(this.interval);
  }
  render() {
    return (
      <div>
        Class Timer - {this.state.timer}
        <div>
          <button onClick={() => clearInterval(this.interval)}>
            Clear Timer
          </button>
        </div>
      </div>
    );
  }
}

export default ClassTimer;
