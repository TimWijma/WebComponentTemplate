import { defineCustomElement } from 'vue'
import App from './App.ce.vue'

export const WebComponent = customElements.define("component-name", defineCustomElement(App))