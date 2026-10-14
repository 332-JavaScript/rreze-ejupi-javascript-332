# Aktiviteti 3 — Operatorët
## Shembuj Detyrash — Praktikë në Shtëpi

---

Këto ushtrime mbulojnë operatorët aritmetikë, `%`, unarin `+`, operatorët logjikë, krahasimin `===` kundrejt `==`, `++`/`--`, dhe operatorët e kombinuar. Testoji të gjitha në konsolën e browserit.

---

## Nivel 1 — Bazë

1. Llogarit dhe printo në konsolë: `15 + 7`, `15 - 7`, `15 * 7`, `15 / 7`, `15 % 7`, `15 ** 2`.
2. Përdor `%` për të zbuluar nëse numrat `24` dhe `31` janë çift apo tek — printo rezultatin e `%` për secilin dhe shkruaj si koment se çka tregon (0 apo jo-0).
3. Ke variablën `let mosha = "16"` (si string). Përdor operatorin unar `+` për ta kthyer në `number`, dhe printo `typeof` para dhe pas konvertimit.

## Nivel 2 — Mesatare

4. Llogarit BMI-në për vete (ose një person imagjinar) me formulën `masa / (gjatesia ** 2)`. Përdor variabla të veçanta për masën dhe gjatësinë, si në shembullin e Artit/Drinit.
5. Parashiko output-in e këtyre rreshtave (shkruaje si koment), pastaj kontrollo në konsolë:
   ```javascript
   console.log(10 === "10");  // ?
   console.log(10 == "10");   // ?
   console.log(5 !== "5");    // ?
   ```
6. Plotëso operatorët logjikë (`&&`, `||`, `!`) që mungojnë, në mënyrë që secili rresht të printojë `true`:
   ```javascript
   console.log(true ___ false);          // true
   console.log(false ___ false ___ true); // true
   console.log(!(true ___ false));        // true
   ```

## Nivel 3 — Sfidë

7. Ke `let n = 5;`. Shkruaj tre `console.log()` radhazi që përdorin `n++` (postfix) dhe tregoje me koment vlerën e printuar secilën herë, dhe vlerën përfundimtare të `n`. Bëje të njëjtën gjë me `++n` (prefix) duke filluar sërish nga `n = 5`.
8. Ke `let pike = 40;`. Përdor operatorët e kombinuar (`+=`, `-=`, `*=`) për ta ndryshuar hap pas hapi, duke printuar vlerën pas secilit hap — p.sh. `pike += 15`, pastaj `pike -= 5`, pastaj `pike *= 2`. Parashiko rezultatin final para se ta ekzekutosh.

---

## 💡 Këshillë

`%` **nuk është përqindje** — jep mbetjen e pjesëtimit. Dhe rregulli i artë: në kod gjithmonë `===`, jo `==`. Nëse ngec, rishiko `Ora-4-Operatoret-Udhezues.md` dhe `operatoret.js`.
