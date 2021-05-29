<template>
    <div class = "loginHomePage">

        <div class = "topBarProstovoljci">
            <h1 class="headerHomeVol">Sporočila</h1> 

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

        <div class = "underBarProstovoljci"> 
            <h2>Pogovori</h2>
            <div v-for="contact in contacts" v-bind:key="contact" class="for-loop-contacts"> 
                <div>
                    <b-button @click="contactClick(contact)" class="contactBtn" v-b-toggle="'gumbkontakt-' + contact.id">{{ contact.username }}</b-button>
                </div>
            </div>
        </div> 
    </div>
</template>

<script>
    import { router } from '@/_helpers';
    import { authenticationService } from '@/_services';
    
    export default {
        data: () => ({
             contacts:[]
        }),
        created(){
            var currentUser= JSON.parse(localStorage.getItem("currentUser"));
            console.log(this.currentUser);

            this.$http.get('https://druzabnikapi.herokuapp.com/messages').then(function(data){
                var messages = data.body;
                var currentid = currentUser.id;
                var newContacts = [];
                var newContactsDisp = [];
                //console.log(messages);
                messages.forEach(function(message) {
                    if(message.fromid == currentid){
                        
                        var novKontakt = message.toid;
                        if(!newContacts.includes(novKontakt)){
                            newContacts.push(novKontakt);
                        }
                    }
                })
                //id-ji kontaktov v newContacts
                //console.log(newContacts);
                this.$http.get('https://druzabnikapi.herokuapp.com/homes').then(function(data){
                    var homes = data.body;
                    homes.forEach(home=>{
                        if(newContacts.includes(home.id)){
                            newContactsDisp.push(home);
                        }
                    })
                })
                
                this.contacts = newContactsDisp;
                console.log(newContactsDisp);
            })
        },
        methods: {
            contactClick(contact){
                localStorage.removeItem('pickedHome');
                localStorage.setItem('pickedHome', JSON.stringify(contact));
                router.push('/prostovoljciMessage')
            },
            odjavaClick(){
                console.log("Odjava");
                authenticationService.logout();
                router.push("/vstopnaStran");
            }
        }
    }
</script>