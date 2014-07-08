// wenn paul ein Junge ist, "blau", sonst "rosa"
var
    paul = "junge",
    farbe;

if (paul == "junge") {
    farbe = "blau";
}
else {
    farbe = "rosa";
}

// keins, eins, viele. Da zahl == 2: viele Kekse
var
    zahl = 2,
    text;

switch (zahl) {
    case 0:
        text = "kein Keks"; break;
    case 1:
        text = "ein Keks"; break;
    default:
        text = "viele Kekse";
}
