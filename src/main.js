import Vue from 'vue';
import App from './App.vue';
import RegisterWebComponentPlugin from '@/plugins/register-webcomponent';
import WcInput from '@/web-components/wc-input/wc-input.wc.html';
// import WcInputClass from '@/web-components/wc-input/wc-input.js';
const WcInputObject = () => import('@/web-components/wc-input/wc-input.js');
Vue.use(RegisterWebComponentPlugin);
Vue.config.productionTip = false;

new Vue({
	render: h => h(App),
	webComponents: {
		WcInput,
		WcInputObject,

		// WcInputObject: Promise.resolve({
		// 	elementClass: WcInputClass,
		// 	async: true,
		// }),
	},
}).$mount('#app');
