

// Detyra 1:
// Duke përdorur console.log, console.warn, dhe console.error, shkruaj nga një mesazh për secilin rast: 
// (1) normal — njofto se skripta u ngarkua me sukses; 
// (2) paralajmërim — kujto që faqja është ende në zhvillim (beta); 
// (3) gabim — njofto se lidhja me serverin dështoi. 

console.log("Skripta u ngarkua me sukses.");
console.warn("Kujdes: faqja është ende në zhvillim (beta).");
console.error("Gabim: lidhja me serverin dështoi.");



// Detyra 2:
// Deklaro variabla për një libër në bibliotekë: titulli (string), cmimi (numër), eshteNeDispozicion (boolean).
// Shto një variabël sasiaNeStok e deklaruar pa vlerë (do të mbetet undefined), 
// dhe një dataRikthimit me vlerë qëllimisht null (libri nuk është huazuar ende). 
// Përdor typeof mbi tri prej tyre dhe shfaqi ne console.


let titulli = "Beni ecen vete"
let cmimi = 10.20
let eshteNeDispozicion = true
let sasiaNeStok;
let dataRikthimit = null;

console.log(typeof(titulli))
console.log(typeof(sasiaNeStok))
console.log(typeof(dataRikthimit))



// Detyra 3:
// Një shportë online fillon me çmim 500. Zbrit 20 nga vlera.
// Rrit një variabel me emrin sasia nga 0 me ++ tri herë. Në fund, pa përdorur if, 
// printo (si boolean) nëse çmimi final është më i vogël se 500 dhe sasia është më e madhe se 2.

let shporta = 500;
shporta = shporta - 20;
let sasia = 0;
sasia++;
console.log(sasia);
sasia++;
console.log(sasia);
sasia++;
console.log(sasia);

console.log(shporta < 500 && sasia > 2);


// Detyra 4:
// Çmimi i biletës në kinema varet nga mosha: 
// nën 5 vjeç falas, 5–12 gjysmë çmim (5€), 13–64 çmim normal (10€), 65+ çmim i moshuarve (6€). 
// Deklaro variablen mosha dhe përdor if/else if për të shfaqur çmimin përkatës. 

let mosha = 8;

if (mosha < 5) {
  console.log("Bileta falas");
} else if (mosha <= 12) {
  console.log("Bileta gjysme çmim: 5€");
} else if (mosha <= 64) {
  console.log("Bileta çmim normal: 10€");
} else {
  console.log("Bileta per te moshuar: 6€");
}


// Detyra 5:
// Kërko nga useri (me prompt) shkronjën e notës së tij (A, B, C, D ose F) 
// dhe përdor switch për të shfaqur mesazhin përkatës:
// A ose B → "Punë e shkëlqyer!", 
// C → "Mirë, por ka vend për përmirësim",
// D ose F → "Duhet më shumë praktikë".
// Grupo rastet e ngjashme (grouped cases), dhe shto një default për kur futet diçka e panjohur.

let nota = prompt("Shkruaj shkronjen e notes (A, B, C, D ose F):");

switch (nota) {
  case "A":
  case "B":
    console.log("Pune e shkelqyer!");
    break;
  case "C":
    console.log("Mire, por ka vend per permiresim");
    break;
  case "D":
  case "F":
    console.log("Duhet me shume praktike");
    break;
  default:
    console.log("Shkronje e panjohur");
}


// Detyra 6:
// Deklaro një variabël globale numriIVizitave = 0. 
// Brenda një funksioni regjistroViziten(), rrite numriIVizitave me numriIVizitave++ dhe printoje. 
// Thirre regjistroVizite() tri herë dhe shpjego (si koment) pse vlera vazhdon të rritet nga një thirrje te tjetra
//  - çka tregon kjo për ndryshimin mes variablave globale dhe lokale?

let numriIVizitave = 0;

function regjistroViziten() {
  numriIVizitave++;
  console.log(numriIVizitave);
}

regjistroViziten();
regjistroViziten();
regjistroViziten();

// numriIVizitave vazhdon te rritet sepse eshte variabel GLOBALE - te tria
// thirrjet e regjistroViziten() ndryshojne te njejten variabel, jo ndonje
// kopje te veçante. Nje variabel lokale (e deklaruar brenda funksionit) do
// te "rifillonte" nga e para ne çdo thirrje, sepse do te krijohej dhe do
// te zhdukej brenda vetë funksionit.


// Detyra 7:
// Deklaroni nje variabel: nota (numër) me vlere sipas dëshirës. 
// Shkruani një funksion kontrolloRezultatin, që pranon noten si parametër dhe, duke përdorur if/else, 
// kthen (return) "Kaluar" nëse nota >= 5, përndryshe "Nuk ka kaluar". 
// Thirreni funksionin me disa vlera dhe printoni rezultatin.

function kontrolloRezultatin(nota) {
  if (nota >= 5) {
    return "Kaluar";
  } else {
    return "Nuk ka kaluar";
  }
}

console.log(kontrolloRezultatin(7));
console.log(kontrolloRezultatin(4));
console.log(kontrolloRezultatin(5));
