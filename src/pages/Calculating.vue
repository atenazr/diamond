<template>
  <div class="calculating container">

      <main class="row">

          <div class="col-12 col-md-8">
            <div class="form">

                <div class="title my-3 ">
                  <h5>select the symbol and date you want</h5>
              </div>

              <form>

                <div>
                    <select class="form-select" aria-label="Default select example" v-model="symbol">
                        <option selected>Open this Symbols menu</option>
                        <!-- <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>  -->
                        <option v-for="item in prices"
                          :key="item.id"
                          :value="item.id">{{ item.name }}</option>

                    </select>

                </div>

                <div class="mt-3 mb-4">
                  <base-input
                    v-model:valprop="date"
                    typee="date"></base-input>
                </div>

                

                <base-button 
                @click="loadResponse"
                text="Send request"></base-button>

              </form>

              <div class="result my-4 py-3">

                <div class="d-flex justify-content-center align-items-center my-3">
                  <span class="name-symbol mx-3">
                    {{ symbol }}
                  </span>
                  in
                  <span class="date-symbol mx-3">
                    {{ date }}
                  </span>
                </div>

                 <base-spinner v-if="isLoading"></base-spinner> 

                <div v-else class="response d-flex flex-column justify-content-center align-items-center">

                  <span class="p-1 my-1">
                    open-price : <span class="price">{{ openPrice }}</span>
                  </span>

                  <span class="p-1 my-1">
                    low-price : <span class="price">{{ lowPrice }}</span>
                  </span>

                  <span class="p-1 my-1">
                    high-price : <span class="price">{{ highPrice }}</span>
                  </span>

                  <span class="p-1 my-1">
                    close-price : <span class="price">{{ closePrice }}</span>
                  </span>

                </div>


              </div>


            </div>

          </div>

          <div class="col-12 col-md-4">
            <div class="description">

              <p>
                On this page, you can see the highest and lowest price by selecting the symbol and date you want.
                This answer may take a while, wait a minute !
              </p>

            </div>

            


          </div>

      </main>

  </div>
</template>

<script>
export default {
  data(){
    return{
      prices:null,
      date:null,
      symbol:'',
      lowPrice:0,
      highPrice:0,
      openPrice:0,
      closePrice:0,
      isLoading:false
    }
  },
  methods:{
    async loadResponse(){
      console.log('sss',this.date,this.symbol);
      this.isLoading = true;
      try {
        await this.$store.dispatch('prices/loadResponse',{
          symbol :null,
          date :null
        });
      } catch (error) {
        this.error = error.message || 'Something went wrong!';
      }
      this.isLoading = false;
    }
  },
  created(){
    this.prices = this.$store.getters['prices/prices'];
  }

}
</script>

<style lang="scss" scoped>

.calculating{
    color: var(--light);

    .form{
      width: 60%;
  
    select{
        color: var(--light);
            background: transparent;
            border: none;
            box-shadow: none;
            color: var(--light);
            border-bottom: 2px solid var(--light);
            transition: .5s ease-out;

            &:focus{
                border-color: var(--primary);
                background: transparent;
                box-shadow: none;
            }

            option{
              color: var(--gray);
              background-color: transparent;
            }
        }

        }

    .result{
      border-top: 2px solid var(--gray);
      .price{
        color: var(--primary-alt);
        margin: 0 .5rem;
      }
    } 

    .description{
      p{
        font-size: 1.1rem;
        line-height: 2rem;
        }
    }
}

</style>