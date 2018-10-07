import AddWebComponent from './add-webcomponent';

const isRegistered = name => document.createElement(name).constructor !== HTMLElement;

const toDash = string => string.replace(/([A-Z])/g, $1 => '-' + $1.toLowerCase()).replace(/^-/, '');

const handleObjectDefinition = (name, { template, elementClass, definition, async }) => {
	if (async) {
		window.requestIdleCallback(() =>
			handleObjectDefinition(name, { template, elementClass, definition })
		);
	} else if (typeof definition === 'string') {
		AddWebComponent(definition);
	} else {
		if (template) {
			let div = document.createElement('div');
			div.innerHTML = template;
			document.body.appendChild(div);
		}
		if (elementClass) {
			customElements.define(name, elementClass);
		}
	}
};

const handleFunctionDefinition = (name, definition, Vue) => {
	if (definition.then) {
		definition.then(definition => Vue.webComponent(name, definition.default || definition));
	} else {
		Vue.webComponent(name, definition());
	}
};

const registerComponentInVue = function(name, definition) {
	if (typeof definition === 'string') {
		AddWebComponent(definition);
	} else if (definition.ELEMENT_NODE) {
		customElements.define(name, definition);
	} else if (typeof definition === 'function' || definition.then) {
		handleFunctionDefinition(name, definition, this);
	} else if (typeof definition === 'object') {
		handleObjectDefinition(name, definition);
	}
	this.config.ignoredElements.push(name);
};
/******************************************************************************/
//Interprets webComponent attribute from a vm definition
//webComponent is an object that can handle either string, class, object or function definitions
//String Definition:
//  NameOfComponent: `<template></template><script></script>` | where <script> invokes customElements.define
//Class Definition:
//  NameOfComponent: class extends HTMLElement{} | webComponent class
//Object Definition:
//  NameOfComponent: {
//    template:'<template></template>',
//    class: class extends HTMLElement{} | class used to define the webComponent
//    definition: String Definition | definition cannot be used with template or class
//    async: Boolean | defaults to false, if true, instantiates the customElement in a requestIdleCallback
//  }
//Function Definition:
//  NameOfComponent: function that returns any of the above or a promise that resolves any of the above
export default {
	install(Vue, options) {
		Vue.config.ignoredElements = [];
		Vue.webComponent = registerComponentInVue.bind(Vue);
		Vue.mixin({
			created() {
				const { webComponents } = this.$options;
				for (let key in webComponents) {
					let name = toDash(key);
					let definition = webComponents[key];
					Vue.webComponent(name, definition);
				}
			},
		});
	},
};
