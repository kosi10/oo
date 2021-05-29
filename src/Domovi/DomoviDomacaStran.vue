<template>
    <div class = "loginHomePage">

        <div class = "topBarDomovi">
            <h1 class="headerHome">Domovi</h1> 

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

        <div class = "underbar"> 


            <p>
                Dummy text
            </p>

        </div>
    </div>
</template>


<script>
    import { router } from '@/_helpers';
    import { authenticationService } from '@/_services';
    export default {
        data(){
            return{
             
            }
        },
        methods: {
            odjavaClick(){
                console.log("Odjava");
                authenticationService.logout();
                router.push("/vstopnaStran");
            }
        }
    }
</script>