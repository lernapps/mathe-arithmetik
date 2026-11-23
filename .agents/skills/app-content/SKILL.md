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

Je Seite eine Kompetenz, Datei `src/<kapitel>/<seite>.yaml`. Ein Kapitel `prozent` mit zehn Seiten in dieser Reihenfolge,
gegliedert nach dem Issue lernapps/apps#391: Grundaufgaben, Vergleichen und Sachaufgaben, Zu- und Abnahme und Zinsen.

- Recap: `recap` (`recap:` natuerliche-zahlen, brueche-begriff, dezimalbrueche): Fachbegriffe, Beispiele, `Kurztest`.
- Grundaufgaben am Prozentstreifen: Grundwert, Prozentwert, Prozentsatz erkennen (`grundbegriffe`, gehört auch zu
  #389, nur nach den Regeln bereinigt), Prozentwert (`prozentwert`, Musterseite), Prozentsatz (`prozentsatz`) und
  Grundwert berechnen (`grundwert`).
- Vergleichen und Sachaufgaben: zwei Werte prozentual vergleichen (`vergleich`), Sachaufgaben übersetzen
  (`sachaufgaben`).
- Zu- und Abnahme, Zinsen: mit Zu- und Abnahme rechnen (`veraenderung`), Prozentpunkte unterscheiden und mehrere
  Änderungen verknüpfen (`prozentpunkte`), einfache Zinsen berechnen (`zinsen`: Jahr, Monat, Tag mit 360-Tage-Jahr).
- Bausteine je Seite (`competencies`): `grundbegriffe` → `prozent-grundbegriffe`, `prozentwert` →
  `prozent-prozentwert`, `prozentsatz` → `prozent-prozentsatz`, `grundwert` → `prozent-grundwert`, `vergleich` →
  `prozent-vergleich`, `sachaufgaben` → `prozent-sachaufgaben`, `veraenderung` → `prozent-veraenderung`,
  `prozentpunkte` → `prozent-von-prozenten`, `zinsen` → `zinsrechnung`.
- Nicht hier: Zinseszins und exponentielles Wachstum (#396), Prozent als Hundertstel (#389).

## Content structure

Jede Seite hat diese Abschnitte, in dieser Reihenfolge und mit diesen ids (öffentlicher Vertrag, nie umbenennen):

1. `warum` – „Warum?“: ein Alltagsfall mit dem Prozentstreifen, die gesuchte Stelle als Fragezeichen.
2. `regel` – „Regel“: Dreisatz-Tabelle und Formel nebeneinander (`table`), Merkhilfe. Begriffe als `definition`
   nur einmal im ganzen Projekt (Grundwert, Prozentwert, Prozentsatz stehen auf `grundbegriffe`).
3. `beispiel` – „Beispiel“: eine `example`-Box mit eigenen Zahlen, Streifen und `table`.
4. `uebung` – „Übung“: mindestens vier Aufgaben, steigend, mindestens zwei Arten (siehe Exercise patterns).

Kein `bild`- und kein `video`-Abschnitt mehr: Der Streifen steht in `warum` und im Beispiel.

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

- Je Seite eine Übungskomponente mit „Bild zur Aufgabe“ (Prozentstreifen), Tipp, Rechenweg und Rückmeldung nach
  Fehlertyp:
  - Prozent: `Prozent<Seite>` (z. B. `grundwert-aufgabe`, `ProzentGrundwert`), gemeinsame Logik in
    `ProzentKern.ts`/`ProzentAufgabe.ts`, Ansicht `ProzentUebung.vue`, Bild `ProzentBild.vue`, das den Streifen
    zeichnet (Bild `streifen` in `ProzentAufgabe.ts`). Rundungsregel: so viele Stellen wie verlangt oder mehr, Brüche
    und Terme wie `250*12/100` erlaubt. Division steht als `:` in Gleichungen und Rechenwegen.
- Dazu je Seite mindestens zwei Übungen ohne Komponente: `single-choice`/`true-false`/`number` mit Streifen davor und
  `generated` (Zahl, `mistakes`, `hint`, `steps`). Jede falsche Antwort bekommt ihren Grund.
- Zufallsaufgaben: keine Fallen, die zahlengleich mit der richtigen Antwort sind (G = 100, W = p); ganze Personen;
  Ergebnisse unter 10000, damit kein Zahlenwert ohne Gruppierung erscheint.
- Selbsteinschätzung (`selfAssessment` in `chapter.yaml`): fünf Schritte zu 3 bis 4 Aufgaben, je abgefragte Seite 2
  Aufgaben, in der Reihenfolge der Seiten; bevorzugt Komponente und `generated`. `grundbegriffe` fehlt: Wer die
  Aufgaben mit Geschichte löst, erkennt Grundwert, Prozentwert und Prozentsatz schon.
- Kurztest im Recap: Komponente `Kurztest` (aus den gemeinsamen Dateien des Epics), eine Frage, sofortige
  Rückmeldung, danach der Satz mit der Kartenseite des Bausteins.
- Text und Optionen einer Quiz-Frage sind reiner Text ohne `$…$` (die Laufzeit-Tests vergleichen ungesetzten Text):
  Hochzahlen als `²`, Malpunkt `·`.

## Figures

- Der **Prozentstreifen** (`ProzentStreifen`, `vue-component` mit `nojs`): oben 0 % bis 100 % (bei Zunahme bis 125 %
  u. ä., gestrichelt), unten der Grundwert; Marke für den Prozentsatz; Pfeil „· 1,25“ für den Faktor; `verdeckt`,
  wenn der Prozentsatz gesucht ist. In allen Seiten und Übungsbildern gleich benannt: „Prozentstreifen“.
- Hunderterfeld und Balken (`figure` mit `draw`) nur noch auf `grundbegriffe` (gehört auch zu #389).
- Farben: Mathe-Blau `#1d4ed8`, Hervorhebung Orange `#ff8f00`.

## Sources

- Lernlandkarte Mathematik, KMK-Bildungsstandards 2022, Hessisches Kerncurriculum (Links geprüft), eigene
  Herleitungen und eigene Aufgaben mit Rechenprobe.
- Keine Videos, kein serlo.org, keine externen Links an Aufgaben: wo das Werkzeug einen `links:`-Eintrag verlangt,
  steht die Kartenseite des Bausteins (`https://lernapps.net/apps/map/mathematik/c/<id>/`).
- Texte und Aufgaben sind eigene Arbeit (MIT).

## Adding a chapter or round

1. Kompetenzen als „Ich kann …“ hier eintragen; Seiten-ids festlegen (nie wieder ändern).
2. `src/<kapitel>/chapter.yaml` und je Seite die YAML-Datei mit den vier Abschnitten und `competencies` (Bausteine
   des Strangs); Kapitel in `src/app.yaml`.
3. Übungen nach den Mustern oben, Test zuerst (`src/components/<Name>.test.ts`).
4. Beispielbilder nach Figures.
5. 1 bis 3 ihrer Übungen in `selfAssessment` aufnehmen, wie Skill `lernapps-explainer-self-assessment` sagt.
6. `npx vp test run`, `npm run build`, `npx lernapps check`; dann Commit und Pull Request.

## Rules learned from mistakes

- Formeln in `description` erschienen roh im Inhaltsverzeichnis → reiner Text.
- Formeln in Quiz-Fragen ließen die Laufzeit-Tests scheitern und hatten keinen zugänglichen Namen → reiner Text.
- Bilder als Komponente waren ohne JavaScript unsichtbar → statische SVGs aus `scripts/bilder.mjs`.
- Videos und serlo-Links verstießen gegen die gemeinsamen Regeln (keine Dritt-Inhalte, nur Kartenseiten) → entfernt.
- Hunderterfeld und Prozentbalken in den Übungen trugen den Streifen nicht → Bild `streifen` in allen Prozent-Übungen.
- Ein wählbares Feld mit sichtbarem Text braucht diesen Text am Anfang seines Namens (axe
  label-content-name-mismatch).
