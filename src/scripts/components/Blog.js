class BlogArea extends HTMLElement {
    connectedCallback(){
        this.render();
    }
    render() {
        this.innerHTML = ``;
    }
}