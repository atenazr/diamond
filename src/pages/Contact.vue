<template>
    <div class="contact container">

      <main class="row">

          <div class="col-12 col-md-8">
            <div class="form">

              <div class="title my-3 ">
                  <h5>You can send us your comments or anything else!</h5>
              </div>

              <form>

                <base-input
                typee="email"
                v-model:valprop = 'emailP'
                place="your email address -> name@example.com"
                ></base-input>

                <div class="mt-3 mb-4">
                  <textarea 
                  v-model="message"
                  class="form-control p-3"  rows="3" placeholder="your message"></textarea>
                </div>

                <base-button
                @click="sendMessage" 
                text="Send"></base-button>

              </form>

            </div>
          </div>

          <div class="col-12 col-md-4">
            <div class="description">

              <h5 class="my-2 d-flex align-items-center">
                  <span class="material-symbols-outlined mr-2">
                    diamond
                  </span>
                  <span class="tilte">Diamond</span>
                  <span class="title-sub">.group</span>
              </h5>

              <p class="statement">
                  A US Federal Reserve financial group that monitors changes in financial markets.
                </p>

              <div class="address my-3 d-flex align-items-center">
                <span class="material-symbols-outlined mr-2">
                  share_location
                </span>
                <span class="text">
                  Address 
                </span>
                
              </div>
              <span class="statement">
                  1 Platt St, New York, NY 10038, United States
              </span>

              <div class="phone my-3 d-flex align-items-center">
                <span class="material-symbols-outlined mr-2">
                  phone_in_talk
                </span>
                <span class="text">
                  Phone 
                </span>
              </div>
              <span class="statement">
                  +1 617-300-0956
              </span>

              <div class="email my-3 d-flex align-items-center">
                <span class="material-symbols-outlined mr-2">
                  alternate_email
                </span>
                <span class="text">
                  Email address  
                </span>
              </div>
              <span class="statement">
                  info@diamond-group.com
                </span>

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
        message:""
      }
    },
    methods:{
      sendMessage(){
        console.log('sss',this.emailP,this.message);
        this.$store.dispatch('sendMessage',{
          email:this.emailP,
          message : this.message
        })
      }
    }
}
</script>

<style lang='scss' scoped>
.contact{
  color: var(--light);
  main{

    .form{
      width: 60%;

      input,textarea{
        background: transparent;
        border: none;
        box-shadow: none;
        color: var(--light);
        border-bottom: 2px solid var(--light);
        transition: .5s ease-out;

        &:focus{
          border-color: var(--primary);
        }
      }

      .me-btn{
        background-color: var(--primary);
        color: var(--gray-alt);
        width: fit-content;
        cursor: pointer;
        border-radius: 3px;
        transition: .2s ease-out;

        &:hover{
          background-color: var(--primary-alt);
          color: var(--gray);
        }
        
      }
    }

    .description{
      color: var(--primary-alt);

      .title-sub{
        margin-left: .2rem;
        color: .7rem;
        color: var(--gray);
      }
      .material-symbols-outlined{
        margin-right: .5rem;
        color: var(--primary-alt);
      }
      .statement{
        margin-left:2rem;
        font-style: italic;
        color: var(--light);
      }

    }
  }
}

</style>