import Vue from 'vue';
import Vuelidate from 'vuelidate';
import Vuetify from 'vuetify'
import {BootstrapVue, IconsPlugin} from 'bootstrap-vue'
import VueResource from 'vue-resource';

import { router } from './_helpers';
import App from './app/App';

// setup fake backend
//import { configureFakeBackend } from './_helpers';
//configureFakeBackend();

Vue.use(Vuelidate);
Vue.use(Vuetify)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueResource)


new Vue({
    el: '#app',
    router,
    render: h => h(App)
});