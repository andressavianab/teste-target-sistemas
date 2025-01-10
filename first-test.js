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
  let validTurnovers = data.filter((item) => item.turnover > 0);

  let lowestTurnover = validTurnovers[0].turnover;
  for (let i = 0; i < validTurnovers.length; i++) {
    if (validTurnovers[i].turnover < lowestTurnover) {
      lowestTurnover = validTurnovers[i].turnover;
    }
  }

  return lowestTurnover;
}

export function highestTurnover() {
  let validTurnovers = data.filter((item) => item.turnover > 0);

  let highestTurnover = 0;

  for (let i = 0; i < validTurnovers.length; i++) {
    if (validTurnovers[i].turnover > highestTurnover) {
        highestTurnover = validTurnovers[i].turnover;
        }
    }
    return highestTurnover;
}

export function daysBiggerThanMonthAverage() {
    let average = (data.reduce((acc, item) => acc + item.turnover, 0) / data.length).toFixed(2);

    let days = 0;
    for (let i = 0; i < data.length; i++) {
        if (data[i].turnover > average) {
            days++;
        }
    }

    return days;
}