# Aktiviteti 4 — Control Flow: If & If/Else Statement
## Shembuj Detyrash — Praktikë në Shtëpi

---

Këto ushtrime praktikojnë `if`, `if/else`, `else if`, `if` të ndërfutur (nested), dhe operatorin ternar. Testoji të gjitha në konsolën e browserit.

---

## Nivel 1 — Bazë

1. Ke `let bateria = 15;` (përqindja e baterisë). Shkruaj një `if` që printon `"Karikoje telefonin!"` vetëm nëse bateria është nën `20`.
2. Ke `let buxheti = 950;`. Shkruaj `if/else`: nëse buxheti është mbi `800`, printo `"Mund të blesh një iPhone!"`, përndryshe printo `"Kurse edhe pak."`.
3. Ke `let mosha = 15;`. Shkruaj një `if/else` që printon `"Mund të votosh"` nëse mosha është `18` a më shumë, përndryshe `"Ende s'mund të votosh"`.

## Nivel 2 — Mesatare

4. Përdor `else if` për të klasifikuar një ditë pune sipas orarit (`let ora = 14;`):
   - nën `9` → `"Ende s'ka filluar"`
   - `9` deri `17` → `"Në punë"`
   - mbi `17` → `"Mbaroi dita"`
5. Shkruaj `if` të ndërfutur (nested): kontrollo nëse `let numri = -7;` është pozitiv apo negativ; nëse është pozitiv, kontrollo (brenda) nëse është çift apo tek.
6. Rishkruaj ushtrimin #2 (buxheti) duke përdorur **operatorin ternar** në vend të `if/else`.

## Nivel 3 — Sfidë

7. Klasifiko BMI-në (rimerr formulën nga ora e operatorëve: `masa / gjatësia ** 2`) me `if/else if`:
   - nën `18.5` → `"Nënpeshë"`
   - `18.5` deri `25` → `"Peshë normale"`
   - `25` deri `30` → `"Mbipeshë"`
   - mbi `30` → `"Obezitet"`
8. Provo këtë kod dhe shpjego me koment pse ndodh gabimi (rikujto pjesën e scope-it nga udhëzuesi):
   ```javascript
   let cmimi = 8;
   let sasia = prompt("Sa copë deshironi?", 0);

   if (sasia > 0) {
     let totali = cmimi * sasia;
     console.log(totali);
   }

   console.log(totali); // pse del gabim këtu?
   ```

---

## 💡 Këshillë

Kur ke shumë kushte njëri pas tjetrit që kontrollojnë **të njëjtën variabël**, mendo nëse `switch` (ora e ardhshme) do ta bënte kodin më të pastër. Nëse ngec, rishiko `Ora-5-If-Else-Udhezues.md`.
