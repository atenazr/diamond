<template>
  <div class="footer">

      <div class="cont-foo d-flex flex-column justify-content-center align-items-center px-5 py-1">

          <div class="logo mx-auto">
              <router-link to="/home">
                <span class="material-symbols-outlined">
                        diamond
                </span>
                </router-link>
          </div>


        <div v-if="isLogined" 
            @click="logOut"
            class="logout d-flex justify-content-end align-items-center ">
              
              <base-button
              text="Log-out"></base-button>
              <span class="material-symbols-outlined ml-3">
                waving_hand
              </span>

        </div>

        <div v-else class="msg">
                <span>
                    you not <router-link to="/signinup"> sign in</router-link>
                </span>
        </div>


      </div>

      <div class="intro">
         developer --> <a href="https://github.com/atenazr">atenazr</a>
      </div>

  </div>
</template>

<script>
import BaseButton from '../UI/BaseButton.vue'
export default {
  components: { BaseButton },
  data(){
      return{
        //   isLogined:false,
      }
  },
  methods:{
      logOut(){
          this.$store.dispatch('logout');
      }
  },
  computed:{
      isLogined(){
          return !!this.$store.getters['userId'];
      }
  }

}
</script>

<style lang="scss" scoped>
.footer{
    width: 100%;
    background-image: linear-gradient(270deg, var(--gray) 0%, var(--dark) 100%);
    background-repeat: no-repeat;
    background-size: contain;
    background-position:center;
    // border-top: 3px solid var(--primary-alt);

    .msg{
        color: var(--light);
        font-size: 1.1rem;

        a{
            color: var(--primary);
            // text-decoration: none;
        }
    }

    .logo{

        a{
            color: var(--primary);
            transition: .3s ease-out;
            span{
                font-size: 3rem;
            }

            &:hover{
                color: var(--light);
            }
        }
    }

    .logout{
        .material-symbols-outlined{
            cursor: pointer;
            margin-left: 1rem;
            line-height:inherit;
            color: var(--primary);
            transition: .3s ease-out;

            &:hover{
                transform: rotate(-25deg)rotate(-90deg)rotate(60deg)scale(1.2);

            }
        }
    }

    .intro{
        color: var(--light);
        width: 100%;
        text-align: left;
        // margin: .2rem 1rem;
        padding:.1rem 1.3rem;
        font-size: .75rem;
        text-align: center;

        a{
            color: var(--primary);
            text-decoration: none;
        }
    }

    @media (min-width:768px){
        .cont-foo{
            flex-direction: row !important;
        }
        .intro{
            text-align: left;
        }
    }

}
</style>