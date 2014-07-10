// Das Quadrat des Parameters
function quadrat(x)
{
    return x * x;
}

quadrat(3); // = 9

// Andere Schreibweise
var halb = function (x)
{
    return x / 2;
}

halb(12); // = 6

// Oft nützlich. In Funktionen kann auf äussere Variable zugegriffen werden
var nenner = 3;
function bruchteil(zaehler)
{
    return zaehler / nenner;
}

bruchteil(27); // = 9

nenner = 2;
bruchteil(10); // = 5

// Funktion auf Zeichenketten: Letztes Zeichen
function ende(text)
{
    return text.slice(-1);
}

ende("Abitur"); // "r"

// Rekrusiv: Summe aller natürlichen Zahlen bis n
function sum(n)
{
    if (n > 0) {
        return n + sum(n - 1);
    }
    else {
        return 0;
    }
}

sum(5); // 5+4+3+2+1 = 15
