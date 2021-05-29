<template>
    <div class = "loginHomePage">

        <div class = "topBarProstovoljci">
            <h1 class="headerHomeVol">O DOMU</h1> 

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

        <div class = "underBarIzbiraDoma">

                <div class= "HomeNameText">
                    <div class="homeIzbiraText">
                    <label>{{pickedHomename}}</label>
                    </div>
                    <br>
                    <div class="homeDescription">
                        <label >{{pickedHomeDescription}}</label>
                    </div>

                    <div class="btnODomu">

                            <form @submit.prevent="contactClick">
                                <button class="btnHomeSelection5" >Pošlji sporočilo</button>
                            </form>
                        
                        

                        <form action="/terminiDoma">
                            <button class="btnHomeSelection5">
                                Izberi termin
                            </button>
                        </form>
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
             blogs:[],
             pickedHome,
             pickedHomename,
             pickedHomeDescription
        }),
        created(){
            this.$http.get('https://druzabnikapi.herokuapp.com/homes').then(function(data){
                this.blogs = data.body;
            })

            this.pickedHome= JSON.parse(localStorage.getItem("pickedHome"));
            this.pickedHomename = this.pickedHome.homeName;
            this.pickedHomeDescription = this.pickedHome.description;
            
        },
        methods: {
            contactClick(){
                console.log("click redirect")
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