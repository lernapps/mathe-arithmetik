// Tests der Lage-Rechnung und der Textalternative des Prozentstreifens.
import { expect, test } from "vite-plus/test";
import { STREIFEN_BREITE, STREIFEN_LINKS, streifenLage, streifenText } from "./ProzentStreifen.ts";

test("bis 100 % füllt der Grundwert die ganze Skala, der Teil liegt anteilig darin", () => {
  const lage = streifenLage(25);
  expect(lage.maximum).toBe(100);
  expect(lage.grundEnde).toBe(STREIFEN_LINKS + STREIFEN_BREITE);
  expect(lage.teilEnde).toBe(STREIFEN_LINKS + STREIFEN_BREITE / 4);
  expect(lage.ueberGrundwert).toBe(false);
});

test("über 100 % wird die Skala länger, der Grundwert bleibt bei 100 %", () => {
  const lage = streifenLage(150);
  expect(lage.maximum).toBe(150);
  expect(lage.teilEnde).toBe(STREIFEN_LINKS + STREIFEN_BREITE);
  expect(lage.grundEnde).toBeCloseTo(STREIFEN_LINKS + (STREIFEN_BREITE * 2) / 3);
  expect(lage.ueberGrundwert).toBe(true);
});

test("Werte außerhalb von 0 bis 300 werden begrenzt", () => {
  expect(streifenLage(-5).teilEnde).toBe(STREIFEN_LINKS);
  expect(streifenLage(1000).maximum).toBe(300);
});

test("Textalternative nennt Grundwert, Teil und Faktor", () => {
  const text = streifenText({ prozent: "12 %", wert: "30 €", grundwert: "250 €", faktor: "· 1,05" });
  expect(text).toContain("250 €");
  expect(text).toContain("12 %");
  expect(text).toContain("30 €");
  expect(text).toContain("· 1,05");
  expect(streifenText({ prozent: "12 %", wert: "30 €", grundwert: "250 €" })).not.toContain("Faktor");
});
