import type { SvelteComponent } from 'svelte';
import App from './App.svelte';
// import defineCustomElement from './defineCustomElement';

// defineCustomElement('my-app', ['test'], App)

customElements.define(
    'my-app',
    class extends HTMLElement {
      _element: SvelteComponent;
      
      constructor() {
        super()
    
        // Create the shadow root.
        const shadowRoot = this.attachShadow({ mode: 'open' })

        // Create object for props with default values
        // let propObject = {}
        // props.forEach(prop => {
        //   propObject[prop] = this.getAttribute(prop) == null ? undefined : this.getAttribute(prop)
        // })
    
        // Instantiate the Svelte Component
        this._element = new App({
          target: shadowRoot,
          props: {test: this.getAttribute("test") == null ? undefined : this.getAttribute("test")}
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