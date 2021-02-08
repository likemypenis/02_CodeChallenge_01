
/*********   CODE CHALLENGE 1 **********/
 
/*
Geben Sie über eine Promt-Anforderung eine Zahl ein
Geben Sie über eine Promt-Anforderung eine zweite Zahl ein
Berechnen Sie die Summe der Zahlen.
Geben Sie die Summe der Zahlen in die Konsole aus:
‘Die Summe der Zahlen ist: summe ‘
*/

//************** Variante I ***************/

// Deklaration
let ziffer1, ziffer2;
let zahl1, zahl2, summe;

// Eingabe :: Ziffern
ziffer1 = prompt(" Bitte Zahl 1 eingeben "); // 2
ziffer2 = prompt("Bitte Zahl 2 eingeben "); // 2
console.log(typeof ziffer1);
console.log(typeof ziffer2);

// Typenkonventierung / Ziffer --> Zahl (string --> number)
zahl1 = parseInt(ziffer1);
zahl2 = parseInt(ziffer2);
console.log(typeof zahl1);
console.log(typeof zahl2);

// Berechnung :: Summe
summe = (zahl1 + zahl2);
console.log(" Die Summe ist: " + summe);



