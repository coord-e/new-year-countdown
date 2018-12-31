import { h, Component } from 'ink';
import BigText from 'ink-big-text';
import TextAnimation from 'ink-text-animation';

export class Happy extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <TextAnimation>
          <BigText text="HAPPY NEW YEAR" />
        </TextAnimation>
      </div>
    );
  }
}

