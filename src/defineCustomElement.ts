import type { SvelteComponent } from 'svelte'


export default function defineCustomElement(name: string, props: string[], component) {
    customElements.define(
      name,
      class extends HTMLElement {
        _element: SvelteComponent;
        
        constructor() {
          super()
      
          // Create the shadow root.
          const shadowRoot = this.attachShadow({ mode: 'open' })
  
          // Create object for props with default values
          let propObject = {}
          props.forEach(prop => {
            propObject[prop] = this.getAttribute(prop) == null ? undefined : this.getAttribute(prop)
          })
      
          // Instantiate the Svelte Component
          this._element = new component({
            target: shadowRoot,
            props: propObject
          })
        }
        disconnectedCallback(): void {
          this._element?.$destroy();
        }
        addLink(href: string): void {
            const link = document.createElement('link')
            link.setAttribute('rel', 'stylesheet')
            link.setAttribute('href', href)
            this.shadowRoot?.appendChild(link)
        }
        addCSS(): void {
        }
      }
    )
  }