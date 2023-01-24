class HeaderArea extends HTMLElement {
  connectedCallback() {
    this.render();
  }
  render() {
    this.innerHTML = ``;
  }
}

customElements('header-area', HeaderArea)