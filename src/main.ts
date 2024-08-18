import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App);

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
/* import specific icons */
import { faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

/* add icons to the library */
library.add(
    faInstagram, faLinkedin, faGithub );

app.component('font-awesome-icon', FontAwesomeIcon);

import './assets/main.css'

app.mount('#app');