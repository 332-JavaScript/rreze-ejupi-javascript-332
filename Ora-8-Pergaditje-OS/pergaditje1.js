

// Detyra 1:
// Duke përdorur console.log, console.warn, dhe console.error, shkruaj nga një mesazh për secilin rast: 
// (1) normal — njofto se skripta u ngarkua me sukses; 
// (2) paralajmërim — kujto që faqja është ende në zhvillim (beta); 
// (3) gabim — njofto se lidhja me serverin dështoi. 



// Detyra 2:
// Deklaro variabla për një libër në bibliotekë: titulli (string), cmimi (numër), eshteNeDispozicion (boolean).
// Shto një variabël sasiaNeStok e deklaruar pa vlerë (do të mbetet undefined), 
// dhe një dataRikthimit me vlerë qëllimisht null (libri nuk është huazuar ende). 
// Përdor typeof mbi tri prej tyre dhe shfaqi ne console.


let titulli = "Beni ecen vete"
let cmimi = 10.20
let eshteNeDispozicion = true
let sasiaNeStok = null
console.log(typeof(titulli))
console.log(typeof(cmimi))
console.log(typeof(eshteNeDispozicion))
console.log(typeof(sasiaNeStok))



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


// Detyra 5:
// Kërko nga useri (me prompt) shkronjën e notës së tij (A, B, C, D ose F) 
// dhe përdor switch për të shfaqur mesazhin përkatës:
// A ose B → "Punë e shkëlqyer!", 
// C → "Mirë, por ka vend për përmirësim",
// D ose F → "Duhet më shumë praktikë".
// Grupo rastet e ngjashme (grouped cases), dhe shto një default për kur futet diçka e panjohur.


// Detyra 6:
// Deklaro një variabël globale numriIVizitave = 0. 
// Brenda një funksioni regjistroViziten(), rrite numriIVizitave me numriIVizitave++ dhe printoje. 
// Thirre regjistroVizite() tri herë dhe shpjego (si koment) pse vlera vazhdon të rritet nga një thirrje te tjetra
//  - çka tregon kjo për ndryshimin mes variablave globale dhe lokale?

// Detyra 7:
// Deklaroni nje variabel: nota (numër) me vlere sipas dëshirës. 
// Shkruani një funksion kontrolloRezultatin, që pranon noten si parametër dhe, duke përdorur if/else, 
// kthen (return) "Kaluar" nëse nota >= 5, përndryshe "Nuk ka kaluar". 
// Thirreni funksionin me disa vlera dhe printoni rezultatin.
w9