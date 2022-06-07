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

              <div class="response" style="color:white;">

                <div v-if="isLoading">
                  <base-spinner />
                </div>

                <div class="error" v-else-if="error">
                  {{ this.error }}
                </div>

                <div v-else>
                  <div v-if="messageUp">
                    your account created successfully ! enjoy
                  </div>
                  <div v-if="messageIn" >
                      dear user welcome back to your diamond account !
                  </div>
                </div>

              </div>


            </div>
          </div>

          <div class="col-12 col-md-4">

            <div class="description">
              <p class="text-justify">
                If you have not registered, click on <span style="color:var(--primary);">" Sign-up "</span> button.
                <br>
                By checking <span style="color:var(--primary);">" Subscribe on News.mag "</span>option, the latest news will be emailed to you, if you want.
                <br>
                <br>
                <span style="color:var(--primary);">
                You sign in, then trading page,calculating page and contact page will be activated for you.
                </span>
                <br>
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
      passwordP:'',
      userId:null,
      mode:'',
      error:'',
      isLoading:false
    }
  },
  methods:{
    async signUp(){
      this.error = '';
      this.isLoading = true;
      try {
        await this.$store.dispatch('signup',{
          email:this.emailP,
          password:this.passwordP
        });
      } catch (error) {
        this.error = error.message || 'Something went wrong!';
      }
      this.userId = this.$store.getters['userId'];
      console.log('sss',this.userId)
      this.isLoading = false;
      this.mode = 'signUp';
        // console.log('sss');
        
    },
    async signIn(){
      this.error = '';
      this.isLoading = true;
      try {
        await this.$store.dispatch('login',{
          email:this.emailP,
          password:this.passwordP
        });
      } catch (error) {
        this.error = error.message || 'Something went wrong!';
      }
      this.userId = this.$store.getters['userId'];
      this.isLoading = false;
      this.mode = 'signIn'
      

    }
  },
  computed:{
    messageIn(){
      return (!this.isLoading  && this.mode === 'signIn' && this.userId)
    },
    messageUp(){
      return (!this.isLoading  && this.mode === 'signUp' && this.userId)
    }
  }
}
</script>


<style lang='scss' scoped>
.signinup{
  color: var(--light);
  min-height: 80vh;
  main{

    .signin-form{
      width: 100%;

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

  @media (min-width:768px){
        .signin-form{
          width: 60%;
        }
    }
}
</style>