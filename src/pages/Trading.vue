<template>
  <Chart
  :options="{
      theme: 'dark',
    }" />
  
</template>

<script>
import { Chart,CryptoMarket, Snaps, Screener } from 'vue-tradingview-widgets';

export default{
  components: {
    Chart,
    CryptoMarket,
    Screener,
    Snaps,
  },
};
</script>