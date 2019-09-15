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
