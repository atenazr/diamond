import { createApp } from 'vue'
import App from './App.vue'

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

import router from './router/index.js'
import store from './store/index.js'

import BaseInput from './components/UI/BaseInput.vue'
import BaseButton from './components/UI/BaseButton.vue'
import BaseSpinner from './components/UI/BaseSpinner.vue'

const app =createApp(App);
app.component('BaseInput',BaseInput);
app.component('BaseButton',BaseButton);
app.component('BaseSpinner',BaseSpinner);
app.use(router);
app.use(store);
app.mount('#app');
