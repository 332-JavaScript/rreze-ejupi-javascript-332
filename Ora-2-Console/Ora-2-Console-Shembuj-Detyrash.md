# Aktiviteti 1 — Hyrje në JavaScript
## Shembuj Detyrash — Praktikë në Shtëpi

---

Këto ushtrime i bëjmë vetëm me `console.log()`, `console.warn()` dhe `console.error()` — pikërisht ato që mësuam në klasë. Krijo një skedar `index.html` + `script.js` (si në orë), lidhe skriptën me `defer`, dhe testo çdo ushtrim në konsolën e browserit (Ctrl + Shift + I).

---

## Nivel 1 — Bazë

1. Shfaq në konsolë emrin, mbiemrin dhe qytetin tënd, secilin në **një `console.log()` të veçantë**.
2. Tani shfaqi të tria vlerat e njëjta, por në **një `console.log()` të vetëm**, të ndara me presje.
3. Shkruaj një `console.log()` me një numër (pa thonjëza) dhe një tjetër me të njëjtin numër si tekst (me thonjëza). Vër re dallimin në ngjyrën/formatin e output-it në konsolë.

## Nivel 2 — Mesatare

4. Shkruaj tre mesazhe: një `console.log()` normal, një `console.warn()` dhe një `console.error()` — secili duhet të përshkruajë diçka të vërtetë nga dita jote (p.sh. "Sot mësova console.log", "Kujdes, harrova detyrën e djeshme", "Gabim: harrova defer në script").
5. Shkruaj kod që fut **qëllimisht** një gabim — thirr `console.log()` mbi një variabël që s'e ke deklaruar fare. Lexo mesazhin e gabimit në konsolë dhe, në një koment (`//`) mbi atë rresht, shpjego me fjalët e tua çfarë do të thotë ai gabim.
6. Krahaso: vendos të njëjtin `<script>` një herë në `<head>` **pa** `defer`, dhe një herë në fund të `<body>`. A ndryshon diçka që mund ta vësh re? Shkruaj përfundimin tënd si koment.

## Nivel 3 — Sfidë

7. "Rrëfe" në konsolë, rresht pas rreshti, çfarë ke bërë sot (minimum 5 `console.log()` të ndryshëm) — përdor të paktën një `console.warn()` diku në mes për diçka që ende s'e ke kuptuar plotësisht.
8. Krijo dy skedarë `script.js` që të dy printojnë "Përshëndetje!" — njërin e lidh si **internal script** (brenda `<script></script>` direkt në HTML) dhe tjetrin si **external script** (`.js` i veçantë me `src`). Krahaso strukturën e të dyja skedarëve HTML.

---

## 💡 Këshillë

Mos u ndalo tek gabimi i parë — lexo mesazhin që të jep konsola, shpesh ai të thotë saktësisht ku dhe pse ka ndodhur problemi. Nëse ngec gjatë, rishiko `Ora-2-Console-Udhezues.md`.
