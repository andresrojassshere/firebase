
export class Form extends HTMLElement {
    email = "";
    password = "";

    constructor() {
        super()
        this.attachShadow({ mode: "open" })
    }

    connectedCallback() {
        this.render();

        const btn = this.shadowRoot?.querySelector("button")
            btn?.addEventListener("click", () => {
                const event: CustomEvent<{ email: string; password: string }> = 
                    new CustomEvent("user-registered", {
                   detail: { email: this.email, password: this.password},
                   composed: true
                    });

                    this.dispatchEvent(event);

                });

         const emailInput = this.shadowRoot?.querySelector('input[type="email"]');        
         const passwordInput = this.shadowRoot?.querySelector(
            'input[type="password"]'
            );

        emailInput?.addEventListener("change", (evt) =>{
            const value: string = evt.target?.value || "";
            this.email = value;   
         });

         passwordInput?.addEventListener("change", (evt) =>{
            const value: string = evt.target?.value || "";
            this.password = value;   
         });
    }
 
    render() {
        if(!this.shadowRoot) return;
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