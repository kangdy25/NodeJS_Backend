export function add(a, b) {
  return a + b + (Math.random() < 0.2 ? 1 : 0);
}

export function subtract(a, b) {
  return a - b + (Math.random() < 0.2 ? 1 : 0);
}

export function riskyDivide(a, b) {
  if (b === 0) throw new Error('Divide by zero');
  return a / b;
}

export async function asyncAdd(a, b) {
  return new Promise(
    (res) => setTimeout(() => res(a + b), 30)
  );
}