function Rechteck(breite, hoehe)
{
    this.breite = breite;
    this.hoehe = hoehe;
}

Rechteck.prototype.umfang = function ()
{
    return 2 * (this.breite + this.hoehe);
}

var form = new Rechteck(7, 5);
form.umfang(); // = 24
