# Aktiviteti 2 — Variablat & Tipet e të Dhënave
## Shembuj Detyrash — Praktikë në Shtëpi

---

Këto ushtrime praktikojnë deklarimin e variablave (`let`, `const`, `var`), rregullat e emërtimit, dhe tipet e të dhënave (`typeof`). Testoji të gjitha në konsolën e browserit.

---

## Nivel 1 — Bazë

1. Deklaro tri variabla për veten: emri, mosha, qyteti. Shfaqi të tria në një `console.log()` të vetëm, të ndara me presje.
2. Deklaro një variabël me `let` pa e inicializuar (pa i dhënë vlerë). Shfaqe në konsolë — çfarë printohet? Pastaj jepi një vlerë dhe printoje sërish.
3. Deklaro variabla për secilin nga këto tipe të dhënash dhe shfaqi të gjitha bashkë me `typeof`:
   - një `string`
   - një `number`
   - një `boolean`
   - një variabël `null`
   - një variabël të padeklaruar me vlerë (`undefined`)

## Nivel 2 — Mesatare

4. Cilat nga këto emërtime variablash **lejohen** në JavaScript, dhe cilat jo? Provoji një nga një në konsolë dhe shënoji me koment pse funksionon ose s'funksionon:
   ```
   let qyteti
   let _qyteti
   let 1qyteti
   let qyteti-im
   let qytetiIm
   ```
5. Deklaro të njëjtin emër variabli dy herë me `let` (p.sh. `let mosha = 20; let mosha = 21;`). Çfarë gabimi merr? Tani provo të njëjtën gjë me `var` — a ndryshon sjellja?
6. Deklaro një `const PI = 3.14`. Provo më pas t'i japësh një vlerë të re (`PI = 3.15`). Çfarë ndodh, dhe pse mendon se `const` sillet kështu?

## Nivel 3 — Sfidë

7. Krijo 6 variabla — një për secilin nga tipet bazë të JavaScript-it (`string`, `number`, `boolean`, `undefined`, `null`, `bigint`). Shkruaj një `console.log()` që i printon **vlerat** e tyre, dhe një tjetër që printon **tipet** e tyre (me `typeof`), në të njëjtin rend.
8. Pa i ekzekutuar në konsolë, shkruaj si koment ç'mendon se do të printojë secili rresht më poshtë, pastaj kontrollo veten duke i ekzekutuar:
   ```javascript
   let x;
   console.log(typeof x);       // ?

   let y = null;
   console.log(typeof y);       // ?

   let z = "25";
   console.log(typeof z);       // ?
   ```

---

## 💡 Këshillë

`let` dhe `const` janë ato që duhet t'i përdorësh gjithmonë; `var` e pamë vetëm si referencë historike. Nëse ngec, rishiko `Ora-3-Variablat-Udhezues.md` dhe `variablat.js`.
