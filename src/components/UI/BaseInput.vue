<template>

        <input 
        class="base-input my-3 form-control p-3" :class="classs"
        :value="valprop"
        @input="$emit('update:valprop', $event.target.value)"
        :placeholder="place"
        :type="typee" />


</template>

<script>
export default {
    props:{
        classs:{
            type:String,
            default:''
        },
        typee: {
            type:String
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


    input,textarea{
        color: var(--light) !important;
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
</style>