const squadre = [

    {name: "", punti: 0, falli:0},
    {name: "", punti: 0, falli:0},
    {name: "", punti: 0, falli:0},
    {name: "", punti: 0, falli:0}

];



//creazione squadre
for(let i=0; i<squadre.length; i++){

    const nomeSquadra = prompt("inserisci il nome della squadra di calcio");
    squadre[i].name = nomeSquadra;

    const puntiRandom = Math.floor(Math.random() * 10 + 1 ) ;
    squadre[i].punti = puntiRandom;

    const falliRandom = Math.floor(Math.random() * 10 + 1 ) ;
    squadre[i].falli = falliRandom;
 
}

console.log(squadre);



//nomi delle squadre con i falli
const nomiFalli = [];

for(let i=0; i<squadre.length; i++){

    const currItem = squadre[i];

    nomiFalli.push(currItem.name, currItem.falli);
}
 
   
console.log(nomiFalli);
