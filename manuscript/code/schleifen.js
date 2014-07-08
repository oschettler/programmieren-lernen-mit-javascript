/*
 Am Ende der Schleife enthält summe die Summe der Zahlen: 35
 i heisst Laufvariable
 */
var
    zahlen = [3, 5, 7, 9, 11],
    summe;

for (var i = 0; i < zahlen.length; i++) {
    summe += zahlen[i];
}

// So könntest du es auch schreiben
i = 0;
while (i < zahlen.length) {
    summe += zahlen[i];
    i += 1;
}

// Variante der for-Schleife. i durchlöuft alle Indizes
for (var i in zahlen) {
    summe += zahlen[i];
}

/*
 Die for..in-Schleife funktioniert auch für Objekte.
 Am Ende enthält text " Hauptstrasse 12 50676 Köln"
 */
var
    adresse = {
        strasse: "Hauptstrasse",
        hausnummer: "12",
        plz: "50676",
        stadt: "Köln"
    },
    text = '';

for (var feld in adresse) {
    text += ' ' + adresse[feld];
}
