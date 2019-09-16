![](https://flat.badgen.net/badgesize/normal/apostololeg/jony/master/dist/index.js?label=es5&color=yellow)
![](https://flat.badgen.net/badgesize/normal/apostololeg/jony/master/index.js?label=es7&color=blue)

Web Component Framework
====

### Example

```js
import h, { html, Component, State } from 'jony';
import '../app-header/app-header';

@State({
  title: 'App'
})
class App extends Component {
  onClick = (e) => {
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
```

### API

#### @State

Powered by [Proxy](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Proxy).

#### @Props

Made with `observedAttributes` and `attributeChangedCallback` (see [MDN](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements)).

### Installation

`yarn add jony` or `npm i jony`

### Dependencies

* [lighterhtml](https://github.com/WebReflection/lighterhtml)
