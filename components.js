class Header extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <nav>
            <h1>
               <a href="/index.html">Kyle Garzon</a>
            </h1>
            <a href="/biography/index.html">Biography</a>
            <a href="/organizations/index.html">Organizations</a>
        </nav>
        `
    }
}

class Footer extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <footer>
            <div class="contact">
                <p>Kyle Garzon</p>
                <p>kylebrooks.garzon@gmail.com</p>
                <a href="https://www.goodwall.io/kyle-garzon-cca5" target="_blank">Goodwall</a>
            </div>
            <p>© Kyle Garzon, 2026</p>
        </footer>
    `
    }
}

customElements.define('site-header', Header)
customElements.define('site-footer', Footer)