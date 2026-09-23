
// Me if/else — bëhet e gjatë kur rastet shtohen
// let dita = "e Marte";

if (dita === "e Hene") {
  console.log("Fillim jave");
} else if (dita === "e Marte") {
  console.log("Dita e dyte");
} else if (dita === "e Merkure") {
  console.log("Mesi i javes");
} else {
  console.log("Diten tjeter");
}

let dita = "rreze";

switch (dita){
    case "e Hene":
        console.log("E hene");
        break;
    case "e Marte":
        console.log("e Marte");
        break;
    case "e Merkure":
        console.log("e Merkure");
        break;
    case "e Enjte":
        console.log("e Enjte");
        break;
    case "e Premte":
        console.log("e Premte");
        break;
    case "e Shtune":
        console.log("e Shtune");
        break;
    case "e Diele":
        console.log("e Diele");
        break;
    default:
        console.log("Nuk eshte dite e javes!")
}

switch (dita){
    case "e Hene":
    case "e Marte":
    case "e Merkure":
    case "e Enjte":
    case "e Premte":
        console.log("dite pune");
        break;
    case "e Shtune":
    case "e Diele":
        console.log("fundjave");
        break;
    default:
        console.log("Nuk eshte dite e javes!")
}

// Ke let muaji = "Mars";. Shkruaj një switch që printon numrin e muajit (p.sh. "Mars" → 3) 
// për të paktën katër muaj, dhe default që printon "Muaj i panjohur".
