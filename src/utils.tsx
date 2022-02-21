import mapValues from "lodash.mapvalues";
import { Alg } from "cubing/alg";
import { AlgMap } from "./types";

export const mapToAlg = (conjMap: AlgMap) => {
  return mapValues(conjMap, (value) => new Alg(value))
}

export const asyncInterval = async (callback, ms) => {
  return new Promise<void>((resolve, reject) => {
    const interval = setInterval(async () => {
      if (await callback()) {
        resolve();
        clearInterval(interval);
      }
    }, ms);
  });
}
