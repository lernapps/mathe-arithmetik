// Der Prozentstreifen: oben die Skala in Prozent (0 % bis 100 %, bei Zunahme darüber hinaus), unten der Grundwert.
// Reine Lage-Rechnung für ProzentStreifen.vue, ohne DOM.

export const STREIFEN_LINKS = 20;
export const STREIFEN_BREITE = 300;
export const STREIFEN_HOEHE = 34;

export interface StreifenLage {
  /** Der rechte Rand der Skala in Prozent: 100, bei einer Zunahme der Prozentsatz. */
  maximum: number;
  /** x-Wert einer Prozentzahl auf dem Streifen. */
  x: (prozent: number) => number;
  /** Rechter Rand des Grundwert-Streifens (100 %). */
  grundEnde: number;
  /** Rechter Rand des markierten Teils (der Prozentsatz). */
  teilEnde: number;
  /** Ob der markierte Teil über den Grundwert hinausragt. */
  ueberGrundwert: boolean;
}

/** Die Lage des Streifens für einen markierten Teil von `prozent` % (0 bis 300) des Grundwerts. */
export function streifenLage(prozent: number): StreifenLage {
  const p = Math.min(Math.max(prozent, 0), 300);
  const maximum = Math.max(100, p);
  const x = (q: number): number => STREIFEN_LINKS + (STREIFEN_BREITE * q) / maximum;
  return { maximum, x, grundEnde: x(100), teilEnde: x(p), ueberGrundwert: p > 100 };
}

/** Die Textalternative für Screenreader: was der Streifen zeigt, mit allen Beschriftungen. */
export function streifenText(beschriftung: {
  prozent: string;
  wert: string;
  grundwert: string;
  faktor?: string | undefined;
  maximum?: number;
}): string {
  const faktor = beschriftung.faktor
    ? ` Der Faktor ${beschriftung.faktor} führt vom Grundwert zum markierten Teil.`
    : "";
  return `Prozentstreifen. Oben die Skala von 0 % bis ${beschriftung.maximum ?? 100} %, unten der Grundwert ${beschriftung.grundwert}. Der markierte Teil ist ${beschriftung.prozent}, unten ${beschriftung.wert}.${faktor}`;
}
