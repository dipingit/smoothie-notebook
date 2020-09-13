<template>
    <div class="navbar">
        <nav class="nav-extended grey darken-1">
            <div class="nav-content">
                <router-link :to="{ name: 'Index' }">
                <span class="nav-title">Smoothie Notebook</span>
                </router-link>
                <ul class="right">
                    <li v-if="!user"><router-link :to="{ name: 'Signup' }">Signup</router-link></li>
                    <li v-if="!user"><router-link :to="{ name: 'Login' }">Login</router-link></li>
                    <li v-if="user">{{user.email}}</li>
                    <li v-if="user"><a @click="logout">Logout</a></li>
                </ul>
                <a href="" class="btn-floating btn-large halfway-fab pink">
                    <router-link :to="{name: 'AddSmoothie'}">
                    <i class="material-icons">add</i>
                    </router-link>
                    </a>
              
            </div>
        </nav>
    </div>
</template>

<script>
import firebase from '@firebase/app';
require('firebase/auth');
export default {
    name: 'Navbar',

    data(){
        return{

            user: null
        }
    },

    methods:{

        logout(){
            firebase.auth().signOut().then(()=> {
            this.$router.push({name: 'Login'})
        })

        }
    },

    created(){

        firebase.auth().onAuthStateChanged((user) => {
            if(user){
                this.user = user
            }
            else{
                this.user = null
            }
        })
    }
}
</script>

<style>
.navbar nav{
  padding: 0 20px;
}
.navbar .right{
    margin-top: 40px;
}
</style>