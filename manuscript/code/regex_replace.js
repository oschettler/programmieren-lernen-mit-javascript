var
    texte = [
        "Ein Strauß roter Rosen",
        "Er blickte über das blaue Meer",
        "Auf den Weg durch die grüne Hölle"
    ];

for (var i in texte) {
    var text = texte[i].replace(/(rot|grün|blau)(\S*)/, 'bunt$2');
    console.log(texte[i], ' - ', text);
}
