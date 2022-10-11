export class Form extends HTMLElement {
    constructor() {
        super();
        this.email = "";
        this.password = "";
        this.attachShadow({ mode: "open" });
    }
    connectedCallback() {
        var _a, _b, _c;
        this.render();
        const btn = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector("button");
        btn === null || btn === void 0 ? void 0 : btn.addEventListener("click", () => {
            const event = new CustomEvent("user-registered", {
                detail: { email: this.email, password: this.password },
                composed: true
            });
            this.dispatchEvent(event);
        });
        const emailInput = (_b = this.shadowRoot) === null || _b === void 0 ? void 0 : _b.querySelector('input[type="email"]');
        const passwordInput = (_c = this.shadowRoot) === null || _c === void 0 ? void 0 : _c.querySelector('input[type="password"]');
        emailInput === null || emailInput === void 0 ? void 0 : emailInput.addEventListener("change", (evt) => {
            var _a;
            const value = ((_a = evt.target) === null || _a === void 0 ? void 0 : _a.value) || "";
            this.email = value;
        });
        passwordInput === null || passwordInput === void 0 ? void 0 : passwordInput.addEventListener("change", (evt) => {
            var _a;
            const value = ((_a = evt.target) === null || _a === void 0 ? void 0 : _a.value) || "";
            this.password = value;
        });
    }
    render() {
        if (!this.shadowRoot)
            return;
        this.shadowRoot.innerHTML = ` <article>
        <div class="form">
        <div class="contenido">
       <h3>Instagram</h3>     
       <div>
   
           <label>email</label>
           <input type="email">
       </div>
       <div>
           <label>password</label>
           <input type="password">
       </div>
       <button class="boton" type="submit">Enviar</submit>
       </div>
       </div>
        </article>`;
    }
}
customElements.define("app-form", Form);
