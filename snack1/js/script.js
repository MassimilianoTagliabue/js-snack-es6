const bici = [
    {name: "bici1", peso: 12},
    {name: "bici2", peso: 7},
    {name: "bici3", peso: 34},
    {name: "bici4", peso: 4}

]

let pesoMinore = bici[0];


for(let i = 0; i<bici.length; i++){

    const currItem = bici[i];
    
    if(bici[i].peso < pesoMinore.peso){
        
        pesoMinore = bici[i];
    }

    
}


console.log(`la bici più leggera è ${pesoMinore.name} con ${pesoMinore.peso}Kg`);
