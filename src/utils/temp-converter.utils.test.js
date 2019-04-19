import { Kelvin2C, Kelvin2F } from "./temp-converter.utils";

const round = a => Math.round(a * 100) / 100;

it("test convertet from kelvin", () => {
    expect(round(Kelvin2C(273.15))).toBe(0);
    expect(round(Kelvin2C(0))).toBe(-273.15);
    expect(round(Kelvin2F(0))).toBe(-459.67);
    expect(round(Kelvin2F(-459))).toBe(-1285.87);
});