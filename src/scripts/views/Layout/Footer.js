class FooterArea extends HTMLElement {
    connectedCallback(){
        this.render();
    }
    render() {
        this.innerHTML = ``;
    }
}