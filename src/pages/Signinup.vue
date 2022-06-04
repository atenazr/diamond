<template>
  <div class="signinup container">

      <main class="row">

          <div class="col-12 col-md-8">
            <div class="signin-form">

              <form>

                <base-input 
                type="email" 
                v-model:valprop = 'emailP'
                place="User name or email address"></base-input>

                <base-input 
                type="password" 
                v-model:valprop = 'passwordP'
                place="Password"></base-input>

                <div class="my-3 form-check">
                  <input type="checkbox" class="form-check-input" id="exampleCheck1">
                  <label class="form-check-label" for="exampleCheck1">Subscribe on News.mag</label>
                </div>
                <div class="d-flex align-items-center my-4 ">
                  <base-button
                  @click="signIn"
                  text='Sign-in'></base-button>

                  <div class="mx-2"></div>

                  <base-button 
                  @click="signUp"
                  text='Sign-up'></base-button>
                  
                </div>
              </form>

            </div>
          </div>

          <div class="col-12 col-md-4">

            <div class="description">
              <p class="text-justify">
                If you have not registered, click on <span style="color:var(--primary);">" Sign-up "</span> button.
                <br>
                By checking <span style="color:var(--primary);">" Subscribe on News.mag "</span>option, the latest news will be emailed to you.Ofcourse it`s optional.
                <br>
                After registration, trading pages and calculation of bubbles or past prices will be activated for you.
                <br>
                Have a good time (; 
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
      emailP:'',
      passwordP:''
    }
  },
  methods:{
    signUp(){
        // console.log('sss');
        this.$store.dispatch('signup',{
          email:this.emailP,
          password:this.passwordP
        })
    },
    signIn(){
        this.$store.dispatch('login',{
          email:this.emailP,
          password:this.passwordP
        })
    }
  }
}
</script>


<style lang='scss' scoped>
.signinup{
  color: var(--light);
  main{

    .signin-form{
      width: 60%;

      .form-check-input{
        border: 2px solid var(--light);
        &:checked{
          background-color: var(--primary);
        }

      } 

    }

    .description{
      p{
        font-size: 1.1rem;
        line-height: 2rem;
      }
    }
  }
}
</style>