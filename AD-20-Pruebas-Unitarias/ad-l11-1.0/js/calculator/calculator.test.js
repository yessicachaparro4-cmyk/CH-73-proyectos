const calculator = require('./calculator');

test('adds 1 + 2 to equal 3', () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test('adds -4 + 8 to equal 4', () => {
  expect(calculator.add(-4, 8)).toBe(4);
});

test('subtract 5 - 4 to equal 1', () => {
  expect(calculator.subtract(5, 4)).toBe(1);
});

test('subtract -5 - -10 to equal 5', () => {
  expect(calculator.subtract(-5, -10)).toBe(5);
});
// Prueba 1: División correcta
test('divide 10 entre 2 y obtiene 5', () => {
  expect(calculator.divide(10, 2)).toBe(5);
});

// Prueba 2: División con números negativos
test('divide -20 entre 4 y obtiene -5', () => {
  expect(calculator.divide(-20, 4)).toBe(-5);
});

// Prueba 3: Multiplicación correcta
test('multiplica 5 por 4 y obtiene 20', () => {
  expect(calculator.multiply(5, 4)).toBe(20);
});

// Prueba 4: Multiplicación por cero
test('multiplica 8 por 0 y obtiene 0', () => {
  expect(calculator.multiply(8, 0)).toBe(0);
});
// Tarea 3: Probar división entre cero
test('no permite dividir entre cero', () => {
  expect(() => calculator.divide(10, 0)).toThrow(
    "No se puede dividir entre cero"
  );
});