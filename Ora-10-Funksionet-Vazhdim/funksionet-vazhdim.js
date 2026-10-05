let emri = "filan"; //VARIABEL GLOBALE
console.log(emri);

function hello(){
    let emri1= "fisteku"; //VARIABEL LOKALE
    console.log("Hello everyone" + emri)
    console.log(emri1);
}

hello()
hello()




let nr1 = 5;
let nr2 = 6;
let nr3= 7;

console.log(nr1+nr2);
console.log(nr2+nr3);
console.log(nr3+nr1);

function shuma(a , b){
    let shuma = a + b;
    console.log(shuma)
}

shuma(nr1, nr2);
shuma(nr2,nr3);
shuma(nr3,nr1);


function fjalia(emri, mbiemri, mosha){
    console.log("Une jam " + emri + " "+ mbiemri + " dhe jam " + mosha + " vjecare!")
}

fjalia("Rreze", "Ejupi", 21);

//Une jam Filan Fisteku dhe jam 50 vjecare

fjalia("Filan", "Fisteku", 50);


function mesatarja(a,b,c){
let shuma = a +b+c;
console.log(shuma);
let mesatarja = shuma / 3;
console.log(mesatarja);
}

mesatarja(834,636,323);


