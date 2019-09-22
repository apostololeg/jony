import { html, render } from 'lighterhtml';

export { html };

export class Component extends HTMLElement {
  connectedCallback() {
    this.update();
  }

  update(renderRoot = this, renderFunc = this.render.bind(this)) {
    render(renderRoot, renderFunc);
  }

  render() {
    return null;
  }
}

export function State(stateObj) {
  return function(C) {
    return class extends C {
      state = new Proxy(stateObj, {
        set: (obj, prop, value) => {
          if (obj[prop] === value) {
            return false
          }

          obj[prop] = value;
          this.update();
          return true
        }
      });
    }
  }
}

export default (...args) => customElements.define(...args);
