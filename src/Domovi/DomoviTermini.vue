<template>
    <div class = "urejanjeTerminov">
        <div class = "topBarDomovi">
            <h1 class="headerHome">Termini</h1> 
            
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

        <div class = "underBarHome"> 
            {{ create2DList(blogs,currentUser.id) }}
            
            <div class ="edit-pic" @click="editDates()">
                <div class="dodajTerminText">Dodaj termin</div>
            </div>
            <br>
            <br>
            <br>

            <div v-for="(date, index) in listDates" v-bind:key="date" class="for-loop"> 
                
                <div>
                    <b-button class="homesBtn" v-b-toggle="'accordison-' + date">{{ dateSplit(date) }}</b-button>
                    <b-collapse :id="'accordison-' + date" class = "dropDownTermini">
                        <div v-for="time in listTimes[index]" v-bind:key="time">
                            <button  id = "btnIzbiraTermina"  type="submit">{{ time }}</button>
                        </div>
  
                    </b-collapse>
                </div>
            </div>
        </div>


    </div>
</template>

<script>
    import { router } from '@/_helpers';
    export default {
        data: () => ({
             blogs:[],
             listDates:[],
             listTimes: [],
             currentUser: ""

        }),
        created(){
            this.$http.get('https://druzabnikapi.herokuapp.com/events').then(function(data){
                this.blogs = data.body;
            })
            this.currentUser= JSON.parse(localStorage.getItem("currentUser"));
        },
        methods: {
            odjavaClick(){
                console.log("Odjava");
                authenticationService.logout();
                router.push("/vstopnaStran");
            },
            dateSplit(date){
                var res = date.split("T");
                var res2 = res[0].split("-");
                var res3 = res2[2] + "." + res2[1] + "." + res2[0];
                return res3
            },
            create2DList(data,homeID){
                var listOfDates = []
                var i;
                for(i = 0; i < data.length; i++){
                    if(data[i].homeid == homeID){
                        if(!listOfDates.includes(data[i].appointmentDateTime)){
                            listOfDates.push(data[i].appointmentDateTime)
                        }
                    }
                }

                var arrayWithTimes = []
                var times = []
                var j;
                for(j = 0; j < listOfDates.length; j++){
                    for(i = 0; i < data.length; i++){
                        if(data[i].homeid == homeID){
                            if (data[i].appointmentDateTime == listOfDates[j]){
                                if(!times.includes(data[i].times)){
                                    times.push(data[i].times)
                                }
                            } 
                        }
                    }
                    arrayWithTimes.push(times)
                    times = []
                }
                this.listTimes = arrayWithTimes
                this.listDates = listOfDates
                
            },
            editDates(){
                router.push('/addDate')
            }
        }
    }
</script>
