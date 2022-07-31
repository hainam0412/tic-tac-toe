import { createApp } from 'vue';
import './style.scss';
import App from './App.vue';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';
import { createPinia } from 'pinia';

const store = createPinia();
store.use(piniaPluginPersistedstate);

createApp(App).use(store).mount('#app');
