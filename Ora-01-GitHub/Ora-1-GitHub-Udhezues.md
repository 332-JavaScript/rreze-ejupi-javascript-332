# Si Punojmë me GitHub — Udhëzues

---

GitHub është vendi ku ruajmë dhe ndjekim gjithë kodin që shkruajmë në klasë. Çdo herë që bëjmë diçka të re, e "ruajmë" atje në mënyrë që të mos humbasë dhe të mund ta shohim historikun e punës sonë.

Ky udhëzues shpjegon hapat që i ndjekim çdo herë, në rendin e duhur.

---

## Çka bëhet vetëm një herë (kur fillojmë)

### 1. Krijimi i llogarisë në GitHub
Nëse s'ke llogari:
1. Shko në [github.com/signup](https://github.com/signup)
2. Shkruaj username, email dhe fjalëkalim
3. Konfirmo email-in me kodin që të vjen

### 2. Bashkimi në organizatën e klasës
Trajneri të dërgon një ftesë (link ose email) për t'u bashkuar në organizatën e klasës në GitHub. Klik **Join** / **Accept invitation** për ta pranuar. Pasi ta pranosh, do të mund ta shohësh organizatën dhe repository-n tënd.

### 3. Klonimi i repository-t në VS Code
"Klonimi" don të thotë ta shkarkosh repository-n nga GitHub në kompjuterin tënd, në mënyrë që të mund të punosh me të në VS Code.

1. Hap VS Code
2. Shtyp `Ctrl+Shift+P`
3. Shkruaj `Git: Clone` dhe zgjidhe
4. Shko te faqja e repository-t tënd në GitHub → butoni jeshil **Code** → kopjo linkun (HTTPS)
5. Ngjite linkun në VS Code, zgjidh një folder, dhe kliko **Open**

> ⚠️ Këtë hap e bën **vetëm herën e parë**. Herën tjetër që vjen në klasë, thjesht hape të njëjtin folder në VS Code — nuk ka nevojë të klonosh përsëri.

### 4. Identifikimi te ky kompjuter (vetëm një herë, për këtë projekt)
Kompjuteri duhet të dijë emrin dhe email-in tënd, në mënyrë që commitet e tua të shënohen si tuat, jo si dikujt tjetër. Hap një terminal brenda VS Code (**Terminal → New Terminal**) dhe shkruaj:

```bash
git config user.name "Emri Yt"
git config user.email "email-i-yt@example.com"
```

---

## Çka bëjmë çdo herë (çdo klasë)

### 5. Identifikohu për t'u lidhur me GitHub (`gh auth login`)
Kompjuterat në klasë përdoren edhe nga klasë të tjera, prandaj çdo herë kur ulesh dhe fillon të punosh, duhesh të identifikohesh një herë:

```bash
gh auth login
```

Zgjedh:
- **GitHub.com**
- **HTTPS**
- **Login with a web browser**

Do të të shfaqet një kod — hape linkun (`github.com/login/device`) në browser, fute kodin, dhe konfirmo.

> Këtë e bën **një herë në fillim të çdo klase**, jo çdo herë që bën commit.

### 6. Punojmë dhe ruajmë ndryshimet (Commit)
Kur shkruan ose ndryshon kod (p.sh. në `script.js`), duhesh t'i "ruash" këto ndryshime me një **commit**:

1. Kliko ikonën **Source Control** në anën e majtë të VS Code
2. Do t'i shohësh skedarët e ndryshuar nën "Changes" — kliko **+** pranë tyre për t'i shtuar
3. Shkruaj një mesazh të shkurtër që përshkruan çka ndryshove (p.sh. `"Shtova console.log"`)
4. Kliko butonin **✓ Commit**

Mund të bësh disa commit gjatë klasës — sa herë të bësh diçka të re dhe të rëndësishme.

### 7. Dërgo kodin në GitHub (Push)
Pasi je identifikuar, dërgo commitet e tua në GitHub:

1. Kliko **Source Control**
2. Kliko **"..."** → **Push** (ose ikonën për sync poshtë)

Tani kodi yt është ruajtur në GitHub dhe trajneri mund ta shohë.

### 8. Dil nga llogaria në fund të klasës (`gh auth logout`)
Meqë kompjuteri përdoret edhe nga klasë të tjera, **para se të ngrihesh nga vendi**, shkruaj:

```bash
gh auth logout
```

Kjo siguron që askush tjetër nuk mund të përdorë llogarinë tënde në këtë kompjuter pasi të largohesh.

---

## Përmbledhje e shpejtë (çdo klasë)

```
1. Hap folderin tënd në VS Code
2. gh auth login          → identifikohu
3. ... punon, bën ndryshime ...
4. Commit                 → ruaj ndryshimet (Source Control panel)
5. Push                   → dërgoj ndryshimet në GitHub
6. gh auth logout         → dil para se të ngrihesh
```

---

## Fjalë të shkurtra

- **Repository (repo)** — folderi ku ruhet projekti yt në GitHub
- **Commit** — një "ruajtje" e ndryshimeve, me një mesazh që shpjegon çka ndryshove
- **Push** — dërgimi i commiteve nga kompjuteri yt në GitHub
- **Clone** — shkarkimi i një repository-t nga GitHub në kompjuterin tënd
- **Organizatë** — grupi në GitHub ku janë të gjitha repot e klasës sonë
