class PortfolioArea extends HTMLElement {
    connectedCallback(){
        this.render();
    }
    render() {
        this.innerHTML = ``;
    }
}