/*DÚ1: Výplata
Spočítejte svůj měsíční příjem víte-li, že pracujete 7 hodin denně se mzdou 265 Kč na hodinu. Řekněme, že měsíc má 21 pracovních dní.
Pokud pracujete na živnostenský list, můžete si odečíst 60% příjmů jako paušál a ze zbytku zaplatíte 15% daň. Spočítejte jak velkou daň zaplatíte ze své výplaty. Pomocí funkce Math.floor zaokrouhlete výsledek dolů na celé koruny.*/


    let vyplata = 7 * 265 * 21 
    let vyplataPoOdecteniPausalu = vyplata - (vyplata * 0.6);
    let dan = Math.floor(vyplataPoOdecteniPausalu * 0.15);

    console.log("Moje hrubá mzda: " + vyplata);
    console.log("Základ pro odečtění dáně z příjmu: " + vyplataPoOdecteniPausalu);
    console.log ("Zaplatím na daních: " + dan +"\n");

/*DÚ2: Délka filmu
V programu kin se často uvádí délka filmu v minutách. Například rozšířená verze filmu Pán prstenů: Dvě věže trvá 223 minut. My bychom ovšem délku filmu raději věděli v hodinách a minutách. Za použití funkcí a operátorů z této lekce spočítejte, kolik hodin a minut trvá film Pán prstenů: Dvě věže.
HINT: Zbytek po dělení %*/

let delkaFilmuVminutach = Math.floor(223 / 60) +" hodin "+ 223 % 60 +" minut";
console.log("Délka filmu 'Dvě Věže' je: " + delkaFilmuVminutach);

/*DÚ3: Email
Vytvořte řetězec obsahující vaši e-mailovou adresu.
Sestavte emailovou adresu tak, že sečtete dohromady vaše křestní jméno, znak tečka, vaše příjmení a koncovku @mujmail.com.*/

let mujMail = "anna" + "." + "bezverkhnia" + "@mujmail.com";
console.log(mujMail)