const { h, render, Component, Color } = require('ink');

const NEWYEAR = new Date(2019, 0, 1, 0, 0, 0, 0);

class Countdown extends Component {
  constructor() {
    super();

    this.state = {
      time: new Date()
    };
  }

  render() {
    const epoch_diff = (NEWYEAR - this.state.time) / 1000;
    const hour = Math.floor(epoch_diff / 60 / 60);
    const minute = Math.floor((epoch_diff / 60) % 60);
    const second = Math.floor(epoch_diff % 60);

    return (
      <div>
        <div>
          Current date: <Color green>{this.state.time.toString()}</Color>
        </div>
        <div>
          <span>{hour} {minute} <Color red>{second}</Color></span>
        </div>
      </div>
    );
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({
        time: new Date()
      });
    }, 100);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }
}

render(<Countdown/>);
