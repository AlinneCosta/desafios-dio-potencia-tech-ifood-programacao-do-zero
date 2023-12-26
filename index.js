//Desafio DIO Potência Tech iFood - Programação do Zero: Calculadora de Partidas Rankeadas

let vitoria = 0;  //Inicia a variável vitória.
let derrota = 0;  //Inicia a variável derroata.

function saldoVitorias(vitoria, derrota) {
  let saldo = vitoria - derrota;
  return saldo;
}

let saldo = saldoVitorias(321, 52); //Escreva aqui as quantidades de vitórias e derrotas.

switch (true) {
  case saldo <= 10:
    console.log(
      "O Herói tem o saldo de " + saldo + " e está no nível de Ferro."
    );
    break;

  case saldo >= 11 && saldo <= 20:
    console.log(
      "O Herói tem o saldo de " + saldo + " e está no nível de Bronze."
    );
    break;

  case saldo >= 21 && saldo <= 50:
    console.log(
      "O Herói tem o saldo de " + saldo + " e está no nível de Prata."
    );
    break;

  case saldo >= 51 && saldo <= 80:
    console.log(
      "O Herói tem o saldo de " + saldo + " e está no nível de Ouro."
    );
    break;

  case saldo >= 81 && saldo <= 90:
    console.log(
      "O Herói tem o saldo de " + saldo + " e está no nível de Diamante."
    );
    break;

  case saldo >= 91 && saldo <= 100:
    console.log(
      "O Herói tem o saldo de " + saldo + " e está no nível de Lendário."
    );
    break;

  default:
    console.log(
      "O Herói tem o saldo de " + saldo + " e está no nível de Imortal."
    );
}
