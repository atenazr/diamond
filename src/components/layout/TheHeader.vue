<template>
    <header class="d-flex justify-content-between align-items-center">
      <div>
        <h1 class="">
          Diamond
        </h1>
      </div>
      <div class="">
        <h5>
          The latest prices of the precious metals market
        </h5>
        <div>
          {{ time }} , USD
        </div>
      </div>
    </header>
</template>



<script>
import  {calculateDay} from '../../other.js';
export default {
    data(){
        return{
            time:null
        }
    },
    created(){
        this.time = calculateDay(0);
    }
    
}
</script>

<style lang="scss" scoped>
header{
  height: fit-content;
  width: 100%;
  color:var(--primary);
  font-style: italic;
  padding: 1rem 6.75rem;
  margin-top: 1rem;

  }
</style>
