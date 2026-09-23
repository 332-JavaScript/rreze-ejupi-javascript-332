# Funksionet në JavaScript — Dita 1
### Variablat Lokale & Globale

---

## Pse na duhen Funksionet?

Shumë herë kemi nevojë të kryejmë të njëjtin veprim disa herë, në pjesë të ndryshme të kodit. Ta shkruajmë atë veprim çdo herë nga fillimi do të ishte e përsëritur dhe e vështirë për t'u mirëmbajtur.

**Funksionet** janë "blloqet ndërtuese" kryesore të një skripte. Ato lejojnë që një kod ose veprim i caktuar të thirret shumë herë pa u përsëritur.

Në fakt, ne kemi përdorur tashmë funksione të integruara në JavaScript, pa e vënë re gjithmonë:

```js
alert("Përshëndetje!");
prompt("Si quheni?");
console.log("Edhe kjo është një thirrje funksioni");
```

---

## Function Declaration (Deklarimi i Funksionit)

Përveç funksioneve të integruara në JavaScript, ne mund të krijojmë edhe funksione tona, sipas dëshirës dhe nevojave.

Deklarimi i një funksioni bëhet duke përdorur keyword-in `function`:

```js
function pershendet() {
  console.log("Përshëndetje nga brenda një funksioni!");
}
```

- `function` — keyword-i që fillon deklarimin
- `pershendet` — emri i funksionit
- gjithçka brenda `{ }` — **trupi i funksionit**

---

## Thirrja e Funksionit

Kur shkruajmë një funksion, edhe nëse e hapim faqen në browser, **nuk do të ndodhë asgjë**. Kjo sepse funksionin vetëm e kemi **deklaruar**, jo edhe **thirrur**.

Çdo funksion thirret kështu: emri i funksionit + kllapat `()`

```js
function pershendet() {
  console.log("Përshëndetje nga brenda një funksioni!");
}

pershendet(); // tani po e thërrasim
```

### Detyrë

> Provoni ta thërrisni funksionin më shumë se një herë, dhe ekzekutojeni në browser. Çfarë ndodh?

```js
pershendet();
pershendet();
pershendet();
```

Nëse e hapim projektin tonë në browser, do të shohim që mesazhi printohet **tri herë** — një herë për çdo thirrje.

---

## Variablat Lokale

Brenda funksioneve mund të përdorim pothuajse çdo gjë: variabla, if conditionals, dhe koncepte të tjera.

Por, gjithçka që deklarohet brenda trupit të funksionit (function body) është **variabël lokale** dhe nuk mund t'i qasemi asaj jashtë funksionit.

```js
function pershendet() {
  let mesazhi = "Kjo ekziston vetëm këtu brenda";
  console.log(mesazhi);
}

pershendet();
console.log(mesazhi); // ❌ Error
```

Çfarë ndodhi? Brenda funksionit krijuam variablën `mesazhi` dhe e shfaqëm në console — ajo variabël është e qasshme vetëm përbrenda funksionit. Ekzekutimi shkon në rregull deri sa të mbërrijë te `console.log(mesazhi)` jashtë funksionit — aty JavaScript na kthen error, sepse `mesazhi` nuk është e deklaruar jashtë.

---

## Variablat Globale

Edhe variablat globale mund të përdoren nga funksionet. Variablat e deklaruara **jashtë** funksionit quhen **variabla globale**.

```js
let user = "Shkumbin"; // variabël GLOBALE

function ndryshoUser() {
  console.log(user);   // ✅ mund ta lexojë globalen
  user = "Asdren";      // mund edhe ta ndryshojë
}

ndryshoUser();
console.log(user); // "Asdren"
```

Kemi krijuar variablën `user` jashtë funksionit; brenda funksionit i jemi qasur asaj variable dhe ia kemi ndryshuar vlerën nga `"Shkumbin"` në `"Asdren"`.

---

## Detyrë Shtëpie

Shkruani një funksion të quajtur `printoNumrinTimFavorit` që:
1. Deklaron një variabël lokale me numrin tuaj të preferuar.
2. E printon atë variabël në console.

Pastaj shpjegoni me fjalët tuaja pse ajo variabël nuk do të ishte e qasshme nëse do ta printonit jashtë funksionit.

```js
function printoNumrinTimFavorit() {
  // kodi juaj këtu
}
```
