<template>
<div class = "loginProstovoljci">

    <div class = "topbar"></div>

    <div class = "underbar"> 

        <label class= "prijavaProstovoljci">Že imate račun?</label>
        <label class= "prijavaProstovoljci1">VPIS</label>
            
        <form @submit.prevent="handleSubmit">
            <div class="E-mailRegistracijaProstovoljci">
                <input type="uporabniskoIme" v-model="username"  id="exampleInputEmail12" aria-describedby="emailHelp" placeholder=" Uporabniško ime">
            </div>
            <div class="GesloRegistracijaProstovoljci">
                <input type="password" v-model="password"  id="exampleInputPassword12" placeholder=" Geslo">
            </div>
            <button id ="btnPrijava1" type="submit">Nadaljuj</button>
        </form>
        <br>
        <label class= "prijavaProstovoljci2">Še nimate računa?</label>
        <form action = "registracijaProstovoljci">
            <button id = "btnRegistracija1" type="submit">Registracija</button>
        </form>
    </div>
</div>
</template>

<script>
import { router } from '../_helpers';
import { authenticationService } from '../_services';

export default {
  name: "App",
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
        handleSubmit () {
            //console.log("Logging in " + this.username + " " + this.password)
        authenticationService.login(this.username, this.password)
            .then(
            user => router.push('/prostovoljciDoma'),
            error => {
            console.log("error")
            }
            );
          
        }
    }
};
</script>
