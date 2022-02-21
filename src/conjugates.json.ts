import { mapToAlg } from './utils';

const OPCorners = {
  b: "R2",
  c: "R2 D'",
  d: "F2",
  f: "F' D",
  g: "F' ",
  h: "D' R",
  i: "F R'",
  j: "R'",
  k: "F' R'",
  l: "F2 R'",
  m: "F",
  n: "R' F",
  o: "D2 F'",
  p: "D R",
  q: "R D'",
  s: "D F'",
  t: "R",
  u: "D",
  v: "",
  w: "D'",
  x: "D2",
};

const OPEdges = {
  a: "Lw2 D' L2",
  c: "Lw2 D L2",
  d: "",
  e: "L Dw' L",
  f: "Dw' L",
  g: "L' Dw' L",
  h: "Dw L'",
  i: "Lw D' L2",
  j: "Dw2 L",
  k: "Lw D L2",
  l: "L'",
  n: "Dw L",
  o: "D2 L' Dw' L",
  p: "Dw' L'",
  q: "Lw' D L2",
  r: "L",
  s: "Lw' D' L2",
  t: "Dw2 L'",
  u: "D' L2",
  v: "D2 L2",
  w: "D L2",
  x: "L2",
};

const M2Edges = {
  a: "",
  b: "R U R' U'",
  d: "L' U' L U",
  e: "B L' B'",
  f: "B L2 B'",
  g: "B L B'",
  h: "L B L' B'",
  j: "U R U'",
  l: "U' L' U",
  m: "B' R B",
  n: "R' B' R B",
  o: "B' R' B",
  p: "B' R2 B",
  r: "U' L U",
  t: "U R' U'",
  v: "U R2 U'",
  x: "U' L2 U",
}

export const conjugateMap = {
  op: {
    corners: mapToAlg(OPCorners),
    edges: mapToAlg(OPEdges),
  },
  m2: {
    edges: mapToAlg(M2Edges)
  }
}