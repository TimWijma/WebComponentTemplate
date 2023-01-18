import type { SvelteComponent } from "svelte";

export default function defineCustomElement(
    name: string,
    props: string[],
    component: any
) {
    customElements.define(
        name,
        class extends HTMLElement {
            _element: SvelteComponent;

            constructor() {
                super();

                // Create the shadow root.
                const shadowRoot = this.attachShadow({ mode: "open" });

                // Create object for props with default values
                let propObject = {};
                props.forEach((prop) => {
                    propObject[prop] =
                        this.getAttribute(prop) == null
                            ? undefined
                            : this.getAttribute(prop);
                });

                // Instantiate the Svelte Component
                this._element = new component({
                    target: shadowRoot,
                    props: propObject,
                });
                this.addCSS();
            }
            disconnectedCallback(): void {
                this._element?.$destroy();
            }
            addLink(href: string): void {
                const link = document.createElement("link");
                link.setAttribute("rel", "stylesheet");
                link.setAttribute("href", href);
                this.shadowRoot?.appendChild(link);
            }
            addCSS(): void {
                this.addLink(
                    "https://cdn.jsdelivr.net/npm/svelte-material-ui@6.0.0/bare.min.css"
                );
            }
        }
    );
}
