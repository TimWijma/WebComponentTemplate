import App from './App.svelte';
import defineCustomElement from './defineCustomElement';

defineCustomElement('my-app', ['test'], App)