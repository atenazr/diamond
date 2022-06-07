export default {
  registerCoach(state, payload) {
    state.coaches.push(payload);
  },
  setValues(state, payload) {
    for (const key in state.prices) {
      state.prices[key].value = (1/(payload[key])).toFixed(6);;
    }
    // console.log('price',state.prices);
  },
  setPrevs(state, payload) {
    for (const key in state.prices) {
      state.prices[key].Prev = (1/(payload[key])).toFixed(6);
    }
  },
  setChanges(state){
    for(const key in state.prices){
      state.prices[key].Change = (state.prices[key].value - state.prices[key].Prev).toFixed(8);
      state.prices[key].ChgPercent = (state.prices[key].Change/100).toFixed(10);
    }
  },
  setRates(state,payload){
    state.rates = payload;
  },
  setFetchTimestamp(state) {
    state.lastFetch = new Date().getTime();
  },
  
};