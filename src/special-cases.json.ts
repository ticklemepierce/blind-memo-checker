import { mapToAlg } from './utils';

const M2SpecialCases = {
  c: "U2 M' U2 M'",
  i: "U' (R' F' R) S (R' F R) S' U (M2)",
  q: "(U M')3 (U M) (U M')4",
  s: "(M2) U' S (R' F' R) S' (R' F R) U",
  w: "M U2 M U2",
}

export const specialCasesMap = {
  m2: mapToAlg(M2SpecialCases),
}

