## Run


```bash
npm i
vite
```

## Vite config
Om vue niet in een gebuild component te hebben kun je
```
    rollupOptions: {
      external: ['vue']
    }
```
in vite.config.js weghalen. \
De code om vue globaal te runnen staat al op djurve.

## Custom element
* In main.js is geef je een naam aan een custom element waar nu "component-name" staat.
* CSS in een custom element werkt als je de component de extension .ce.vue geeft.
* Stylesheets kun je zo aan een element toevoegen:
```javascript
export const WebComponent = customElements.define("component-name", defineCustomElement({...App, styles: [importedStylesheet]}))
```
