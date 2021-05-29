<template>
    <div>
        <h1>Urejanje terminov za obsike</h1>
        
        <br>

    <div class="d-flex flex-row bd-highlight mb-3">
        <div class="p-2 bd-highlight">
            <div class="card" style="width: 18rem;">
                <div class="card-header">
                    Izberi Datum
                </div>
                <ul class="list-group list-group-flush">
                    <div class="form-group">
            <input type="chat" class="form-control" id="chat" placeholder="Vnesi Uro">
        </div>
                </ul>
            </div>
        </div>
        
        
    </div>

    <form action="/domdolocitermin">
        <button type="submit" class="btn btn-primary">DodajTermin</button>
    </form>

    <br>

    <form action="/domdolocitermin">
        <button type="submit" class="btn btn-primary">Nazaj</button>
    </form>
    
    



    </div>
</template>
