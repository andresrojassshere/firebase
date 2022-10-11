import "./components/index.js";
import { addUser } from "./services/db.js";

class AppContainer extends HTMLElement {

    registered: boolean = false;

    constructor() {
        super()
        this.attachShadow({ mode: "open" })
    }

    connectedCallback() {
        this.render();
        const form = this.shadowRoot?.querySelector("app-form");
        form?.addEventListener("user-registered", (evt) =>{
            const email = evt.detail.email;
            const password = evt.detail.password;
       console.log({email,password});
       addUser({ email, password}).then(() => {
        this.registered = true;
        this.render();
       });

        });
    }

    render() {
        if(!this.shadowRoot) return;

        if(this.registered){ 
            this.shadowRoot.innerHTML = 'ya esta registrado'

        } else {
            this.shadowRoot.innerHTML = ` <section>
            <app-form></app-form>
            </section>`;

        }

    }
}

customElements.define("app-container", AppContainer)
