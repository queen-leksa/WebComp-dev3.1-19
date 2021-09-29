class Range extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div class="thumbnail"></div>
            <div class="thumb"></div>
        `;
        let value = this.getAttribute("val");
        this.changeValue(+value);
    }
    changeValue(v) {
        let thumb = this.querySelector(".thumb");
        console.log(thumb, v)
        if (v <= 0) {
            thumb.style.left = -thumb.offsetWidth / 2 + "px";
        } else if (v >= 100) {
            thumb.style.left = this.offsetWidth - thumb.offsetWidth / 2 + "px";
        } else {
            thumb.style.left = this.offsetWidth / 100 * v - thumb.offsetWidth / 2 + "px";
        }
    }
}

customElements.define("my-range", Range);