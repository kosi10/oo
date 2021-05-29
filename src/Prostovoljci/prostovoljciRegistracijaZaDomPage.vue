<template>
    <div>
        <h1>Rezerviraj</h1>

         <form action="/prostovoljciInfoZaDom">
            <div class="form-group">
            <button class="btn btn-primary" :disabled="loading">
                <span class="spinner-border spinner-border-sm" v-show="loading"></span>
                <span>Nazaj</span>
            </button>
            </div>
        </form>

        <form>
            <div class="form-group">
             <label for="Porocilo">Porocilo</label>
             <input name="Porocilo" v-model="firstName" placeholder="Porocilo">
            </div>
        </form>

        <form action="/prostovoljciInbox">
            <div class="form-group">
            <button class="btn btn-primary" :disabled="loading">
                <span class="spinner-border spinner-border-sm" v-show="loading"></span>
                <span>Oddaj</span>
            </button>
            </div>
        </form>

    </div>
</template>