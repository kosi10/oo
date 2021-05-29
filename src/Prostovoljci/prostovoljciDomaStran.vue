<template>
    <div class = "loginHomePage">

        <div class = "topBarProstovoljci">
            <h1 class="headerHomeVol1">LOKACIJE</h1> 

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
            <div v-for="blog in blogs" v-bind:key="blog" class="for-loop"> 
                <div>
                    <b-button class="homesBtn" v-b-toggle="'accordison-' + blog.username">{{ blog.username }}</b-button>
                    <b-collapse :id="'accordison-' + blog.username" :class="'accordison-' + blog.username">
                        <label class= "HomeNameText">{{ blog.username }}</label>
                        <div>
                            <p @click="onHomeClick(blog.username)" tag="button" class = "btnHomeSelect">Izberi</p>
                        </div>    
                    </b-collapse>
                </div>
            </div>

        
        </div> 
    </div>
</template>

<script>
    import { router } from '../_helpers';
    import { authenticationService } from '../_services';

    export default {
        data: () => ({
             blogs:[]
        }),
        created(){
            this.$http.get('https://druzabnikapi.herokuapp.com/homes').then(function(data){
                this.blogs = data.body;
            })
        },
        methods: {
            odjavaClick(){
                console.log("Odjava");
                authenticationService.logout();
                router.push("/vstopnaStran");
            },
            onHomeClick(nameofHome){
                console.log(nameofHome)
                this.$http.get('https://druzabnikapi.herokuapp.com/homes')
                .then(function(data){
                    var homes = data.body;
                    homes.forEach(home=>{
                        if(home.username == nameofHome){
                            localStorage.removeItem('pickedHome');
                            localStorage.setItem('pickedHome', JSON.stringify(home));
                            router.push('/prostovoljciInfoZaDom')
                        }
                    })
                })
                
            }
        }
    }
</script>



