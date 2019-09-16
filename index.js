import { render } from 'lighterhtml';
export { html } from 'lighterhtml';

export class Component extends HTMLElement {
  connectedCallback() {
    this.update();
  }

  update() {
    console.log('update');
    render(this, this.render.bind(this));
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

export function Props(names) {
  return function(C) {
    return class extends C {
      connectedCallback() {
        this.props = names.reduce((acc, name) => {
          acc[name] = this.getAttribute(name);
          return acc;
        }, {});

        super.connectedCallback();
      }


      static get observedAttributes() {
        return names;
      }

      attributeChangedCallback(name, oldVal, newVal) {
        if (this.props && newVal !== oldVal) {
          this.props[name] = newVal;
          this.update();
        }
      }
    }
  }
}

export default (...args) => customElements.define(...args);
