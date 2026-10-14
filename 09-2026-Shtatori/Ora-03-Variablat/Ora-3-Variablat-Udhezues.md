# Aktiviteti 2 — Variablat & Tipet e të Dhënave
## Udhëzues

---

Variablat janë mënyra si i ruajmë të dhënat në JavaScript — emra, mosha, çmime, çdo gjë që duam ta mbajmë në memorie dhe ta përdorim më vonë. Në këtë orë mësuam si deklarohen variablat, si emërtohen si duhet, dhe cilat lloje (tipe) të dhënash ekzistojnë në JS.

Ky udhëzues shpjegon konceptet dhe hapat që i ndoqëm, në rendin e duhur.

---

## 1. Çfarë është një variabël?

Variabla është një **lokacion në memorie i shoqëruar me një emër**. Mund të qaset, ndryshohet ose fshihet duke përdorur emrin e saj.

```javascript
let emri = "Filan";
let mosha = 20;
let gjinia = "Mashkull";

console.log(emri, mosha, gjinia);
```

### Fjalët kyçe (keywords) për deklarim

- **`var`** — mënyra e vjetër, sot përdoret më rrallë.
- **`let`** — për variabla që mund të ndryshojnë vlerën.
- **`const`** — për variabla që **nuk do të modifikohen** më pas.

---

## 2. Rregullat e emërtimit të variablave

1. Karakteri i parë duhet të jetë shkronjë ose underscore `_`.
2. Emri **nuk** duhet të fillojë me numër.
3. Emri **nuk** duhet të ketë hapësira ose karaktere speciale si `+ - ( \`.
4. Emri nuk duhet të jetë i njëjtë me fjalë të rezervuara të JavaScript (p.sh. `if`, `for`, `class`).
5. JavaScript është **case-sensitive** — `test`, `Test` dhe `TEST` janë tri variabla të ndryshme.

```javascript
let test = 1;
let Test = 2;
let TEST = 3;
console.log(test, Test, TEST); // tri variabla të ndryshme, jo një
```

---

## 3. Deklarim pa inicializim

```javascript
let gjatesia;
console.log(gjatesia);   // -> undefined
console.log(gjeresia);   // -> ReferenceError: gjeresia is not defined
```

> ⚠️ Dallimi i rëndësishëm: `gjatesia` ekziston (është deklaruar) por s'ka vlerë ende → `undefined`. `gjeresia` nuk ekziston fare në kod → `ReferenceError`.

Pasi ta deklarojmë variablën, i japim vlerë me operatorin `=` (inicializim):

```javascript
let gjatesia = 1.75;
```

---

## 4. Ushtrimi i listës së kontakteve

```javascript
let emri1 = "Filan";
let telefoni1 = "044123123";
let email1 = "filani@j-coders.com";

let emri2 = "Fistek";
let telefoni2 = "049123456";
let email2 = "fisteku@j-coders.com";

console.log("Emri:", emri1, ", Telefoni:", telefoni1, ", Email:", email1);
console.log("Emri:", emri2, ", Telefoni:", telefoni2, ", Email:", email2);
```

---

## 5. Tipet e të dhënave

Në JavaScript, tipet e të dhënave ndahen në:
1. **Primitive** (të thjeshta): numbers, strings, boolean...
2. **Komplekse** (të kompozuara): arrays, objects (i mësojmë më vonë)

### Tipet primitive që pamë:

```javascript
let eshteStudent = true;              // Boolean -> true ose false
let numriIRendesishem = 42;           // Number  -> numra realë ose të plotë
let numerIMadh = 9007199254740995n;   // BigInt  -> numra shumë të gjatë
let qyteti = "Prishtina";             // String  -> tekst/fjalë/fjali
let ndryshoreEPadeklaruar;            // Undefined -> variabël e deklaruar pa vlerë
let vlereBosh = null;                 // Null    -> qëllimisht "s'ka asgjë"
let cmimi = 4.99;                     // Number me presje dhjetore
```

### Null vs Undefined

- **`undefined`** — variabla është deklaruar, por s'ka marrë ende vlerë.
- **`null`** — ne vetë kemi thënë qëllimisht që variabla "nuk përmban asgjë".

---

## 6. Shndërrimet e tipeve (Type Conversion)

Ndonjëherë kemi vlerë të një tipi, por na duhet një tip tjetër:

```javascript
const num = 42;
const strnum = String(num);       // "42"     (number -> string)
const strnum2 = String(8);        // "8"
const strngabool = String(true);  // "true"
const numngastr = Number("312");  // 312      (string -> number)
const boolnganr = Boolean(0);     // false    (number -> boolean)
```

---

## 7. Operatori `typeof`

Nëse nuk e dimë tipin e një vlere, përdorim `typeof`:

```javascript
let year = 1990;
console.log(typeof year); // "number"
```

Ushtrimi që bëmë — përdorëm `typeof` mbi disa variabla dhe komentuam rezultatin:

```javascript
console.log(typeof num);        // "number"
console.log(typeof strnum);     // "string"
console.log(typeof boolnganr);  // "boolean"
```

---

## 8. Komentet në JavaScript

Komentet janë tekst që JavaScript e injoron komplet — shërbejnë për të shpjeguar kodin (ndihmë për të ardhmen).

```javascript
// Ky është një single-line comment
let x = 42;

/* Ky është një multi-line comment
   dhe mund të ketë disa rreshta.
   console.log("Kjo nuk ekzekutohet"); */
```

---

## Përmbledhje e shpejtë

```
1. let / const   → deklarim variablash (const kur vlera s'ndryshon)
2. Tipet primitive: Boolean, Number, BigInt, String, Undefined, Null
3. undefined     → deklaruar pa vlerë
4. null          → qëllimisht bosh
5. String() / Number() / Boolean()  → shndërrojnë tipin
6. typeof        → na tregon tipin e një vlere
7. // dhe /* */  → komente, nuk ekzekutohen
```

---

## Fjalë të shkurtra

- **Variabël** — lokacion në memorie i shoqëruar me një emër
- **Deklarim** — rezervimi i një emri (dhe lokacioni në memorie) për një variabël
- **Inicializim** — dhënia e vlerës së parë një variable
- **Tip primitiv** — një lloj i thjeshtë të dhënash (Boolean, Number, String, etj.) që s'mund të zbërthehet më shumë
- **Type conversion** — shndërrimi i një vlere nga një tip në tjetrin

---

## 🎯 Sfida jote (pikë ekstra)

**Mini CV** — Krijo dhe inicializo variabla për një mini CV që përdorin këto tipe:
- 2 Strings (p.sh. emri, profesioni)
- 1 Boolean (p.sh. `amePunuar`)
- 1 numër i plotë (p.sh. mosha)
- 1 numër me presje dhjetore (p.sh. gjatësia në metra, `1.78`)

Shfaqi të gjitha në console si **një fjali e vetme** e formatuar bukur, p.sh.:

```
"Filani, 24 vjeç, 1.78m, profesion: Developer, ka punuar më parë: true"
```

**Për pikë të plotë:** përdor `typeof` për të verifikuar tipin e secilës variabël dhe shkruaj rezultatin si koment (`//`) pranë çdo rreshti përkatës.
