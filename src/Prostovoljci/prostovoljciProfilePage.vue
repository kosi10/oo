<template>
    <div class = "editProfile">

        <div class = "topBarProstovoljci">
            <h1 class="headerHomeVol">PROFIL</h1>

            <div class="dropdown1">
                <input id="dropcheck" class="dropcheck" type="checkbox">
                <label for="dropcheck" class="dropbtn"></label>
                <div class="dropdown-content">
                    <a href="/prostovoljciDoma">Domovi</a>
                    <a href="/prostovoljciInbox">Sporočila</a>
                    <a href="/prostovoljciProfile">Profil</a>
                    <a @click="odjavaClick">Odjava</a>
                </div>
            </div>
            
        </div>

        <div class = "underBarProstovoljciEditPage"> 

            
            <div class="Slika">
            </div>

            <div class="ImeEdit">
                <input type="ImeEdit-tekst" v-model="username"  id="ImeEdit1" aria-describedby="emailHelp" placeholder=" Ime">
            </div>
            <div class="PriimekEdit">
                <input type="PriimekEdit-tekst" v-model="password"  id="PriimekEdit1" placeholder=" Priimek">
            </div>
            <div class="StarostEdit">
                <input type="StarostEdit-tekst" v-model="username" id="StarostEdit1" aria-describedby="emailHelp" placeholder=" Starost">
            </div>
            <div class="KrajBivanjaEdit">
                <input type="KrajBivanjaEdit-tekst" v-model="password"  id="KrajBivanjaEdit1" placeholder=" Kraj bivanja">
            </div>
            <div class="TelStevilkaEdit">
                <input type="TelStevilkaEdit-tekst" v-model="password"  id="TelStevilkaEdit1" placeholder=" Tel. številka">
            </div>
            <div class="IzobrazbaEdit">
                <input type="IzobrazbaEdit-tekst" v-model="password"  id="IzobrazbaEdit1" placeholder=" Izobrazba, študij, ...">
            </div>
             <div class="OpisEdit">
                <input type="OpisEdit-tekst" v-model="password"  id="OpisEdit1" placeholder=" Opis o sebi...">
            </div>
            

            <!--- TODO: urediti fielde in pullat info od current logged in userja in slika-->

            <br>
            <br>
            <br>
            <br>

          
            <button class='gumb' disabled="loading">
                <span class="spinner-border spinner-border-sm" v-show="loading"></span>
                <span>Shrani</span>
            </button>
    

            <br>

        </div>

    </div>
</template>

<script>
    import config from 'config';
    import { requestOptions, handleResponse } from '@/_helpers';
    import { router } from '@/_helpers';
    import { authenticationService } from '@/_services';
    export default {
        data(){
            return{
             
            }
        },
        created(){
            
        },
        methods: {
            odjavaClick(){
                console.log("Odjava");
                authenticationService.logout();
                router.push("/vstopnaStran");
            },
        }
    }
</script>