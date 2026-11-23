<script setup lang="ts">
// Der Prozentstreifen als SVG: oben die Skala in Prozent, unten der Grundwert. Ein Teil ist markiert; Texte kommen
// über die Props. Keine Übung: es gibt nur die Darstellung, das Rechnen steht in den Aufgaben der Seite.
import { computed } from "vue";
import { STREIFEN_BREITE, STREIFEN_HOEHE, STREIFEN_LINKS, streifenLage, streifenText } from "./ProzentStreifen.ts";

const props = defineProps<{
  /** Der markierte Teil in Prozent des Grundwerts (0 bis 300). */
  prozent: number;
  /** Beschriftung des markierten Teils oben, zum Beispiel „12 %“ oder „? %“. */
  prozentText: string;
  /** Der Grundwert unten am rechten Ende des Grundwert-Streifens, mit Einheit. */
  grundwert: string;
  /** Der Wert des markierten Teils unten, mit Einheit, zum Beispiel „30 €“ oder „? €“. */
  wert: string;
  /** Der Faktor-Pfeil, zum Beispiel „· 1,05“; ohne Angabe kein Pfeil. */
  faktor?: string;
  /** Der Prozentsatz ist gesucht: kein markierter Teil, die Texte stehen mittig. */
  verdeckt?: boolean;
}>();

const lage = computed(() => streifenLage(props.verdeckt ? 50 : props.prozent));
const text = computed(() =>
  streifenText({
    prozent: props.prozentText,
    wert: props.wert,
    grundwert: props.grundwert,
    faktor: props.faktor,
    maximum: lage.value.maximum,
  }),
);
const breite = STREIFEN_LINKS * 2 + STREIFEN_BREITE;
const OBEN = 34;
const hoehe = computed(() => (props.faktor ? 128 : 100));
</script>

<template>
  <svg
    class="streifen-svg"
    :viewBox="`0 0 ${breite} ${hoehe}`"
    role="img"
    :aria-label="text"
    xmlns="http://www.w3.org/2000/svg"
  >
    <!-- Skala oben -->
    <text :x="lage.x(0)" y="14" font-size="12" text-anchor="start" class="schrift">0 %</text>
    <text :x="lage.grundEnde" y="14" font-size="12" text-anchor="end" class="schrift">100 %</text>
    <text :x="lage.teilEnde" y="28" font-size="13" font-weight="600" text-anchor="middle" class="akzent">
      {{ prozentText }}
    </text>
    <!-- Streifen -->
    <rect :x="lage.x(0)" :y="OBEN" :width="lage.grundEnde - lage.x(0)" :height="STREIFEN_HOEHE" rx="4" class="aus" />
    <rect
      v-if="!verdeckt"
      :x="lage.x(0)"
      :y="OBEN"
      :width="Math.min(lage.teilEnde, lage.grundEnde) - lage.x(0)"
      :height="STREIFEN_HOEHE"
      rx="4"
      class="an"
    />
    <rect
      v-if="lage.ueberGrundwert"
      :x="lage.grundEnde"
      :y="OBEN"
      :width="lage.teilEnde - lage.grundEnde"
      :height="STREIFEN_HOEHE"
      rx="4"
      class="ueber"
    />
    <line
      v-if="!verdeckt"
      :x1="lage.teilEnde"
      :y1="OBEN - 4"
      :x2="lage.teilEnde"
      :y2="OBEN + STREIFEN_HOEHE + 4"
      class="marke"
    />
    <line :x1="lage.grundEnde" :y1="OBEN - 4" :x2="lage.grundEnde" :y2="OBEN + STREIFEN_HOEHE + 4" class="grenze" />
    <!-- Grundwert unten -->
    <text :x="lage.x(0)" :y="OBEN + STREIFEN_HOEHE + 18" font-size="12" text-anchor="start" class="schrift">0</text>
    <text
      :x="lage.grundEnde"
      :y="OBEN + STREIFEN_HOEHE + 18"
      font-size="12"
      text-anchor="end"
      font-weight="600"
      class="schrift"
    >
      {{ grundwert }}
    </text>
    <text
      v-if="Math.abs(lage.teilEnde - lage.grundEnde) > 60"
      :x="lage.teilEnde"
      :y="OBEN + STREIFEN_HOEHE + 18"
      font-size="12"
      text-anchor="middle"
      font-weight="600"
      class="akzent"
    >
      {{ wert }}
    </text>
    <text
      v-else
      :x="lage.teilEnde"
      :y="OBEN + STREIFEN_HOEHE + 34"
      font-size="12"
      text-anchor="middle"
      font-weight="600"
      class="akzent"
    >
      {{ wert }}
    </text>
    <!-- Faktor-Pfeil -->
    <g v-if="faktor && !verdeckt">
      <path
        :d="`M ${lage.grundEnde} ${OBEN + STREIFEN_HOEHE + 48} Q ${(lage.grundEnde + lage.teilEnde) / 2} ${OBEN + STREIFEN_HOEHE + 74} ${lage.teilEnde} ${OBEN + STREIFEN_HOEHE + 48}`"
        class="pfeil"
        fill="none"
      />
      <text
        :x="(lage.grundEnde + lage.teilEnde) / 2"
        :y="OBEN + STREIFEN_HOEHE + 82"
        font-size="13"
        font-weight="600"
        text-anchor="middle"
        class="schrift"
      >
        {{ faktor }}
      </text>
    </g>
  </svg>
</template>

<style scoped>
.streifen-svg {
  display: block;
  width: 100%;
  max-width: 28rem;
  height: auto;
}
.an {
  fill: var(--page-accent, #1d4ed8);
}
.aus {
  fill: var(--page-surface, #f4f5f7);
  stroke: var(--page-border, #8a8f98);
  stroke-width: 0.75;
}
.ueber {
  fill: var(--page-surface, #f4f5f7);
  stroke: var(--page-accent, #1d4ed8);
  stroke-width: 2;
  stroke-dasharray: 5 3;
}
.grenze {
  stroke: var(--page-text, #1a1a1a);
  stroke-width: 1.5;
}
.marke {
  stroke: var(--page-accent, #1d4ed8);
  stroke-width: 2;
}
.pfeil {
  stroke: var(--page-text, #1a1a1a);
  stroke-width: 1.5;
}
.schrift {
  fill: var(--page-text, #1a1a1a);
}
.akzent {
  fill: var(--page-accent, #1d4ed8);
}
</style>
