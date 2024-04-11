import { createApp } from 'vue';

import App from './App.vue';
import BaseCardLook from "@/components/Base/BaseCardLook.vue";
import BaseBadge from './components/Base/BaseBadge.vue';

const app = createApp(App);

app.component('base-badge', BaseBadge);
app.component('base-card', BaseCardLook);

app.mount('#app');
