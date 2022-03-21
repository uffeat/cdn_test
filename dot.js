import {JapBase} from './base.js'

class JapDot extends JapBase {
  constructor() {
    super();
    this._root.innerHTML = `
    <style>
      span {
        display: inline-block;
        background-color: pink;
        width: 48px;
        height: 48px;
        border-radius: 50%;
      }
    </style>
    <span></span>
    `;
  }

}

const componentTag = 'jap-dot';
customElements.get(componentTag) || customElements.define(componentTag, JapDot);

export { JapDot };