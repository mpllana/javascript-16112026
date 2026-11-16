// verifier si un n de carte b est valide
/*
4111-1111-1111-1111 : pas valide y a des tirets 
4111 1111 1111 111 :manque de digit 
4111 1111 1111 1112 :dernier chiffre faux
5555 5555 5555 4434 :un chiffre n'est pas bon 
4111 1111 1111 1111 :valide
5555 5555 5555 4444 :valide

Algorithme de luhn 

1. parcourir de droite a gauche 1.bis ignorer les carcateres non numeriques 
2. doubler (x2) un chiffre sur deux , en commancant par l'avant dernier soit le deuxieme partant de droite 
3. si un chiffre double depasse 9, on soustrait 9
4. faire la somme de tous les chiffres 
5. si la somme est un multiple de 10 alors le numero est valide 
*/

// pour lire un carcatere de la chaine :
let c = 'abcdefgh';
for (let i=0; i<8; i++) {
    console.log( c.substring(i, i+1))
}

// lit a l'envers et on dit 7 pcq le comptage se fait de 0 1 2 etc 
let c = 'abcdefgh';
for (let i=c.length; i>=0; i--) {
    console.log( c.substring(i, i+1))
}
console.log( somme%10==0?"carte invalide": "carte invalide ");


const numero = "5555 5555 5555 4444";
for (i=numero.length -1; i>=0; i--) {
    let car = numero.substring(i,i+1)
    if ("0123456789".indexOf(car))
    console.log(i, car)
}
let car = "3";
console.log("0123456789".indexOf(car));
// correction sur discord 
