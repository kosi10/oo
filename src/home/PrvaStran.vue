<template>
    <div class = "prvaStranStil">
        
        <div class = "topbar"></div>

        <div class = "underbar">
            
            <p id="descriptionText">Povezujemo prostovoljce z več kot 20 domovi za starejše.</p>
            
            <p id="descriptionText1">Nadaljujte kot</p>

            <form id = "prvaForm1" action="/prostovoljec">
                <div class="form-group">
                <button id="prvaStranButton1" :disabled="loading">
                    <span class="spinner-border spinner-border-sm" v-show="loading"></span>
                    <span>Prostovoljci</span>
                </button>
                </div>
            </form>
            <form id = "prvaForm2" action="/prijavadom">
                <div class="form-group">
                <button id="prvaStranButton2" :disabled="loading">
                    <span class="spinner-border spinner-border-sm" v-show="loading"></span>
                    <span>Domovi</span>
                </button>
                </div>
            </form>
        </div>

    </div>
</template>