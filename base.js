class JapBase extends HTMLElement {
  constructor() {
    super();
    this._root = this.attachShadow({ mode: 'open' });
  }

}

export { JapBase };