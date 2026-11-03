---
name: app-content
description: Use for any content work in this app - researching, writing, extending, correcting or reviewing its competencies, chapters, pages, rounds, questions, exercises, figures, terms or sources. This app's own content decisions; they take precedence over the generic lernapps content skills. Load it before you change any content.
---

# Content guide of this app

## Curriculum

- Hessen, Gymnasium (G9); Kerncurriculum Mathematik Sekundarstufe I (Hessisches Kultusministerium, 2021). Die
  Zuordnung je Bundesland steht im Katalog (Lernlandkarte, `map/mathematik/curricula/`), nicht hier.
- Prozentrechnung: Klasse 7 und 8.
- Die App gehört zum Strang `mathematik/arithmetik` der Lernlandkarte (`strand` in `src/app.yaml`, Format 2). Jede
  Seite nennt in `competencies` die Bausteine, die sie übt: ids aus `map/mathematik.yaml` in lernapps/apps, nur aus
  diesem Strang. Ein neues Kapitel kommt nur dazu, wenn seine Bausteine im Strang `arithmetik` stehen; fehlt ein
  Baustein, wird er dem Katalog vorgeschlagen, nicht in der App erfunden.
- Die App entstand aus der Mathe-Karte (Kapitel `prozent`); Seiten-ids und Adressen sind von dort übernommen.

## Competencies

Je Seite eine Kompetenz, Datei `src/<kapitel>/<seite>.yaml`.

- Prozent (`src/prozent/`): Ich kann Grundwert, Prozentwert und Prozentsatz erkennen (`grundbegriffe`), den
  Prozentsatz (`prozentsatz`), den Prozentwert (`prozentwert`) und den Grundwert berechnen (`grundwert`), mit Zu- und
  Abnahme rechnen (`veraenderung`), zwei Werte prozentual vergleichen (`vergleich`), Sachaufgaben übersetzen
  (`sachaufgaben`).
- Bausteine je Seite (`competencies`): `grundbegriffe` → `prozent-grundbegriffe`, `prozentsatz` →
  `prozent-prozentsatz`, `prozentwert` → `prozent-prozentwert`, `grundwert` → `prozent-grundwert`, `veraenderung` →
  `prozent-veraenderung`, `vergleich` → `prozent-vergleich`, `sachaufgaben` → `prozent-sachaufgaben`.

## Content structure

Jede Seite hat diese Abschnitte, in dieser Reihenfolge und mit diesen ids (öffentlicher Vertrag, nie umbenennen):

1. `warum` – „Warum?“: ein Absatz aus dem Alltag oder der Klassenarbeit.
2. `regel` – „Regel“: `formula`-Blöcke, Fachbegriffe als `definition`, eine `note` „Merke“.
3. `beispiel` – „Beispiel“: eine `example`-Box mit `table` (gegeben, Rechnung, Ergebnis).
4. `bild` – „Bild“: das Beispielbild, ohne JavaScript sichtbar (siehe Figures).
5. `video` – „Video dazu“: ein `video`-Block (`youtube: <11 Zeichen nach watch?v=>`, `title` wie YouTube ihn zeigt,
   `channel: Lehrerschmidt`), danach der serlo-Link als Text, falls es einen geprüften gibt. Kein YouTube-Link im
   Text, kein Satz zu Kanal oder Datenschutz: das zeigt der Block selbst.
6. `uebung` – „Übung“: die Übungen (siehe Exercise patterns).

`description` und `summary` sind reiner Text ohne `$…$`.

## Ids, addresses and the tutor

- Seiten-, Abschnitts- und Übungs-ids und die Adresse `/<kapitel>/<seite>/?<übung>=<n>#<übung>` sind ein öffentlicher
  Vertrag: Der KI-Tutor und geteilte Links nennen sie. Nie umbenennen; eine Seite zieht nicht um.
- Die Regeln für den Tutor stehen in `src/app.yaml` (`tutor.rules`), nicht in den Seiten.

## Terminology

- Du-Anrede, kurze Sätze, Ton einer Lehrkraft, nicht der App („die App akzeptiert“ ist verboten). Kein „NICHT“ in
  Großbuchstaben, keine Verweise wie „Kompetenz 3“: ein Link mit Namen.
- Prozent: Grundwert $G$, Prozentwert $W$, Prozentsatz $p$ (mit „%“); Formeln $W = \frac{G \cdot p}{100}$ usw.

## Exercise patterns

- Bezeichner: deutsche Fachbegriffe (`Grundwert`, `Pfad`), englisch nur für allgemeine Struktur. Jede Komponente
  trägt das Präfix ihres Kapitels (`Prozent…`). Gemeinsamer Code steht einmal in
  `src/components/Bruch.ts` (exakte Brüche, Runden) und `src/components/Zufallszahlen.ts` (mulberry32); nie in ein
  Kapitel kopieren.

- Je Seite eine Übungskomponente mit „Bild zur Aufgabe“, Tipp, Rechenweg und den typischen Fehlern der alten App:
  - Prozent: `Prozent<Seite>` (z. B. `grundwert-aufgabe`, `ProzentGrundwert`), gemeinsame Logik in
    `ProzentKern.ts`/`ProzentAufgabe.ts`, Ansicht `ProzentUebung.vue`, Bild `ProzentBild.vue`. Rundungsregel:
    so viele Stellen wie verlangt oder mehr, Brüche und Terme wie `250*12/100` erlaubt.
- Dazu je Seite eine Übung, die keine Komponente ist (der explainer verlangt sie): ein `generated`-Block
  (Zahl, `mistakes`, `hint`, `steps`).
- Selbsteinschätzung (`selfAssessment` in `chapter.yaml`): so viele Seiten wie sinnvoll, je abgefragte Seite 2
  Aufgaben, Schritte zu 3, je Kapitel 12. Bevorzugt die Übungskomponente der Seite (sie zeigt ihre Aufgabe
  selbst und zieht jede Runde eine neue), dazu die `generated`-Übung, sonst die Komponente zweimal.
  - Prozent: Komponente und `generated` auf `prozentsatz`, `prozentwert`, `grundwert`, `vergleich`; auf
    `veraenderung` die Komponente und `veraenderung-rueckwaerts`; `sachaufgaben` die Komponente zweimal.
    `grundbegriffe` fehlt, damit das Kapitel bei 12 bleibt: Wer die Aufgaben mit Geschichte der anderen Seiten löst,
    erkennt Grundwert, Prozentwert und Prozentsatz schon.
- Text und Optionen einer Quiz-Frage sind reiner Text ohne `$…$` (die Laufzeit-Tests vergleichen ungesetzten Text):
  Hochzahlen als `²`, Malpunkt `·`.

## Figures

- Hunderterfeld und Balken als `figure` mit `draw` (`hundred-grid`, `bar`).
- Farben: Mathe-Blau `#1d4ed8`, Hervorhebung Orange `#ff8f00`.

## Sources

- Videos: Kanal Lehrerschmidt (YouTube), je Seite geprüft über oEmbed (`author_name` und Titel passen); als `video`-Block,
  der den Player erst nach dem Klick von youtube-nocookie.com lädt.
- serlo.org: Artikel mit numerischer id (`https://de.serlo.org/mathe/<id>/<slug>`), per curl geprüft (Status 200, der
  Artikel selbst, passt zur Kompetenz). Kein schwacher Treffer; dann kein Link.
- Texte und Aufgaben sind eigene Arbeit (MIT), übernommen aus den alten Apps des Repos.

## Adding a chapter or round

1. Kompetenzen als „Ich kann …“ hier eintragen; Seiten-ids festlegen (nie wieder ändern).
2. `src/<kapitel>/chapter.yaml` und je Seite die YAML-Datei mit den sechs Abschnitten und `competencies` (Bausteine
   des Strangs); Kapitel in `src/app.yaml`.
3. Übungen nach den Mustern oben, Test zuerst (`src/components/<Name>.test.ts`).
4. Beispielbilder nach Figures.
5. 1 bis 3 ihrer Übungen in `selfAssessment` aufnehmen, wie Skill `lernapps-explainer-self-assessment` sagt.
6. `npx vp test run`, `npm run build`, `npx lernapps check`; dann Commit und Pull Request.

## Rules learned from mistakes

- Formeln in `description` erschienen roh im Inhaltsverzeichnis → reiner Text.
- Formeln in Quiz-Fragen ließen die Laufzeit-Tests scheitern und hatten keinen zugänglichen Namen → reiner Text.
- Bilder als Komponente waren ohne JavaScript unsichtbar → statische SVGs aus `scripts/bilder.mjs`.
- Videos als Textlink mit Satz „Der Link öffnet YouTube …“ wiederholten, was die Runtime kann → `video`-Block.
- Ein wählbares Feld mit sichtbarem Text braucht diesen Text am Anfang seines Namens (axe
  label-content-name-mismatch).
