<template>
  <div class="registrationPageProstovoljci">
    <div class = "topbar"></div>
    <div class = "underbar">
      <label class = "registracijaProstovoljci1">REGISTRACIJA</label>
      <form @submit.prevent="handleSubmit">
        <div class = "UporabniskoIme">
          <input type = "uporabniskoIme" v-model="username" id = "exampleUporabniskoIme1" aria-describedby="uporabniskoImeHelp" placeholder=" Uporabnisko ime">
        </div>
        <div class = "Ime">
          <input type = "Ime1" v-model="address" id = "exampleIme1" aria-describedby="ImeHelp" placeholder=" e-naslov">
        </div>
        <div class="GesloProstovoljci">
          <input type="GesloProstovoljci1" v-model="password" id="exampleGesloProstovoljci1" placeholder=" Geslo">
        </div>
        <label class = "pogojiUporabe">S klikom gumba "Nadaljuj" se uporabnik strinja s pogoji uporabe.</label>
        <button id="btnRegistracijaProstovoljci" type="submit">Nadaljuj</button>
      </form>
      <br>
    </div>
  </div>
</template>

<script>
import { router } from '@/_helpers';
import { authenticationService } from '@/_services';

export default {
  name: "App",
  data() {
    return {
      username: "",
      password: "",
      address: ""
    };
  },
  methods: {
        handleSubmit () {
          var user = 
          {
              "username": this.username,
              "address": this.address,
              "password": this.password
          }
          authenticationService.registerUser(user).then( data =>{
            console.log("done")
            authenticationService.login(this.username, this.password)
                .then(
                    user => router.push('/prostovoljciDoma'),
                    error => {
                      console.log("error")
                    }
                );
          });
        }
    }
};
</script>