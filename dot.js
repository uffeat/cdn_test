class JapDot extends HTMLElement {
  constructor() {
    super();
    this._root = this.attachShadow({ mode: 'open' });
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

//export { JapDot as default };