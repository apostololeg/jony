import h, { html, Component, State } from '../..';
import './app-header';

@State({
  title: 'App'
})
class App extends Component {
  onClick = (e) => {
    console.log('app-root handle click', e);
    this.state.title += ' (updated)';
  }

  render() {
    const { title } = this.state;

    return html`
      <button onclick=${this.onClick}>change title</button>
      <app-header title="${title}" />
    `;
  }
}

export default h('app-root', App);
