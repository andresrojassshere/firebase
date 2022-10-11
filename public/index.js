import "./components/index.js";
import { addUser } from "./services/db.js";
class AppContainer extends HTMLElement {
    constructor() {
        super();
        this.registered = false;
        this.attachShadow({ mode: "open" });
    }
    connectedCallback() {
        var _a;
        this.render();
        const form = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.querySelector("app-form");
        form === null || form === void 0 ? void 0 : form.addEventListener("user-registered", (evt) => {
            const email = evt.detail.email;
            const password = evt.detail.password;
            console.log({ email, password });
            addUser({ email, password }).then(() => {
                this.registered = true;
                this.render();
            });
        });
    }
    render() {
        if (!this.shadowRoot)
            return;
        if (this.registered) {
            this.shadowRoot.innerHTML = 'ya esta registrado';
        }
        else {
            this.shadowRoot.innerHTML = ` <section>
            <app-form></app-form>
            </section>`;
        }
    }
}
customElements.define("app-container", AppContainer);
