<template>
    <aside :class="`${is_expanded ? 'is-expanded':''}`">
        <div class="logo">
            <img src="/src/assets/logo.png" alt="vue" />
        </div>

        <div class="menu-toggle-wrap">
           <button class="menu-toggle" @click="ToggleMenu()">
                <span class="material-icons">keyboard_double_arrow_right</span>   
            </button> 
        </div>

        <h3>
            Menu
        </h3>
        <div class="menu">

            <router-link class="button" to="/home">
                <span class="material-icons">home</span>
                <span class="text">Home</span>
            </router-link>

            <router-link class="button" to="/Calculating">
                <span class="material-icons">edit_calendar</span>
                <span class="text">past prices</span>
            </router-link>

            <router-link class="button" to="/trading">
                <span class="material-icons">query_stats</span>
                <span class="text">trading</span>
            </router-link>

            <router-link class="button" to="/contact">
                <span class="material-icons">email</span>
                <span class="text">Contact</span>
            </router-link>

        </div>

        <div class="flex"></div>

        <div class="menu">
            <router-link class="button" to="/signinup" style="flex:1 1 0;">
                <span class="material-icons">login</span>
                <span class="text">Sign in/up</span>
            </router-link>
        </div>

    </aside>
</template>

<script setup>
import { ref } from 'vue'

const is_expanded = ref(localStorage.getItem("is_expanded") === "true");
const ToggleMenu = () =>{
    is_expanded.value = !is_expanded.value;
    localStorage.setItem('is_expanded',is_expanded.value);
}
</script>

<style lang='scss' scoped>
aside{
    display: flex;
    flex-direction: column;
    background-color: var(--dark);
    color: var(--light);
    width: calc(2rem + 32px);
    min-height: 100vh;
    overflow: hidden;
    padding: 1rem;

    transition: .3s ease-out;

    .logo{
        margin-bottom: 1rem;

        img{
            width: 2rem;
        }
    }

    .menu-toggle-wrap{
        display: flex;
        justify-content: flex-end;
        margin-bottom: 1rem;

        position: relative;
        top: 0;
        transition: .2s ease-out;

        .menu-toggle{
            // transition: 0.2s ease-out;

            .material-icons{
                transition: 0.2s ease-out;
                font-size: 2rem;
                color: var(--light);
            }
            &:hover{
                .material-icons{
                    color: var(--primary);
                    transform: translateX(.5rem);
                }
            }

        }
    }

    h3,.button .text{
        opacity: 0;
        transition: 0.3s ease-out;
    }

    h3{
        color: var(--gray);
        font-size: .875rem;
        margin-bottom: .5rem;
        text-transform: uppercase;
    }

    .flex{
        flex: 1 1 0;
    }

    .menu{
        margin: 0 -1rem;

        .button{
            display: flex;
            align-items: center;
            text-decoration: none;
            padding: .5rem 1rem;
            transition: .2s ease-out;

            .material-icons{
                font-size: 2rem;
                color: var(--light);
                transition: .2s ease-out;
            }
            .text{
                color: var(--light);
                transition: .2s ease-out;
            }

            &:hover,&.router-link-exact-active{
                background-color: var(--dark-alt);
                .material-icons,.text{
                    color: var(--primary);
                }
            }
            &.router-link-exact-active {
                border-right: 5px solid var(--primary);
            }
        }
    }

    &.is-expanded{
        width: var(--sidebar-width);

        .menu-toggle-wrap{
            top:-3rem;
            .menu-toggle{
                transform: rotate(-180deg);
            }
        }
        h3,.button .text{
            opacity: 1;
        }
        .button{
            .material-icons{
                margin-right: 1rem;
            }
        }
    }

    @media (max-width:768px){
        position: fixed;
        z-index: 99;
    }
}
</style>