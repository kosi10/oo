<template>
  <div class = "registrationPageDomove">
    <div class = "topbar"></div>
    <div class = "underbar">
        <label class = "registracijaDom">REGISTRACIJA</label>
        <form @submit.prevent="handleSubmit">
            <!-- ime doma upokojencev -->
            <div class = "registacijaImeDom">
                 <input type = "registracijaImeDom1" v-model="username" id = "exampleRegistracijaImeDom1" aria-describedby="registracijaImeDomHelp" placeholder=" Uporabniško ime">
            </div>

           <!--E-postni naslov doma upokojencev -->
            <div class = "registracijaPostniNaslovDom">
                 <input type = "registracijaPostniNaslovDom1"  v-model="address" id = "exampleRegistracijaPostniNaslovDom1" aria-describedby="registracijaPostniNaslovDomHelp" placeholder=" e-naslov">
            </div>

            <!--geslo doma upokojencev -->
            <div class = "registracijaGesloDom">
                 <input type = "registracijaGesloDom1" v-model="password" id = "exampleRegistracijaGesloDom1" aria-describedby="registracijaGesloDomHelp" placeholder=" Geslo">
            </div>
             <label class = "pogojiUporabe">S klikom gumba "Nadaljuj" se uporabnik strinja s pogoji uporabe.</label>
             <div>
               <button id="btnRegistracijaDom" type="submit">Nadaljuj</button>
            </div>
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
      password: "",
      address: ""
    };
  },
  methods: {
        handleSubmit () {
          var home = 
          {
              "username": this.username,
              "address": this.address,
              "password": this.password
          }
          authenticationService.registerHome(home).then( data =>{
            console.log("done")
            authenticationService.loginHome(this.username, this.password)
                .then(
                    home => router.push('/nabiralnikdom'),
                    error => {
                      console.log("error")
                    }
                );
          });
        }
    }
};
</script>