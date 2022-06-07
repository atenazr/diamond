<template>

  <div class="base-input my-3" :class="classs">
        <input 
        :value="valprop"
        @input="$emit('update:valprop', $event.target.value)"
        :placeholder="place"
        :type="typee" class="form-control p-3">
    </div>


</template>

<script>
export default {
    props:{
        classs:{
            type:String,
            default:''
        },
        typee: {
            type:String,
            default:'text'
        },
        place:{
            type:String,
            default:''
        },
        valprop:{
            type:String,
            default:''
        }
    }
}
</script>

<style lang="scss" scoped>

.base-input{
    color: var(--light);
    input,textarea{
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
        }

        .form-check-input{
            border: 2px solid var(--light);
            &:checked{
            background-color: var(--primary);
            }

        } 
}
</style>