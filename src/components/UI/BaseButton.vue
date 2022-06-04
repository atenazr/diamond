<template>
  <div class="me-btn px-4 py-2">
      {{ text }}
  </div>
</template>

<script>
export default {
    props:{
        text:{
            type:String,
            default:''
        }
    }
}
</script>

<style lang="scss" scoped>
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
</style>