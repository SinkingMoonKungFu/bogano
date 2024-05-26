import Chance from "chance";

const chance = new Chance();

export class RandomUtil {
  static getUniqueDOMID() {
    return chance.string({
      length: "10",
      pool: "0123456789abcdefghijklmnopqrstuvwxyz",
    });
  }
}
