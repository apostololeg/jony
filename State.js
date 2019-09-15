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
