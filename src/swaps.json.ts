import { mapToAlg } from './utils';

const opSwaps = {
  corners: "R U' R' U' R U R' F' R U R' U' R' F R",
  edges: "R U R' U' R' F R2 U' R' U' R U R' F'",
  parity: "R U' R' U' R U R D R' U' R D' R' U2 R' U'",
};

const m2Swaps = {
  edges: "M2",
  parity: "D' L2 D M2 D' L2 D",
}

export const swapMap = {
  op: mapToAlg(opSwaps),
  m2: mapToAlg(m2Swaps),
}