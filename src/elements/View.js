import Base from './Base';

class View extends Base {
  static defaultProps = {
    wrap: true,
  };

  get name() {
    return 'View';
  }

  async render() {
    if (this.props.dest) {
      this.root.instance.addNamedDestination(this.props.dest);
    }
    this.root.instance.save();
    this.applyTransformations();
    this.drawBackgroundColor();
    this.drawBorders();
    await this.renderChildren();
    if (this.props.debug) this.debug();
    this.root.instance.restore();
  }
}

export default View;