import { createStore } from 'vuex';

import pricesModule from './modules/prices/index.js';
// import requestsModule from './modules/requests/index.js';
import authModule from './modules/auth/index.js';

const store = createStore({
  modules: {
    prices: pricesModule,
    // requests: requestsModule,
    auth: authModule
  }
});

export default store;