/*One little, two little, three little Indians
Four little, five little, six little Indians
Seven little, eight little, nine little Indians
Ten little Indian boys.

Ten little, nine little, eight little Indians
Seven little, six little, five little Indians
Four little, three little, two little Indians
One little Indian boy.[1]
*/

let pocet1Vers = 0;
let pocet2Vers = 11
let text;
let indiani1Vers = " "
let indiani2Vers = " "



for (let i = 1; i < 11; i++) {

    pocet1Vers++
    pocet2Vers--
    if (i % 3 !== 0) {

        if (i === 10) {
            text = " little indian boys\n"

        } else {
            text = " little, "

        }
    } else {
        text = " little indians\n "
    }

    indiani1Vers += pocet1Vers + text;
    indiani2Vers += pocet2Vers + text;

}


console.log(indiani1Vers + "\n" + indiani2Vers);