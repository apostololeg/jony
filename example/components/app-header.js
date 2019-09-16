import h, { html, Component, Props } from '../..';

@Props(['title'])
class Header extends Component {
  render() {
    const { title } = this.props;

    return html`<div>[logo] [${title}] [userpic]</div>`;
  }
}

export default h('app-header', Header);
