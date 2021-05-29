<template>
    <div class = "urejanjeTerminov">
        <div class = "topBarProstovoljci">
            <h1 class="headerHomeVol">Dodaj termin</h1> 
            <div class="dropdown1">
                <input id="dropcheck" class="dropcheck" type="checkbox">
                <label for="dropcheck" class="dropbtn"></label>
                <div class="dropdown-content">
                    <a href="/nabiralnikdom">Sporočila</a>
                    <a href="/profilnastrandom">Profil</a>
                    <a href="/domdolocitermin">Termini</a>
                    <a @click="odjavaClick">Odjava</a>
                </div>
            </div>

        </div>
        <div class = "underBarProstovoljci">
            <div class="datePick">
                <input style="font-size: 2rem" type="date" v-model="date" id="date" placeholder=" 15:00">
                <div>
                    {{ date }}
                </div>
            </div> 

            <div class="timeInput">
                <input style="font-size: 2rem" type="time" v-model="time" id="time" placeholder=" 15:00">
                <div>
                    {{ time }}
                </div>
            </div>
            <div ><button class="dodajTermin" @click="dodajTermin()">DodajTermin</button></div>
            
            
        </div>

    </div>
</template>

<script>

import { router } from '@/_helpers';
import { authenticationService } from '@/_services';

    export default {

        data: () => ({
            date: '',
            time: '',
            currentUser: ''

        }),
        created(){
            this.currentUser= JSON.parse(localStorage.getItem("currentUser"));
        },
        methods: {
            dodajTermin(){
                console.log(this.date, "is my date and", this.time, "is my time and my current user is", this.currentUser.id)
                this.$http.post('https://druzabnikapi.herokuapp.com/events',{
                    appointmentDateTime: this.date,
                    homeid: this.currentUser.id,
                    times: this.time
                })
                router.push('/domdolocitermin')
            },
            odjavaClick(){
                console.log("Odjava");
                authenticationService.logout();
                router.push("/vstopnaStran");

            }
        }
    }
</script>
