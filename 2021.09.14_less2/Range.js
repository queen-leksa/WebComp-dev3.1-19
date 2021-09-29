export default class myRange extends HTMLElement {
    connectedCallback() {
        console.log(this);
        const thumb = document.createElement("div");
        thumb.style.width = "30px";
        thumb.style.height = "30px";
        thumb.style.borderRadius = "50%";
        thumb.style.backgroundColor = "crimson";
        // this.innerHTML = thumb.outerHTML;
        this.append(thumb);
        thumb.style.top = (this.offsetHeight - thumb.offsetHeight) / 2 + "px";
        thumb.style.left = (this.offsetWidth - thumb.offsetWidth) / 2 + "px";

    }
}
