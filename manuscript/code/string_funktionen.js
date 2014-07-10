// Neue Funktion auf Zeichenketten: Die letzten i Zeichen
String.prototype.ende = function (i)
{
    return this.slice(-1 * i);
}

"Zickezacke".ende(1); // = "e"
"Zickezacke".ende(2); // = "ke"
"Zickezacke".ende(5); // = "zacke"
