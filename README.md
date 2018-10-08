# Vue Webcomponents Plugin
This plugin allows you to work with native webcomponents in Vue.js as if they were Vue Components. It adds a `Vue.webComponent()` function that behaves similarly to `Vue.component()`, and allows you to add a `..., webComponents:{}, ...` attribute to a Component definition that behaves similarly to `..., components:{}, ...`.

Note that this does nothing to try to abstract the WebComponents API to a 'vue-like' experience. Working with this plugin requires creating web component definitions that are compatible with `customElements.define` as explained below.

See https://developers.google.com/web/fundamentals/web-components/customelements for a guide on creating your own WebComponents.

__This plugin does no kind of transpilation or polyfilling__, that's up to you to provide in whichever way you feel is best. If you provide it valid definitions, it will work. Babel by default will break `class extends HTMLElement`. The fastest way around this is to add the directory with your web component definitions to babel's ignored list, though that probably won't work for something in production.

## Installation
`npm i vue-webcomponents-plugin -S`

## Usage
```js
import Vue from 'vue';
import WebcomponentsPlugin from 'vue-webcomponents-plugin';
import WebComponentDefinition from 'some/path/to/a/valid/definition';
import MyCoolComponent from 'some/path/to/a/valid/definition';

Vue.use(WebcomponentsPlugin);

Vue.webComponent('name-of-component', webComponentDefinition);
//or
new Vue({
    template:`<div><web-component-definition @customEvent="" :some-attribute=""></web-component-definition></div>`,
    webComponents: {
        WebComponentDefinition,
        MyCoolComponent
    }
})

```

Using either `Vue.webComponent` or `..., webComponents:{}, ...` will register the web component with `customElement.define` and add the web component name to Vue's Vue.config.ignoredElements array so Vue doesn't warn against unregistered elements in component templates.
#### Name
Name as passed to `Vue.webComponent(name, definition)` or `{webComponents:{MyName:definition}}`can be kebab-case, PascalCase, or camelCase, e.g., 'my-cool-component', 'MyCoolComponent', or 'myCoolComponent'

#### Webcomponent Definition
A Webcomponent Definition can be a string, class, object or a function
##### String Definition
``WebComponentDefinition: `<template></template><script></script>` ``
* where <script> creates the class that extends HTMLElement, invokes customElements.define and clones/gets content from the template. `<template>` is required for this definition and must be written the script. If you want to pass just a class, use the Class Definition.

##### Class Definition
`WebComponentDefinition: class extends HTMLElement{}`
* pass a class that extends HTMLElement.

##### Object Definition

```javascript
  WebComponentDefinition: {
    //template should include one root template element to be consumed by class
    template:'<template></template>',
    // elementClass used to extend HTMLElement, can consume the template element via DOM selectors
    elementClass: class extends HTMLElement{},
    //definition is as defined above. Cannot be used with template or class
    definition: `<template></template><script></script>`,
    // async defaults to false, if true, instantiates the customElement in a requestIdleCallback
    async: Boolean 
  }
```
##### Function Definition:
  `WebComponentDefinition: () => import('path/to/definition')`
  * function that returns any of the above or a promise that resolves any of the above in a Promise.
  

