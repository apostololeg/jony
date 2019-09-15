export { html } from 'lighterhtml';
export * from './Component';
export * from './State';
export * from './Props';
export default (...args) => customElements.define(...args);
