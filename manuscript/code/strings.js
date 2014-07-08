/* Funktionen auf Feldern ("Arrays") */

var
    feld = [2, 3, "vier", 5],
    feld2 = [8, 9]


// Länge: 5
feld.length

// zusammenhängen: [2, 3, "vier", 5, 8, 9]
feld.concat(feld2)

// in Zeichenkette umwandeln: "2, 3, vier, 5"
feld.join(', ')

// letztes Element entfernen: [2, 3, "vier"]
feld.pop()

// Element anhängen: [2, 3, "vier", 6]
feld.push(6)

// Reihenfolge umkehren: [6, "vier", 3, 2]
feld.reverse()

// das erste Element entfernen: ["vier", 3, 2]
feld.shift()

// Am Anfang ein Element einfügen: [5, "vier", 3, 2]
feld.unshift(5)

// einen Teil des Feldes entfernen mit Anfang und Ende: ["vier", 3]
feld.slice(1, 3)

var feld = [2, 3, "vier", 5];

// einfügen von Elementen. Start, Anzahl, neue Elemente: [2, 6, 7, 5]
feld.splice(1, 2, [6, 7])

// alfabetisch sortieren: [2, 5, 6, 7]
feld.sort()
