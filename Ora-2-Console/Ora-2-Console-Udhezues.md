# Aktiviteti 1 — Hyrje në JavaScript
## Udhëzues

---

JavaScript është gjuha që i jep **sjellje** dhe **logjikë** një webfaqeje — ajo bën që faqja të "bëjë diçka", jo vetëm të duket mirë. Në këtë orë e nisëm nga zero: çka është JS, si e lidhim me HTML-in, dhe si e përdorim konsolën për të parë çka po bën kodi ynë.

Ky udhëzues shpjegon konceptet dhe hapat që i ndoqëm, në rendin e duhur.

---

## 1. Çfarë është JavaScript?

Krahaso rolin e JS-it me HTML dhe CSS:

| Gjuha | Roli | Analogjia gjuhësore |
|---|---|---|
| HTML | Content (përmbajtja) | Nouns/Emrat — `<p></p>` = "paragraf" |
| CSS | Presentation (paraqitja) | Adjectives/Mbiemrat — `p {color:red}` = "ngjyra e paragrafit është e kuqe" |
| JavaScript | Sjellje/Logjikë | Verbs/Foljet — `p.hide()` = "fshihe paragrafin" |

JavaScript ekzekutohet në browser (client-side) dhe mund të krijojë, fshijë ose ndryshojë përmbajtjen e HTML-it në kohë reale — pa e ringarkuar faqen.

> 💡 Pamë dy faqe identike vizualisht, njëra pa JS e tjetra me JS — dallimi s'shihet me sy, sepse JS punon "në prapavijë".

---

## 2. Krijimi i strukturës së projektit

Krijuam këtë strukturë:

```
projekti-im/
├── index.html
└── script.js
```

Dhe `index.html`:

```html
<!DOCTYPE html>
<html lang="sq">
<head>
  <meta charset="UTF-8">
  <title>Projekti im i parë JS</title>
</head>
<body>
  <h1>Përshëndetje jCoders!</h1>

  <script src="script.js" defer></script>
</body>
</html>
```

### Internal vs External script

1. **Internal** — kodi JS shkruhet direkt brenda `<script></script>` në HTML. **Nuk preferohet.**
   ```html
   <script>
     alert("internal..");
   </script>
   ```
2. **External** — kodi JS shkruhet në skedar të veçantë `.js` dhe lidhet me `src`. **Kjo preferohet gjithmonë.**
   ```html
   <script src="path-to-javascript-file.js"></script>
   ```

### Ku e vendosim `<script>`?

- **Në `<head>`** pa `defer` → skripta ngarkohet e para, pastaj HTML/CSS. **Nuk preferohet.**
- **Në fund të `<body>`** → HTML/CSS ngarkohen të parat, pastaj skripta. **Preferohet.**
- **Metoda `defer`** (ajo që përdorëm ne) — skripta lidhet në `<head>`, por me atributin `defer` ngarkohet në prapaskenë derisa faqja mbaron së ngarkuari HTML dhe CSS-në.

> ⚠️ `defer` është metoda moderne dhe më e mira — përdore atë si zgjedhje të parë.

---

## 3. Hapja e Konsolës dhe `console.log()`

Konsola është vendi ku shihen mesazhe, gabime dhe rezultate nga kodi.

1. Klikim i djathtë mbi faqe → **Inspect**, ose
2. Shkurtorja **Ctrl + Shift + I**

Funksioni bazë për të shkruar në konsolë:

```javascript
console.log("Hello jCoders!");
```

Shembujt që shkruam bashkë:

```javascript
console.log(2013);                          // pa thonjëza -> numër
console.log("Une", "e", "dua", "jCoders");   // vlera të ndara me presje
```

> 💡 Kur ka thonjëza, vlera trajtohet si tekst (string). Kur s'ka, trajtohet si numër — një paralajmërim i lehtë për tipet e të dhënave që i mësojmë në aktivitetin tjetër.

---

## 4. `console.error()` dhe `console.warn()`

Përveç `console.log()`, kemi edhe dy funksione të tjera të dobishme:

```javascript
console.log("Ky është një mesazh normal");
console.warn("Ky është një paralajmërim! Kushtojini vëmendje këtij mesazhi.");
console.error("Ky është një gabim! Ka ndodhur një problem që duhet të rregullohet.");
```

- **`console.warn()`** — kur diçka nuk është gabim fatal, por duhet vëmendje.
- **`console.error()`** — kur diçka ka dështuar realisht dhe duhet rregulluar.

---

## 5. Ushtrimi që bëmë në klasë

```javascript
// 1. Mesazh i zakonshëm
console.log("Sot kam mësuar se si të shfaq një mesazh në konsolë.");

// 2. Paralajmërim
console.warn("Ky është një paralajmërim! Kushtojini vëmendje këtij mesazhi.");

// 3. Gabim
console.error("Ky është një gabim! Ka ndodhur një problem që duhet të rregullohet.");
```

---

## Përmbledhje e shpejtë

```
1. HTML = përmbajtja, CSS = pamja, JS = sjellja/logjika
2. Lidh JS me <script src="script.js" defer></script>
3. console.log()    → mesazh normal
4. console.warn()   → paralajmërim
5. console.error()  → gabim
```

---

## Fjalë të shkurtra

- **Client-side** — kod që ekzekutohet në browserin e kompjuterit, jo në server
- **External script** — kod JS i shkruar në skedar `.js` të veçantë dhe i lidhur me HTML përmes `src`
- **`defer`** — atribut që e ngarkon skriptën në prapaskenë pa e ndalur ngarkimin e faqes
- **Console** — paneli ku shohim mesazhe, paralajmërime dhe gabime nga kodi ynë

---

## 🎯 Sfida jote (pikë ekstra)

Krijo një skedar të ri `index.html` + `script.js`. Në console:

1. Shfaq (me `console.log`) emrin, moshën, dhe qytetin tënd në **tre rreshta të veçantë**.
2. Shfaq të tria vlerat në **një rresht të vetëm**, duke i ndarë me presje brenda `console.log()`.
3. Shto qëllimisht një gabim (p.sh. thirr `console.log` të një ndryshoreje që nuk e ke deklaruar fare) dhe në një **koment** (`//`) shpjego pse ndodhi ai gabim (ReferenceError).
