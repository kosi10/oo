<template>
    <div id = "prostovoljciMessageStil">

        <div class = "topBarProstovoljci">
            <h1 class="headerHomeVol">O DOMU</h1> 
            
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

        <div class = "underBarDomoviEditPage"> 

            <br>

            <div class="ImeEdit12">
                <textarea  rows="10" cols="30" v-model="text" id="exampleInputEmail1"  placeholder="Opis o domu ..."></textarea>
            </div>

            <br>
          
            <form @submit.prevent="newMessageSubmit">
                <div class="form-group">
                <button class="btnshranidesc" :disabled="loading">
                    <span class="spinner-border spinner-border-sm" v-show="loading"></span>
                    <span>Shrani</span>
                </button>
                </div>
            </form>

            <br>


        </div>
    </div>
</template>

<script>
    import config from 'config';
    import { requestOptions, handleResponse } from '../_helpers';
    import { router } from '../_helpers';
    import { authenticationService } from '../_services';
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
            newMessageSubmit(){
                router.push("/domdolocitermin");
            }
        }
    }
</script>