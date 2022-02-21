import { mapToAlg } from './utils';

const M2SpecialCases = {
  c: "U2 M' U2 M'",
  i: "D M' U R2 U' M U R2 U' D' M2",
  q: "U2 M' U2 M'",
  s: "M2' D U R2 U' M' U R2 U' M D'",
  w: "M U2 M U2",
}

export const specialCasesMap = {
  m2: mapToAlg(M2SpecialCases),
}

