# Ora 8 — Përgatitje për Orën Sfiduese
## Udhëzues

---

Kjo orë ishte një **përsëritje e përgjithshme** e gjithçkaje që kemi mësuar deri tani (console, variabla, tipe të dhënash, operatorë, if/else, switch, funksione) — përgatitje për Orën Sfiduese që vjen. Shtatë detyra, secila duke përdorur konceptet e orëve përkatëse dhe të gjitha ato para saj.

Ky udhëzues i kalon detyrat një nga një, me zgjidhjen e secilës.

---

## Detyrë 1 — Console (nga Ora 2)

Duke përdorur `console.log`, `console.warn`, dhe `console.error`, shkruaj nga një mesazh për secilin rast: normal, paralajmërim, dhe gabim.

```javascript
console.log("Skripta u ngarkua me sukses.");
console.warn("Kujdes: faqja është ende në zhvillim (beta).");
console.error("Gabim: lidhja me serverin dështoi.");
```

---

## Detyrë 2 — Variabla & Tipe (nga Ora 3)

Deklaro variabla për një libër në bibliotekë, përfshirë një variabël pa vlerë (`sasiaNeStok`) dhe një me vlerë qëllimisht `null` (`dataRikthimit`), pastaj kontrollo tipet me `typeof`.

```javascript
let titulli = "Beni ecen vete"
let cmimi = 10.20
let eshteNeDispozicion = true
let sasiaNeStok;
let dataRikthimit = null;

console.log(typeof(titulli))          // "string"
console.log(typeof(sasiaNeStok))      // "undefined"
console.log(typeof(dataRikthimit))    // "object"
```

> ⚠️ Vini re rezultatin e fundit: `typeof null` kthen `"object"`, jo `"null"`. Ky është një **gabim historik i vetë JavaScript-it** (mbetet kështu për arsye pajtueshmërie me kod të vjetër) — mos u hutoni, `dataRikthimit` është ende konceptualisht "asgjë", edhe pse `typeof` thotë "object".

---

## Detyrë 3 — Operatorë (nga Ora 4)

Një shportë fillon me çmim `500`, zbresim `20`; rrisim një numërues `sasia` tri herë me `++`; në fund kontrollojmë me operator logjik, pa `if`.

```javascript
let shporta = 500;
shporta = shporta - 20;

let sasia = 0;
sasia++;
console.log(sasia); // 1
sasia++;
console.log(sasia); // 2
sasia++;
console.log(sasia); // 3

console.log(shporta < 500 && sasia > 2); // true
```

---

## Detyrë 4 — If / Else if (nga Ora 5)

Çmimi i biletës në kinema varet nga mosha: nën 5 vjeç falas, 5–12 gjysmë çmim, 13–64 çmim normal, 65+ çmim i moshuarve.

```javascript
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
```

Për `mosha = 8` (brenda intervalit 5–12), rezultati është `"Bileta gjysme çmim: 5€"`.

---

## Detyrë 5 — Switch (nga Ora 6)

Kërkojmë nga useri shkronjën e notës (A–F) dhe përdorim `switch`, duke grupuar rastet e ngjashme.

```javascript
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
```

---

## Detyrë 6 — Variabla Globale & Funksione (nga Ora 7)

Një variabël globale `numriIVizitave` që rritet nga brenda një funksioni, sa herë që funksioni thirret.

```javascript
let numriIVizitave = 0;

function regjistroViziten() {
  numriIVizitave++;
  console.log(numriIVizitave);
}

regjistroViziten(); // 1
regjistroViziten(); // 2
regjistroViziten(); // 3
```

`numriIVizitave` vazhdon të rritet nga një thirrje te tjetra sepse është variabël **globale** — të tria thirrjet e `regjistroViziten()` ndryshojnë të njëjtën variabël, jo ndonjë kopje të veçantë. Një variabël **lokale** (e deklaruar brenda funksionit) do të "rifillonte" nga e para në çdo thirrje, sepse do të krijohej dhe do të zhdukej brenda vetë funksionit.

---

## Detyrë 7 — Parametrat dhe `return` (koncepte të reja)

Kjo detyrë shkon **një hap përpara** asaj që kemi mësuar deri tani në Ora 7 — funksioni më poshtë **pranon një vlerë kur thirret** (parametër) dhe **na e kthen** një vlerë prapa (`return`), në vend që thjesht ta printojë brenda vetes.

```javascript
function kontrolloRezultatin(nota) {
  if (nota >= 5) {
    return "Kaluar";
  } else {
    return "Nuk ka kaluar";
  }
}

console.log(kontrolloRezultatin(7)); // "Kaluar"
console.log(kontrolloRezultatin(4)); // "Nuk ka kaluar"
console.log(kontrolloRezultatin(5)); // "Kaluar"
```

- **Parametër** (`nota`) — një "kuti bosh" brenda parantezave të funksionit; merr vlerën e vërtetë kur funksioni thirret (p.sh. `7`, `4`, `5`).
- **`return`** — ndalon ekzekutimin e funksionit dhe **e kthen** vlerën pas tij te vendi ku u thirr funksioni, në mënyrë që ta ruajmë ose ta përdorim më tej (këtu, ta printojmë me `console.log`).

> 💡 Dallimi nga Detyra 6: `regjistroViziten()` **nuk merr parametra dhe nuk kthen asgjë** — thjesht printon brenda vetes. `kontrolloRezultatin()` **merr një parametër dhe kthen një vlerë** — ky është modeli që do ta përdorim gjithnjë e më shumë tani e tutje.

---

## Përmbledhje e shpejtë

```
1. console.log/warn/error   → tre nivele mesazhesh
2. typeof null → "object"   → gabim historik i JS-it, mbaje mend
3. Operatorë + logjikë      → mund të kombinohen pa nevojë për if
4. if/else if                → zgjedh mes disa rasteve me kushte
5. switch + grouped cases    → alternativë e pastër kur krahasojmë një variabël me shumë vlera
6. Variabël globale          → ndryshohet nga çdo thirrje e funksionit, mban "kujtesë" mes thirrjeve
7. Parametër + return        → funksioni pranon të dhëna dhe kthen një rezultat (e re!)
```
