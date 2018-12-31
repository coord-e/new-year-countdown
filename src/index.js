#!/usr/bin/env node

import { h, Text, render, Component, Color, Bold } from 'ink';
import BigText from 'ink-big-text';
import Spinner from 'ink-spinner';
import Box from 'ink-box';
import TextAnimation from 'ink-text-animation';

const NEWYEAR = new Date(2019, 0, 1, 0, 0, 0, 0);
const LABEL_SEPARATOR = ' '.repeat(14);
const UNTIL_PADDING = ' '.repeat(20);
const FONTS = ['block', 'simpleBlock', '3d', 'simple3d', 'huge'];
const font = FONTS[Math.floor(Math.random() * FONTS.length)]

class Happy extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <TextAnimation>
          <BigText text="HAPPY" align="center" font={font} />
          <BigText text="NEW YEAR" align="center" font={font} />
        </TextAnimation>
        <Bold> 🎉 Have a good holiday! 🎉</Bold>
      </div>
    );
  }
}

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

    const is_green = minute != 0 || hour != 0;

    if (epoch_diff <= 0) {
      return <Happy/>
    }
    return (
      <div>
        <div>
          Current date: <Color blue>{this.state.time.toString()}</Color>
        </div>
        <Box>
          <Color green={is_green} red={!is_green}>
            <BigText font="block" text={`${hour.toString().padStart(2, '0')} ${minute.toString().padStart(2, '0')} ${second.toString().padStart(2, '0')}`}/>
          </Color>
          <div>
            {' '.repeat(6)}HOURS{LABEL_SEPARATOR}MINUTES{LABEL_SEPARATOR}SECONDS
          </div>
          <br />
          <br />
          <div>
            {UNTIL_PADDING}<Spinner type="clock" /> Until <Bold>{NEWYEAR.toDateString()}</Bold>{UNTIL_PADDING}
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
