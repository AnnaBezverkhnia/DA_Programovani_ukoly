
let pocetIndianu = 0;
let skupinaIndianu;
let pisnicka = " ";

for (let poradiSkupinyIndianu = 0; poradiSkupinyIndianu < 21; poradiSkupinyIndianu ++) {

    if (poradiSkupinyIndianu === 10) {
        pocetIndianu ++;
        skupinaIndianu = pocetIndianu + " little indian boys\n\n";
        pisnicka += skupinaIndianu + " ";
     
    } else if (poradiSkupinyIndianu < 11 && poradiSkupinyIndianu % 3 === 0 && poradiSkupinyIndianu !== 0)  {
        pocetIndianu++;
        skupinaIndianu = pocetIndianu + " little indians\n";
        pisnicka += skupinaIndianu + " ";

    } else if  (poradiSkupinyIndianu < 11 && poradiSkupinyIndianu % 3 !== 0) {
        pocetIndianu ++;
        skupinaIndianu = pocetIndianu + " little";
        pisnicka += skupinaIndianu + " ";


    } else if (poradiSkupinyIndianu === 11) {
        skupinaIndianu = pocetIndianu + " " + "little";
        pisnicka += skupinaIndianu + " ";
        
    } else if (poradiSkupinyIndianu === 20) {
        pocetIndianu --
        skupinaIndianu = pocetIndianu + " little indian boy";
        pisnicka += skupinaIndianu + " ";
        

    } else if (poradiSkupinyIndianu > 11 && poradiSkupinyIndianu % 3 === 1)  {
        pocetIndianu--;
        skupinaIndianu = pocetIndianu + " little indians\n";
        pisnicka += skupinaIndianu + " ";
        
    } else if  (poradiSkupinyIndianu > 11 && poradiSkupinyIndianu % 3 !== 1) {
        pocetIndianu --;
        skupinaIndianu = pocetIndianu + " little";
        pisnicka += skupinaIndianu + " ";
    }
 

}

console.log(pisnicka)

