let element = {
	template: `
    <style>
      input { color: green; }
    </style>
    <input value="">
  `,
};

let template = document.createElement('template');
template.innerHTML = element.template;

export default class WcInput extends HTMLElement {
	static get observedAttributes() {
		return ['value'];
	}
	attributeChangedCallback(name, oldValue, newValue) {
		name === 'value' && (this.input.value = newValue);
	}
	get value() {
		return this.root.querySelector('input').value;
	}
	set value(value) {
		this.root.querySelector('input').value = value;
	}
	constructor() {
		super(); // always call super() first in the constructor.
		this.root = this.attachShadow({ mode: 'open' });
		this.root.appendChild(template.content.cloneNode(true));
		this.input = this.root.querySelector('input');
	}
}
