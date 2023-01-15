import Vue from 'vue';

import { library, config } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import {
    faFacebookSquare,
    faInstagramSquare,
    faLinkedin,
    faGithub,
    faYoutube,
    faVuejs,
    faNode,
    faLaravel,
    faJs,
    faPhp,
    faGitAlt,
} from '@fortawesome/free-brands-svg-icons';

library.add(
    faFacebookSquare,
    faInstagramSquare,
    faLinkedin,
    faGithub,
    faYoutube,
    faVuejs,
    faNode,
    faLaravel,
    faJs,
    faPhp,
    faGitAlt
);

Vue.component('font-awesome-icon', FontAwesomeIcon);
