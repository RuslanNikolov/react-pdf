import Base from './Base';
import { setDest } from '../utils/url'

class View extends Base {
  static defaultProps = {
    wrap: true,
  };

  get name() {
    return 'View';
  }

  async render() {
    this.root.instance.save();
    this.applyTransformations();
    this.drawBackgroundColor();
    this.drawBorders();
    await this.renderChildren();
    if (this.props.dest) setDest(this)
    if (this.props.debug) this.debug();
    this.root.instance.restore();
  }
}

export default View;
