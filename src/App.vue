
<template>
  <div id="app">
    <Sidebar/>


    <div class="d-flex flex-column w-100">
      <the-header />

      <router-view v-slot="slotProps">
        <transition name="route" mode="out-in">
          <component :is="slotProps.Component"></component>
        </transition>
      </router-view>
    
    </div>

  </div>
</template>

<script>
import Sidebar from './components/layout/Sidebar.vue'
import TheHeader from './components/layout/TheHeader.vue'
export default{
  components:{
    Sidebar,
    TheHeader
  }
}
</script>


<style lang="scss">
@import "./styles/custom_bootstrap";
:root{
  --primary:#FAC402;
  --primary-alt:#F5DD41;
  --gray:#646464;
  --dark:#212121;
  --gray-alt:#474747;
  --light:#f1f5f9;
  --sidebar-width:300px;
}
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Fira sans',sans-serif;
}
body{
  background-color: var(--gray-alt) !important;
}

button{
  cursor: pointer;
  appearance: none;
  border: none;
  outline: none;
  background: none;
}

#app{
  display: flex;
  width: 100%;

  main{
    flex: 1 1 0;
    padding: 2rem;

    @media (max-width:768px){
      padding-left:6rem;
    }
  }
}

.route-enter-from {
  opacity: 0;
  transform: translateX(-30px);
}

.route-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

.route-enter-active {
  transition: all 0.3s ease-out;
}

.route-leave-active {
  transition: all 0.3s ease-in;
}

.route-enter-to,
.route-leave-from {
  opacity: 1;
  transform: translateX(0);
}
</style>
