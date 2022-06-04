export default {
  registerCoach(state, payload) {
    state.coaches.push(payload);
  },
  setValues(state, payload) {
    for (const key in state.prices) {
      state.prices[key].value = (payload[key]);
    }
    // console.log('price',state.prices);
  },
  setPrevs(state, payload) {
    for (const key in state.prices) {
      state.prices[key].Prev = payload[key];
    }
  },
  setChanges(state){
    for(const key in state.prices){
      state.prices[key].Change = state.prices[key].value - state.prices[key].Prev;
      state.prices[key].ChgPercent = state.prices[key].Change/100;
    }
  },
  setRates(state,payload){
    state.rates = payload;
  },
  setFetchTimestamp(state) {
    state.lastFetch = new Date().getTime();
  },
  
};