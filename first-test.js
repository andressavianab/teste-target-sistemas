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