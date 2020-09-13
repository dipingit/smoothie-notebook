<template>
  <div class="signup container">
    <form class="card-panel" @submit.prevent="signup">
      <h2 class="center deep-grey-text">Signup</h2>
      <div class="field">
        <label for="email">Email</label>
        <input id="email" type="email" v-model="email">
      </div>
      <div class="field">
        <label for="password">Password</label>
        <input id="password" type="password" v-model="password">
      </div>
      <p v-if="feedback" class="red-text center">{{ feedback }}</p>
      <div class="field center">
        <button class="btn grey">Signup</button>
      </div>
    </form>
  </div>
</template>

<script>
import db from '@/firebase/init'

//to solve console error we need to add these lines
import firebase from '@firebase/app';
require('firebase/auth');

export default {
  name: 'Signup',
  data(){
    return{
      email: null,
      password: null,
      feedback: null,

    }
  },
   methods: {
    signup(){
      if(this.email && this.password){
        this.feedback = null
            firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
            .then(() => {
              this.$router.push({ name: 'Login' })
            })
            .catch(err => {
              this.feedback = err.message
            })
          }
       
      else {
        this.feedback = 'Please fill in all fields'
      }
    }
  }
}
</script>

<style>
.signup{
  max-width: 400px;
  margin-top: 60px;
}
.signup h2{
  font-size: 2.4em;
}
.signup .field{
  margin-bottom: 16px;
}
</style>