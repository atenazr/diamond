export default {
  prices(state) {
    return state.prices;
  },
  symbols(state){
    return state.symbols;
  },
  today(state){
    return state.today;
  },
  isLoading(state){
    return state.isLoading;
  },
  rates(state){
    return state.rates;
  },
  shouldUpdate(state) {
    const lastFetch = state.lastFetch;
    if (!lastFetch) {
      return true;
    }
    const currentTimeStamp = new Date().getTime();
    return (currentTimeStamp - lastFetch) / 1000 > 60;
  }
};