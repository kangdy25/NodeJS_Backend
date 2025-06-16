import { add as addMath, mult } from './math.js';
import { add as addVector, sub } from './vector.js';
import "./fileA.js";
import "./fileB.js";
import { html } from "./fetch-google.js";

console.log(addMath(1, 2));

console.log(
  addVector(
    { x: 1, y: 2 },
    { x: 3, y: 4 }
  )
);

console.log(html.slice(0, 15));