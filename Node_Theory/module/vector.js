const add = (a, b) => ({
  x: a.x + b.x,
  y: a.y + b.y
});

const sub = (a, b) => ({
  x: a.x - b.x,
  y: a.y - b.y
});

module.exports = { add, sub };