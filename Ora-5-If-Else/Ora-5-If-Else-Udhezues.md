# Aktiviteti 4 — Control Flow: If & If/Else Statement
## Udhëzues

---

Deri tani kemi shkruar kod që ekzekutohet gjithmonë, rresht pas rreshti. Por shpesh na duhet që programi të vendosë vetë çka të bëjë, varësisht një kushti — p.sh. "nëse kemi mjaftueshëm para, blej; përndryshe, mos blej". Kjo quhet **control flow** (rrjedha e kontrollit) dhe në këtë orë mësuam si e realizojmë me `if`, `if/else` dhe operatorin ternar.

Ky udhëzues shpjegon konceptet dhe hapat që i ndoqëm, në rendin e duhur.

---

## 1. Çfarë janë deklaratat kushtëzuese?

Imagjinoje programin si një pemë që fillon nga rrënja dhe ndahet në degë të vogla. Rrënja është fillimi i programit; çdo degëzim ndodh për shkak të një kushti. Këto kushte ekzekutohen varësisht vendimeve të përdoruesit, rezultateve të kalkulimeve, apo informacioneve të tjera që merr programi.

---

## 2. `if` statement

Kontrollon një kusht dhe, varësisht rezultatit (`true`/`false`), ekzekuton kodin ose e kalon fare.

```javascript
if (kushti) {
  // blloku i kodit ekzekutohet vetëm nëse kushti është true
}
```

**Shembull:** nëse kemi më shumë se 500€ në kuletë, mund të blejmë PS5.

```javascript
let parate = 600;

if (parate > 500) {
  console.log("Mund ta blesh PS5-in!");
}
```

> 💡 Nëse kushti nuk plotësohet, blloku i kodit **kalohet tërësisht** — programi vazhdon më tej pa e ekzekutuar atë.

### Ushtrimi që bëmë — `confirm()`

```javascript
let pergjigje = confirm("A jeni gati?");

if (pergjigje) {
  console.log("Përdoruesi është gati");
}
```

---

## 3. Kujdes me `scope`-in (fushëveprimin)

Provuam këtë kod dhe pamë një gabim:

```javascript
let cmimi = 10;
let kilogrami = prompt("Sa kilogram molla deshironi te bleni?", 0);

if (kilogrami > 0) {
  let total = cmimi * kilogrami;
  console.log(total);
}

console.log(total); // ❌ ReferenceError: total is not defined
```

> ⚠️ Variablat e deklaruara me `let`/`const` **brenda** kllapave `{ }` të një `if`-i ekzistojnë **vetëm brenda tyre**. Jashtë atij blloku, `total` nuk ekziston fare — prandaj gabimi.

---

## 4. `if / else` statement

Kur duam që programi të ekzekutojë diçka **tjetër** nëse kushti nuk plotësohet:

```javascript
if (kushti) {
  // ekzekutohet nëse kushti është true
} else {
  // ekzekutohet nëse kushti është false
}
```

**Shembull:** buxheti ynë është 1420€. Nëse kemi më shumë se 800€, blejmë laptop; përndryshe, jo.

```javascript
let buxheti = 1420;

if (buxheti > 800) {
  console.log("Mund të blesh një MacBook Pro!");
} else {
  console.log("Nuk ke mjaftueshëm buxhet.");
}
```

### Multiple if/else (else if)

Kur duam të kontrollojmë **më shumë se një** kusht:

```javascript
if (kushti1) {
  // ...
} else if (kushti2) {
  // ...
} else if (kushti3) {
  // ...
} else {
  // asnjë kusht nuk u plotësua
}
```

### Ushtrimi që bëmë (Bingo/Miss)

```javascript
let numri = Number(prompt("Shkruaj një numër:"));

if (numri > 90 && numri < 110) {
  console.log("Bingo!");
} else {
  console.log("Miss");
}
```

---

## 5. Nested if/else

Mund të vendosim një kusht **brenda** tjetrit — kontrollohet vetëm nëse kushti i jashtëm plotësohet fillimisht.

```javascript
let number = 3;

if (number > 0) {
  if (number % 2 == 0) {
    console.log("Numri eshte cift");
  } else {
    console.log("Numri eshte tek");
  }
} else {
  console.log("Numri eshte me i vogel se zero");
}
```

> 💡 Kushti i brendshëm (`number % 2 == 0`) ekzekutohet **vetëm** nëse `number > 0` është `true`. Nëse numri është negativ, kushti i brendshëm as nuk kontrollohet.

---

## 6. Operatori ternar `? :`

Kur duam të caktojmë një vlerë varësisht një kushti, por në një mënyrë më të shkurtër se `if/else`. Quhet **ternar** sepse ka tre operandë: kushti, vlera nëse `true`, vlera nëse `false`.

```javascript
kushti ? vleraNëseTrue : vleraNëseFalse;
```

**Rishkrimi i ushtrimit Bingo/Miss me ternar:**

```javascript
let numri = Number(prompt("Shkruaj një numër:"));

let rezultati = (numri > 90 && numri < 110) ? "Bingo!" : "Miss";
console.log(rezultati);
```

---

## Përmbledhje e shpejtë

```
1. if (kushti) { ... }                 → ekzekuton nëse kushti është true
2. if (...) { ... } else { ... }       → alternativa kur kushti është false
3. else if                             → kontrollon disa kushte njëra pas tjetrës
4. Nested if/else                      → një if brenda tjetrit
5. kushti ? vlera1 : vlera2            → operatori ternar (shkurtore për if/else)
6. Variablat e deklaruara brenda { }   → s'ekzistojnë jashtë atij blloku (scope)
```

---

## Fjalë të shkurtra

- **Control flow** — rrjedha e ekzekutimit të kodit, e cila mund të ndryshojë varësisht kushteve
- **Kusht (condition)** — shprehje që vlerësohet si `true` ose `false`
- **Blok kodi** — grupi i rreshtave brenda kllapave `{ }`
- **Scope** — hapësira ku një variabël "ekziston" dhe mund të përdoret
- **Operator ternar** — shkurtore me tre operandë për `if/else`, në formën `kusht ? a : b`

---

## 🎯 Sfida jote (pikë ekstra)

Gjeni mesataren e notave tuaja:

```
(nota1 + nota2 + nota3 + ... + notaN) / numriINotave
```

Shkruaj kodin që, varësisht mesatares, printon në console:

- Mbi **4.5** → `"Keni sukses të shkëlqyeshëm"`
- Mbi **3.5** e nën **4.5** → `"Keni sukses shumë të mirë"`
- Mbi **2.5** e nën **3.5** → `"Keni sukses të mirë"`
- Mbi **2** e nën **2.5** → `"Suksesi juaj është i mjaftueshëm"`
- Saktësisht **1** → `"Suksesi juaj është i pa-mjaftueshëm"`
- Për çdo rast tjetër → `"Mesatarja ka vlerë të gabuar"`

**Për pikë të plotë:** provo ta zgjidhësh njëherë me `if/else if` dhe njëherë duke kombinuar me operatorin ternar aty ku është e mundur.
