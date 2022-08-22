import { defineCustomElement } from 'vue'
import App from './App.vue'
import AppStyle from './assets/styles/index.css'

export const WebComponent = customElements.define("component-name", defineCustomElement({...App, styles: [AppStyle]}))