import { render, html } from 'lighterhtml';

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
