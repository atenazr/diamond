<template>

  <div class="home container">

    <main class="row">

        <div class="col-12 col-md-8">

          <div v-if="isLoading" class="mt-5 pt-5">
              <base-spinner /> 
          </div>

          <div v-else class="table-responsive-md">  
            <table class="table caption-top table-bordered  table-striped table-hover">

              <caption>
                <div class="px-2 py-1 d-flex justify-content-start align-items-center w-100 ">
                  <span class="update">
                    last upadate <span> 2 </span> minutes ago
                  </span>
                  <span class="refresh" @click="refreshPrices">

                      <span>
                      Refresh
                      </span>
                      <span class="material-symbols-outlined">
                        sync
                      </span>

                  </span>
                </div>
              </caption>
              <thead>
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Value</th>
                  <th scope="col">Change</th>
                  <th scope="col">%Chg</th>
                  <th scope="col">Prev</th>
                </tr>
              </thead>
              <tbody>

                <tr 
                  v-for="item in prices"
                  :key="item.id">
                  <th scope="row">
                    {{ item.name }}
                  </th>
                  <td>
                    {{ item.value }}
                  </td>
                  <td class="positive-chg" :class="{'negative-chg' : Number(item.Change) < 0}">
                    {{ item.Change }}
                  </td>
                  <td>
                    {{ item.ChgPercent }}
                  </td>
                  <td>
                    {{ item.Prev }}
                  </td>
                </tr>
              
              </tbody>

            </table>
          </div>

        </div>

        <div class="col-12 col-md-4">

          <div class="news p-2">

            <h4 class="my-3">
              Daily News
            </h4>

            <single-blog
            v-for="item in news"
            :key="item.id"
            :img="item.img"
            :preview="item.preview"
            :link="item.link"
            ></single-blog>

          </div>

        </div>

    </main>
  
  </div>


</template>

<script>
import singleBlog from '../components/UI/singleBlog.vue'

export default {
  components:{
    singleBlog
  },
  data(){
    return{
      prices:[],
      news:[
        {
          id:0,
          img:'/src/assets/news/1.webp',
          preview:"Kamala Harris calls for 'assault weapons ban' in wake of Uvalde, Buffalo mass shootings",
          link:'https://www.foxnews.com/politics/kamala-harris-assault-weapons-ban-uvalde-buffalo-mass-shootings'
        },
        {
          id:1,
          img:'/src/assets/news/2.jpg',
          preview:"Elon Musk won't manufacture Tesla cars in India because government prohibits selling and servicing of EVs",
          link:'https://www.foxbusiness.com/economy/elon-musk-manufacture-tesla-cars-india-government'
        },
        {
          id:2,
          img:'/src/assets/news/3.webp',
          preview:"Air travelers face cancellations over Memorial Day weekend",
          link:'https://www.foxbusiness.com/lifestyle/air-travelers-cancellations-memorial-day-weekend'
        }
      ],
      isLoading:false
    }
  },
  methods:{
    async loadPrices(){
        this.isLoading = true;
      try {
        await this.$store.dispatch('prices/setPrices');
      } catch (error) {
        this.error = error.message || 'Something went wrong!';
      }
      this.prices = await this.$store.getters['prices/prices'];
      console.log('prices',this.prices);
      this.isLoading = false;
    },
    async refreshPrices(){
      await this.loadPrices();
    }
  },
  computed:{
    colorChg(){
      const tmp = Number(Event.target.value);
      console.log('vvv',tmp)
      if(Number(tmp)>0){
        return 'positve-color'
      }else{
        return 'negative-color'
      }
    }
  },
  created() {
    this.loadPrices();
  }
  // ,
  // created(){
  //   this.interval = setInterval(() =>{
  //     this.loadPrices()},300000)
  // },
  // destroyed(){
  //   clearInterval(this.interval)
  // }

}
</script>

<style scoped lang="scss">
.home{
  width: 100%;
  
  main{

    .table{
      color: var(--light) !important;
      cursor: pointer;

      caption{
        .refresh{
          color: var(--primary-alt);
          margin-left: auto;
          transition: .3s ease-out;
          &:hover{
            color: var(--primary);
          }
          .material-symbols-outlined{
              line-height:inherit;
              font-size: 15px;
          }
        }
      }


      tbody{
        tr{
          transition: .5s ease-in-out;
          th{
            color:var(--primary-alt);
            padding: .75rem 1rem;
            }
          &:hover{
            background-color: var(--light);
            color: var(--gray-alt) ;
            text-align: center;
            th{
            color:var(--gray-alt);
              }
            }

          
              .positive-chg{
                color: green;
              }
              .negative-chg{
                color: red;
              }
         
          
          }
      }
    }

    .news{

      h4{
        text-align: right;
        color: var(--primary-alt);
      }
      .single-blog{
        animation:aninews 1.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      }
    }
  }
  
@keyframes aninews {
  0%{
    transform: translateX(100%);
  }
  100%{
    transform: translateX(0%);
  }
}
  }

</style>