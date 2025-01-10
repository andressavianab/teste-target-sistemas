import {
  daysBiggerThanMonthAverage,
  highestTurnover,
  isFibonacci,
  logSum,
  lowestTurnover,
  percentageByState,
  revertString,
} from "./first-test";

it("Deve imprimir o resultado da variavel sum (soma) no console", () => {
  const spy = jest.spyOn(console, "log");
  logSum();
  expect(spy).toHaveBeenCalledWith(91);
});

it("Deve retornar uma mensagem dizendo se o número faz parte da sequência de Fibonacci ou não", () => {
  expect(isFibonacci(5)).toBe("O número 5 pertence à sequência de Fibonacci");
  expect(isFibonacci(88)).toBe(
    "O número 88 não pertence à sequência de Fibonacci"
  );
});

it("Deve retornar o menor valor de faturamento ocorrido em um dia do mês", () => {
  expect(lowestTurnover()).toBe("373.78");
});

it("Deve retornar o maior valor de faturamento ocorrido em um dia do mês", () => {
  expect(highestTurnover()).toBe("48924.24");
});

it("Deve retornar a quantidade de dias em que o faturamento foi superior à média mensal", () => {
  expect(daysBiggerThanMonthAverage()).toBe(12);
});

it("Deve retornar o percentual de faturamento por estado", () => {
  expect(percentageByState()).toEqual({
    ES: "15.03",
    MG: "16.17",
    Outros: "10.98",
    RJ: "20.29",
    SP: "37.53",
  });
});

it("Deve retornar uma string com os caracteres invertidos", () => {
  expect(revertString("hello")).toBe("olleh");
});
