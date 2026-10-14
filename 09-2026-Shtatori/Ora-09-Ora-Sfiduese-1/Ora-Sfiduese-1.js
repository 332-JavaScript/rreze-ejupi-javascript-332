// Detyra 1:
// Në një aplikacion loje, shkruaj nga një mesazh për secilin rast duke përdorur
// console.log, console.warn, dhe console.error:
// (1) normal — njofto se lojtari u lidh me sukses;
// (2) paralajmërim — kujto që bateria e kontrolluesit është nën 20%;
// (3) gabim — njofto se ruajtja e progresit dështoi.

console.log("Lojtari u lidh me sukses.");
console.warn("Kujdes: bateria e kontrolluesit është nën 20%.");
console.error("Gabim: ruajtja e progresit dështoi.");



// Detyra 2:
// Deklaro variabla për një student: emri (string), mosha (numër), eshteStudent (boolean).
// Shto një variabël adresaEmail e deklaruar pa vlerë (do të mbetet undefined),
// dhe një numriTelefonit me vlerë qëllimisht null (nuk është dhënë ende).
// Përdor typeof mbi tri prej tyre dhe shfaqi ne console.

let emri = "Elira Krasniqi"
let mosha = 21
let eshteStudent = true
let adresaEmail;
let numriTelefonit = null;

console.log(typeof(emri))
console.log(typeof(adresaEmail))
console.log(typeof(numriTelefonit))



// Detyra 3:
// Një parking fillon me 50 vende të lira.  Deklaro variablen vendetLira me ate vlere. 
// Tre makina hyjnë njëra pas tjetrës. Për secilën, zvogëlo vendetLira me operatorin 
// decrement (--) dhe printo vlerën pas çdo hyrjeje.

let vendetLira = 50;
let esteFundjave = true;

vendetLira--;
console.log(vendetLira);
vendetLira--;
console.log(vendetLira);
vendetLira--;
console.log(vendetLira);




// Detyra 4:
// Çmimi i dërgesës varet nga pesha e paketës (në kg):
// nën 1kg falas, 1–5kg 3€, 5–20kg 7€, mbi 20kg 15€.
// Deklaro variablen pesha dhe përdor if/else if për të shfaqur çmimin përkatës.

let pesha = 3;

if (pesha < 1) {
  console.log("Dergesa falas");
} else if (pesha <= 5) {
  console.log("Cmimi i dergeses: 3€");
} else if (pesha <= 20) {
  console.log("Cmimi i dergeses: 7€");
} else {
  console.log("Cmimi i dergeses: 15€");
}



// Detyra 5:
// Kërko nga useri (me prompt) ditën e javës (Hene, Marte, Merkure, Enjte, Premte, Shtune, Diel)
// dhe përdor switch për të shfaqur mesazhin përkatës:
// Hene deri Premte → "Dite pune",
// Shtune ose Diel → "Fundjave",
// grupo rastet e ngjashme (grouped cases), dhe shto një default për kur futet diçka e panjohur.

let dita = prompt("Shkruaj diten e javes:");

switch (dita) {
  case "Hene":
  case "Marte":
  case "Merkure":
  case "Enjte":
  case "Premte":
    console.log("Dite pune");
    break;
  case "Shtune":
  case "Diel":
    console.log("Fundjave");
    break;
  default:
    console.log("Dite e panjohur");
}



// Detyra 6:
// Deklaro një variabël globale totalShitje = 0.
// Brenda një funksioni regjistroShitjen(), rrite totalShitje me totalShitje++ dhe printoje.
// Thirre regjistroShitjen() tri herë dhe shpjego (si koment) pse vlera vazhdon të rritet nga një thirrje te tjetra
//  - çka tregon kjo për ndryshimin mes variablave globale dhe lokale?

let totalShitje = 0;

function regjistroShitjen() {
  totalShitje++;
  console.log(totalShitje);
}

regjistroShitjen();
regjistroShitjen();
regjistroShitjen();

// totalShitje vazhdon te rritet sepse eshte variabel GLOBALE - te tria
// thirrjet e regjistroShitjen() ndryshojne te njejten variabel, jo ndonje
// kopje te veçante. Nje variabel lokale (e deklaruar brenda funksionit) do
// te "rifillonte" nga e para ne çdo thirrje, sepse do te krijohej dhe do
// te zhdukej brenda vetë funksionit.



// Detyra 7:
// Deklaroni nje variabel: sasia (numër) me vlere sipas dëshirës.
// Shkruani një funksion kontrolloStokun, që pranon sasine si parametër dhe, duke përdorur if/else,
// kthen (return) "Rimbush stokun" nëse sasia < 10, përndryshe "Stok i mjaftueshem".
// Thirreni funksionin me disa vlera dhe printoni rezultatin.

function kontrolloStokun(sasia) {
  if (sasia < 10) {
    return "Rimbush stokun";
  } else {
    return "Stok i mjaftueshem";
  }
}

console.log(kontrolloStokun(4));
console.log(kontrolloStokun(15));
console.log(kontrolloStokun(10));