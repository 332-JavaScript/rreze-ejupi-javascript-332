

function hello() {
    console.log("Hello everyone!")
}

let text = "Pershendetje!"


function localV(){
    let mesazhi = "Hello!!!" //variabel lokale
    console.log(text)
}



hello();
hello();
hello();
hello();
hello();
hello();

localV();

let user = "Shkumbin";


function changeVariable(){
    
    user = "Asdren"

    let message = "Hello " + user;
    console.log(message);
}

console.log(user)

changeVariable();

console.log(user)


function mbledhja(a, b){
    let shuma = a + b;
    console.log("Shuma eshte: " + shuma);
}


console.log(3+5);

let shuma = mbledhja(3,5);

function mbledhja1(a, b){
    let shuma = a + b;
    return shuma
}

let shuma1 = mbledhja1(3,4);

console.log(shuma);
console.log(shuma1);

//KORREKT
console.log(pershendet("Rreze"));


//Function Declaration
function pershendet(emri){
    return "Pershendetje " + emri;
}
//KORREKT
console.log(pershendet("Rreze"));

//GABIM
console.log(pershendetje("Rreze"));

//Function Expression
const pershendetje = function(emri){
    return "Pershendetje " + emri;
}

//Arrow Function 

const sum = (a , b) => a + b;

//FUNKSION QE BEN SHUMEZIMIN E 3 NUMRAVE 



// Keni një array years që përmban numrat ose vitet: 1990, 1967, 2000
// Le të krijohet një funksion calcAge i cili pranon një parameter brenda tij që mund të emërtohet birthYear.
// Të krijohet logjika që funksioni të kthejë “return” vlerën :
// “viti i tanishëm - birthYear”
// Pastaj të krijohen 3 variabla: age1, age2, age3
// Brenda këtyre variablave të thirret funksioni calcAge me parametër duke u bazuar në elementet e array. p.sh calcAge(years[0]) 

let years = [1990, 1967, 2000, 2013, 2014, 2010, 2005];

function calcAge(birthYear){
    return 2026 - birthYear
}

let age1 = calcAge(years[2]);
let age2 = calcAge(years[5]);
let age3 = calcAge(years[4]);

console.log(age1);
console.log(age2);
console.log(age3);

