<template>
  <div class="trading">

    <Chart
    :options="{
        theme: 'dark',
      }" />

  </div>
  
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
  created() {
    if (localStorage.getItem('reloaded')) {
        // The page was just reloaded. Clear the value from local storage
        // so that it will reload the next time this page is visited.
        localStorage.removeItem('reloaded');
    } else {
        // Set a flag so that we know not to reload the page twice.
        localStorage.setItem('reloaded', '1');
        location.reload();
    }
}
}
</script>

<style scoped lang="scss">
.trading{
  min-height: 85vh;
}
</style>