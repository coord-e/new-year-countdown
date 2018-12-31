import { h, Component, Bold } from 'ink';
import BigText from 'ink-big-text';
import TextAnimation from 'ink-text-animation';

const FONTS = ['block', 'simpleBlock', '3d', 'simple3d', 'huge'];
const font = FONTS[Math.floor(Math.random() * FONTS.length)]

export class Happy extends Component {
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

