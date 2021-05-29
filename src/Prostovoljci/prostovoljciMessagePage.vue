<template>
    <div id = "prostovoljciMessageStil">

        <div class = "topBarProstovoljci">
            <h1 class="headerHomeVol">SPOROČILA</h1> 
            
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

        <div class = "underBarProstovoljciChat"> 
            <h2 id="chatTitle">{{naslov}}</h2>

            <div id = "conversation">
                <div v-for="message in messagesDisp" v-bind:key="message" class="for-loop-messages"> 
                    <div v-if="message.fromid == me.id" class="messageRight">
                        
                            {{message.text}}
                        
                    </div>
                    <div v-else class="messageLeft">
                        
                            {{message.text}}
                        
                    </div>
                </div>
            </div>
            <div id = "bottomDiv">
            <form class = "form-inline" @submit.prevent="newMessageSubmit" id = "newMessage" action="placeholder">
                <input type="text" v-model="tekst" id="tekst" name="fname" value="" placeholder="..."><br>
                <input type="submit" id = "tekstPoslji" value="">
            </form>
            </div> 
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
             messagesDisp:[],
             tekst:"",
             me:{},
             to:{},
             naslov:""
            }
        },
        created(){
            this.me = JSON.parse(localStorage.getItem("currentUser"));
            var meId = JSON.parse(localStorage.getItem("currentUser")).id;
            this.to = JSON.parse(localStorage.getItem("pickedHome"));
            var toId = JSON.parse(localStorage.getItem("pickedHome")).id;

            this.naslov = "DOM - " + this.to.username.toUpperCase();

            var messagesSelected = [];
            this.$http.get('https://druzabnikapi.herokuapp.com/messages').then(function(data){
                var messages = data.body;
               
                messages.forEach(message => {
                    if(message.fromid == meId && message.toid == toId || message.fromid == toId && message.toid == meId){
                        messagesSelected.push(message);
                    }
                });
            })
            console.log(messagesSelected);
            this.messagesDisp = messagesSelected;
        },
        methods: {
            odjavaClick(){
                console.log("Odjava");
                authenticationService.logout();
                router.push("/vstopnaStran");
            },
            newMessageSubmit(){
                var message = {
                    "text": this.tekst,
                    "fromid": JSON.parse(localStorage.getItem("currentUser")).id,
                    "toid": JSON.parse(localStorage.getItem("pickedHome")).id
                }
                fetch(`${config.apiUrl}/messages`,requestOptions.post(message))
                    .then(handleResponse)
                    .then( data =>{
                        console.log("Sent: " + data)
                        this.tekst = "";
                        location.reload();
                    });
                
            }
        }
    }
</script>