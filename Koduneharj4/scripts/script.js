 let autod = []; 
        

 let autoBmw = {
        "Mark": "BMW",
        "Aasta" : 2005,
        "Hind": "3500€",
        "Värv": "Must",
        "Saadavus": true,
    };

 let autoAudi = {
        "Mark": "Audi",
        "Aasta" : 2018,
        "Hind": "10000€",
        "Värv": "Must",
        "Saadavus": false,
    };

 let autoToyota = {
        "Mark": "Toyota",
        "Aasta" : 2021,
        "Hind": "25000€",
        "Värv": "Valge",
        "Saadavus": true,
    };

 let autoFord = {
        "Mark": "Ford",
        "Aasta" : 2019,
        "Hind": "15550€",
        "Värv": "Hall",
        "Saadavus": true,
    };

 let autoCitroen = {
        "Mark": "Citroen",
        "Aasta" : 2018,
        "Hind": "25000€",
        "Värv": "Hall",
        "Saadavus": false,
    };

 let autoKia = {
        "Mark": "Kia",
        "Aasta" : 2018,
        "Hind": "17500€",
        "Värv": "Punane",
        "Saadavus": true,
    };

 let autoSubaru = {
        "Mark": "Subaru",
        "Aasta" : 2010,
        "Hind": "10000€",
        "Värv": "Roheline",
        "Saadavus": true,
    };

 let autoNissan = {
        "Mark": "Nissan",
        "Aasta" : 2003,
        "Hind": "2500€",
        "Värv": "Kollane",
        "Saadavus": false,
    };



   autod.push(autoBmw, autoAudi, autoToyota, autoKia, autoSubaru, autoFord, autoNissan, autoSubaru);

/*
console.log("Autod ja nende omadused.");
console.log("-----------------------")
autod.forEach(function(autod) {
       if(autod.Saadavus) {
              console.log("Mark: " + autod.Mark);
              console.log("Aasta: " + autod.Aasta);
              console.log("Hind: €" + autod.Hind);
              console.log("Värv: " + autod.Värv);
              console.log("Saadavus: Jah\n");
       }

       else {
              console.log("Mark: " + autod.Mark);
              console.log("Aasta: " + autod.Aasta);
              console.log("Hind: €" + autod.Hind);
              console.log("Värv: " + autod.Värv);
              console.log("Saadavus: Ei\n");
       }
} );

*/

console.log("+++++++++++++++++");

console.log("Autod ja nende omadused.");
console.log("-----------------------")
autod.forEach(function(autod) {
       
              console.log("Mark: " + autod.Mark);
              console.log("Aasta: " + autod.Aasta);
              console.log("Hind: €" + autod.Hind);
              console.log("Värv: " + autod.Värv);
              console.log("Saadavus:  " + (autod.Saadavus ? "Jah" : "Ei"));
/* if(true) {
       ...
} else {
       ...
}
       ifloogika ? "IF TRUE" : "IF FALSE"

*/


console.log("-------------")







       });


