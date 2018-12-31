#!/usr/bin/env babel-node

import { h, Text, render, Component, Color, Bold } from 'ink';
import BigText from 'ink-big-text';
import Spinner from 'ink-spinner';
import Box from 'ink-box';

import { Happy } from './happy';

const NEWYEAR = new Date(2019, 0, 1, 0, 0, 0, 0);
const LABEL_SEPARATOR = ' '.repeat(5);

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

    if (epoch_diff <= 0) {
      return <Happy/>
    }
    return (
      <div>
        <div>
          Current date: <Color green>{this.state.time.toString()}</Color>
        </div>
        <Box>
          <div>
            <BigText font="chrome" text={`${hour} ${minute} ${second}`}/>
          </div>
          <div>
            {' '}HOURS{LABEL_SEPARATOR}MINUTES{LABEL_SEPARATOR}SECONDS
          </div>
          <br />
          <br />
          <div>
            {' '.repeat(2)}<Spinner type="clock" /> Until <Bold>{NEWYEAR.toDateString()}</Bold>{' '.repeat(2)}
          </div>
        </Box>
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
