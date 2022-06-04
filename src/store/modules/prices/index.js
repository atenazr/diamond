import mutations from './mutations.js';
import actions from './actions.js';
import getters from './getters.js';


export default {
  namespaced: true,
  state() {
    return {
      isLoading:false,
      rates:[],
      lastFetch: null,
      yesterday:null,
      today:null,
      prices: [
        {
          id:'ALU',
          name:'Aluminum',
          value:0,
          Change:0,
          ChgPercent:0,
          Prev:0,
        },
        {
          id: 'BRONZE',
          name: 'Bronze',
          value:0,
          Change:0,
          ChgPercent:0,
          Prev:0
        },
        {
          id: 'BRONZE',
          name: 'Bronze',
          value:0,
          Change:0,
          ChgPercent:0,
          Prev:0
        },
        {
          id: 'BTC',
          name: 'Bitcoin',
          value:0,
          Change:0,
          ChgPercent:0,
          Prev:0
        },
        {
          id: 'CNY',
          name: 'Chinese Yuan',
          value:0,
          Change:0,
          ChgPercent:0,
          Prev:0
        },
        {
          id: 'EUR',
          name: 'Euro',
          value:0,
          Change:0,
          ChgPercent:0,
          Prev:0
        },
        {
          id: 'GBP',
          name: 'British Pound Sterling',
          value:0,
          Change:0,
          ChgPercent:0,
          Prev:0
        },
        {
          id: 'IRON',
          name: 'Iron',
          value:0,
          Change:0,
          ChgPercent:0,
          Prev:0
        },
        {
          id: 'LITHIUM',
          name: 'Lithium',
          value:0,
          Change:0,
          ChgPercent:0,
          Prev:0
        },
        {
          id: 'MG',
          name: 'Magnesium',
          value:0,
          Change:0,
          ChgPercent:0,
          Prev:0
        },
        {
          id: 'NI',
          name: 'Nickel',
          value:0,
          Change:0,
          ChgPercent:0,
          Prev:0
        },
        {
          id: 'STEEL-SC',
          name: 'LME Steel Scrap CFR Turkey',
          value:0,
          Change:0,
          ChgPercent:0,
          Prev:0
        },
        {
          id: 'URANIUM',
          name: 'Uranium',
          value:0,
          Change:0,
          ChgPercent:0,
          Prev:0
        },
        {
          id: 'USD',
          name: 'United States Dollar',
          value:0,
          Change:0,
          ChgPercent:0,
          Prev:0
        },
        {
          id: 'XAG',
          name: 'Silver (troy ounce)',
          value:0,
          Change:0,
          ChgPercent:0,
          Prev:0
        },
        {
          id: 'XAU',
          name: 'Gold (troy ounce)',
          value:0,
          Change:0,
          ChgPercent:0,
          Prev:0
        },
        {
          id: 'XCU',
          name: 'Copper',
          value:0,
          Change:0,
          ChgPercent:0,
          Prev:0
        }
      ],
      symbols:['ALU','BRONZE','BTC','CNY','EUR','GBP','IRON','LITHIUM','MG','NI','STEEL-SC','URANIUM','USD','XAG','XAU','XCU']
    }
 },
  mutations,
  actions,
  getters
};
