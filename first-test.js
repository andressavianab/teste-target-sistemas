import data from "./data.json" with { type: "json"};

export function logSum() {
  let index = 13;
  let sum = 0;
  let k = 0;
  while (k < index) {
    k = k + 1;
    sum = sum + k;
  }

  console.log(sum);
}

export function isFibonacci(n) {
  let a = 0;
  let b = 1;

  while (a < n) {
    let tempA = a;
    a = a + b;
    b = tempA;
  }

  if (a !== n) {
    return `O número ${n} não pertence à sequência de Fibonacci`;
  }

  return `O número ${n} pertence à sequência de Fibonacci`;
}

export function lowestTurnover() {
  let validTurnovers = data.filter((item) => item.valor > 0);

  let lowestTurnover = validTurnovers[0].valor;
  for (let i = 0; i < validTurnovers.length; i++) {
    if (validTurnovers[i].valor < lowestTurnover) {
      lowestTurnover = validTurnovers[i].valor;
    }
  }

  return lowestTurnover.toFixed(2);
}

export function highestTurnover() {
  let validTurnovers = data.filter((item) => item.valor > 0);

  let highestTurnover = 0;

  for (let i = 0; i < validTurnovers.length; i++) {
    if (validTurnovers[i].valor > highestTurnover) {
        highestTurnover = validTurnovers[i].valor;
        }
    }
    return highestTurnover.toFixed(2);
}

export function daysBiggerThanMonthAverage() {
    let average = (data.reduce((acc, item) => acc + item.valor, 0) / data.length).toFixed(2);

    let days = 0;
    for (let i = 0; i < data.length; i++) {
        if (data[i].valor > average) {
            days++;
        }
    }

    return days;
}

export function percentageByState() {

}

console.log(lowestTurnover());
console.log(highestTurnover());
console.log(daysBiggerThanMonthAverage());