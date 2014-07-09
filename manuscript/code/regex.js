var
    texte = [
        "Das kann doch jedes Kind.",
        "Mag jede Frau die Farbe rosa?",
        "Fußballvereine gibt es in jeder Stadt."
    ];

for (var i in texte) {
    var adjektiv = texte[i].match(/jede\S?/);
    console.log(texte[i], adjektiv);
}
