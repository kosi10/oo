<template>
    <div class = "loginDomovi">

        <div class = "topbar"></div>

        <div class = "underbar"> 

            <label class= "prijavaDom">Že imate račun?</label>
            <label class= "prijavaDom1">VPIS</label>

            <form @submit.prevent="handleSubmit">
                <div class="E-mail">
                    <input type="uporabniskoIme" v-model="username" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder=" Uporabniško ime">
                </div>
                <div class="Geslo">
                    <input type="password" v-model="password" id="exampleInputPassword1" placeholder=" Geslo">
                </div>
                <button id="btnPrijava" type="submit">Nadaljuj</button>
            </form>
            <br>
            <label class= "registracija-text">Še nimate računa?</label>
            <form action = "/registracijadom">
                <button id="btnRegistracija" type="submit">Registracija</button>
            </form>
        </div>
        <div style="clear: both;"></div>
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
      password: ""
    };
  },
  methods: {
        handleSubmit () {
            console.log("Logging in " + this.username + " " + this.password)
        authenticationService.loginHome(this.username, this.password)
            .then(
            user => router.push('/nabiralnikdom'),
            error => {
            console.log("error")
            }
            );
          
        }
    }
};
</script>
