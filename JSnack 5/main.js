
//chiedere un numero N all ' utente che rappresenta su quanti e quali numeri dovro calcolare la potenza
var numero_utente = parseInt(prompt("inserisci un numero"));
  console.log("Il numero scelto dall'utente é : " + numero_utente);

  //controllare se l'utente mi manda un nummero
  if (isNaN(numero_utente)) {
    console.log("Si prega di inserire un numero intero es(1,2,3...)")
  }

//calcolare la potenza dei suddetti numeri
for (var i = 0; i < numero_utente + 1; i++) {
  var potenza_numero = (i * i * i)
  console.log("le potenze del numero : " + i + " é " + potenza_numero + ".")
}
