# Aktiviteti 5 — Switch Statement
## Shembuj Detyrash — Praktikë në Shtëpi

---

Këto ushtrime praktikojnë `switch`, `break`, `default`, dhe grupimin e disa `case`-ve së bashku. Testoji të gjitha në konsolën e browserit.

---

## Nivel 1 — Bazë

1. Ke `let muaji = "Mars";`. Shkruaj një `switch` që printon numrin e muajit (p.sh. `"Mars"` → `3`) për të paktën katër muaj, dhe `default` që printon `"Muaj i panjohur"`.
2. Ke `let shkronja = "B";`. Shkruaj një `switch` që printon notën numerike përkatëse (`"A"` → `5`, `"B"` → `4`, `"C"` → `3`, etj.) me `default` për çdo shkronjë tjetër.
3. Merr rishtazi ushtrimin e ditëve nga ora (dita → "Ditë pune" / "Fundjavë"), por këtë herë përdore me `let dita = "E Enjte";`.

## Nivel 2 — Mesatare

4. Grupo muajt (si tek ushtrimi #1, por tani me grouped cases) sipas stinës — `"Dhjetor"`, `"Janar"`, `"Shkurt"` → `"Dimër"`; `"Mars"`, `"Prill"`, `"Maj"` → `"Pranverë"`; e kështu me radhë për verën dhe vjeshtën.
5. Hiq **qëllimisht** `break`-un nga një `case` në mes të një `switch`-i që ke shkruar më parë. Ekzekutoje dhe shpjego me koment çfarë ndodh (fall-through) — çfarë printohet dhe pse.
6. Ke katër variabla si në ushtrimin e tipeve nga ora: `let a = 42; let b = "pershendetje"; let c = false; let d;`. Shkruaj një `switch (typeof ...)` — brenda një loop-i të thjeshtë me array (`[a, b, c, d].forEach(...)`, siç e pamë në udhëzues) — që printon tipin e secilës.

## Nivel 3 — Sfidë

7. Rishkruaj ushtrimin e klasifikimit të BMI-së (nga ora e kaluar, me `if/else if`) duke përdorur `switch`. Ndihmë: pjesëto BMI-në me `Math.floor(bmi / 5)` (ose ngjashëm) për ta kthyer intervalin në një numër të plotë që mund të përdoret si `case`.
8. Krijo kalkulatorin e vogël si në orë, por këtë herë shto dy operatorë shtesë: `"mbetja"` (modulo `%`) dhe `"fuqia"` (`**`). Testoje me disa çifte numrash të ndryshëm.

---

## 💡 Këshillë

`switch` krahason gjithmonë me barazi të saktë (`===`) — për intervale (`>`, `<`) `if/else` mbetet zgjedhja e natyrshme, ose duhet ta "kthesh" numrin në një vlerë të saktë siç bëmë tek sfida #7. Nëse ngec, rishiko `Ora-6-Switch-Udhezues.md`.
