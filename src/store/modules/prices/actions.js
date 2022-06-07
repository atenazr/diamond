import  {calculateDay} from '../../../other.js';
// const api_key = "p81117g5en9h4cez9g5g9lnz1pzpj21b751ngng53zh5q2wosfo44gbh5jn9";
const base_url = "https://metals-api.com/api/";

export default {
  async loadValues(context, payload) {

    const symbols = context.getters.symbols;
    const response = await fetch(
      `${base_url}latest?access_key=${api_key}&symbols=${symbols}`
    );
    const responseData = await response.json();

    console.log('response',responseData);

    if (!response.ok) {
      const error = new Error(responseData.message || 'Failed to fetch!');
      throw error;
    }

    const prices = [];

    for (const key in responseData.rates) {
      const price = responseData.rates[key];
      prices.push(price);
    }

    context.commit('setValues', prices);
    // context.commit('setFetchTimestamp');
  },
  async loadPrevs(context, payload) {

    context.commit('calculateDay',-1);
    const date = calculateDay(-1);
    console.log('date',date);
    const symbols = context.getters.symbols;
    const response = await fetch(
      `${base_url}${date}?access_key=${api_key}&symbols=${symbols}`
    );
    const responseData = await response.json();

    // console.log('response',responseData);
    
    if (!response.ok) {
      const error = new Error(responseData.message || 'Failed to fetch!');
      throw error;
    }

    const prices = [];

    for (const key in responseData.rates) {
      const price = responseData.rates[key];
      prices.push(price);
    }

    context.commit('setPrevs', prices);
    // context.commit('setFetchTimestamp');
  },
  async setPrices(context,payload){
    await context.dispatch('loadValues');
    await context.dispatch('loadPrevs');
    await context.commit('setChanges');

    console.log('prices',context.getters.prices);
  },
  async loadResponse(context,payload){
    const symbol = payload.symbol;
    const date = payload.date;
    console.log('date',date);
    const response = await fetch(
      `${base_url}open-high-low-close/${date}?access_key=${api_key}&base=${symbol}&symbols=USD`
    );

    const responseData = await response.json();

    console.log('response',responseData);
    
    if (!response.ok) {
      const error = new Error(responseData.message || 'Failed to fetch!');
      throw error;
    }

      context.commit('setRates',responseData.rates);
  }

};
