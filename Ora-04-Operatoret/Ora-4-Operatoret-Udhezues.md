# Aktiviteti 3 — Operatorët
## Udhëzues

---

Operatorët janë simbolet që përdorim për të bërë llogaritje, krahasime dhe vendime logjike me variablat tona — mbledhje, zbritje, kontrollim nëse dy vlera janë të barabarta, e kështu me radhë. Në këtë orë mësuam llojet kryesore të operatorëve në JavaScript dhe si sillen ata në praktikë.

Ky udhëzues shpjegon konceptet dhe hapat që i ndoqëm, në rendin e duhur.

---

## 1. Çfarë janë operatorët?

Operatorët janë simbole që kryejnë detyra mbi vlera të quajtura **operandë**.

```javascript
console.log(5 * 2); // -> 10
```

Këtu `5` dhe `2` janë operandët, `*` është operatori.

- **Operator unar** — ka **një** operand të vetëm (p.sh. `typeof year`).
- **Operator binar** — ka **dy** operandë (p.sh. `5 * 2`, `+`, `-`).

---

## 2. Operatorët aritmetikë

```javascript
console.log(10 + 5);  // mbledhje  -> 15
console.log(10 - 5);  // zbritje   -> 5
console.log(10 * 5);  // shumëzim  -> 50
console.log(10 / 5);  // pjesëtim  -> 2
console.log(10 % 3);  // mbetja    -> 1
console.log(10 ** 2); // fuqia     -> 100
```

### Operatori `%` (mbetja)

`%` **nuk** është përqindje — jep **mbetjen** pas pjesëtimit të dy numrave.

```javascript
console.log(8 % 2);  // 0 -> numër çift
console.log(7 % 2);  // 1 -> numër tek
```

> 💡 Numrat që plotëpjesëtohen me 2 japin mbetje 0 (çift); të tjerët japin mbetje ≥ 1 (tek).

### Ushtrimi i BMI-së

Formula: `BMI = masa / gjatësia ** 2`

```javascript
let masaArti = 78;
let gjatesiaArti = 1.80;
let bmiArti = masaArti / (gjatesiaArti ** 2);
console.log("BMI i Artit:", bmiArti);

let masaDrini = 92;
let gjatesiaDrini = 1.95;
let bmiDrini = masaDrini / (gjatesiaDrini ** 2);
console.log("BMI i Drinit:", bmiDrini);
```

---

## 3. Operatori unar `+` (konvertim në numër)

Shtimi i `+` para një vlere jo-numerike e kthen atë vlerë në numër:

```javascript
let stringNumer = "25";
console.log(+stringNumer);        // 25 (tani është number)
console.log(typeof +stringNumer); // "number"
```

> 💡 E dobishme kur vlera vjen si string (p.sh. nga një formular) dhe duam ta trajtojmë si numër.

---

## 4. Operatorët logjikë

Kemi tre operatorë kryesorë: `&&` (dhe), `||` (ose), `!` (jo).

```javascript
const a = false;
const b = true;
const c = false;
const d = true;

console.log(a && b && c || d);    // true
console.log(a && b && (c || d));  // false
```

Ushtrimi i plotësimit të operatorëve:

```javascript
console.log(true || false);                    // true
console.log(false || false);                   // false
console.log(!(false && false && true));        // true
console.log(true || false || false && true);   // true
```

---

## 5. Operatorët e krahasimit — `==` vs `===`

Krahasimi kontrollon barazinë ose jobarazinë e vlerave dhe kthen gjithmonë `true`/`false`:

```
==   !=   >   <   >=   <=   ===   !==
```

```javascript
console.log(10 === "10"); // false -> tipe të ndryshme (number vs string)
console.log(10 == "10");  // true  -> JS bën konvertim automatik të tipit
```

> ⚠️ Rregull i artë: përdor gjithmonë `===` (strict equality) në kodin tënd — kontrollon vlerën **dhe** tipin, dhe shmang rezultate të papritura.

---

## 6. Increment (`++`) dhe Decrement (`--`)

```javascript
let n1 = 10;
console.log(n1);   // 10
console.log(n1++); // 10 -> POSTFIX: kthen vlerën E VJETËR, pastaj rrit
console.log(n1);   // 11

let n2 = 10;
console.log(n2);   // 10
console.log(++n2); // 11 -> PREFIX: rrit PASTAJ kthen vlerën e re
console.log(n2);   // 11
```

- **Postfix** (`n++`) → kryen veprimin, por kthen vlerën **para** ndryshimit.
- **Prefix** (`++n`) → kryen veprimin **dhe pastaj** kthen vlerën e re.

---

## 7. Operatorët e kombinuar (compound assignment)

```javascript
let x = 10;
x += 2; console.log(x); // 12 -> njësoj si x = x + 2
x -= 4; console.log(x); // 8  -> njësoj si x = x - 4
```

Të njëjtën logjikë e kanë edhe `*=`, `/=`, `**=`, `%=`.

---

## Përmbledhje e shpejtë

```
1. Aritmetikë:   +  -  *  /  %  **
2. Logjikë:      &&  ||  !
3. Krahasim:     ===  (gjithmonë ky, jo ==)
4. n++           → kthen vlerën para ndryshimit (postfix)
5. ++n           → kthen vlerën pas ndryshimit (prefix)
6. +=  -=  *=  /=  → shkurtore për veprime me caktim
```

---

## Fjalë të shkurtra

- **Operand** — vlera mbi të cilën vepron një operator
- **Operator unar** — operator me një operand të vetëm
- **Operator binar** — operator me dy operandë
- **Strict equality (`===`)** — krahasim që kontrollon edhe vlerën edhe tipin
- **Precedence** — rendi sipas të cilit ekzekutohen operatorët në një shprehje

---

## 🎯 Sfida jote (pikë ekstra)

Shkruaj kodin që plotëson operatorët e munguar (aritmetikë, krahasimi, ose logjikë) në shprehjet e mëposhtme, ashtu që secila të japë `true`:

```javascript
console.log(4 * 5 ___ 20);
console.log(6 * 5 ___ "30");
console.log(-17 ___ 0);
console.log(25 ___ 1);
console.log(2 + 2 * 2 ___ 4);
console.log(true ___ false);
console.log(false ___ false);
console.log(false ___ false ___ true);
console.log(true ___ false ___ false && true);
```
