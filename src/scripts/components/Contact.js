class ContactArea extends HTMLElement {
    connectedCallback(){
        this.render();
    }
    render() {
        this.innerHTML = ``;
    }
}