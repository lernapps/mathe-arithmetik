---
# Read by the hooks, the review, the evals. Schema: @lernapps/tooling/guidance/plan-front-matter.v1.schema.json
# Written by `lernapps plan` and the hooks. Never change a key or a value by hand.
# Archetype, as in the app's first plan. Allowed values: explainer, interactive, quiz.
archetype: explainer
# Current phase. Allowed values: explore, plan, code, commit.
phase: explore
# prePushFailures: failed pre-push runs of this increment, written by the hook.
prePushFailures: 1
# failedChecks: failed rules and runs, written by lernapps check and the hooks.
failedChecks: { checks-pass: 7 }
---

# Increment: prozent-zins

<!--
For you, the assistant. One increment of a published app: new competencies, chapters, pages, rounds, questions, or a
correction. The process is in AGENTS.md; this plan holds the method.
- `npx --no -- lernapps plan next` prints the task to do now, `plan done` ticks it and prints the next one.
- You write only below Goal, Key decisions, Notes, Answers, Content method and Retrospective, in the creator's
  language. Delete the comment of a section once the section is filled.
- The first version's decisions stand: archetype, content method, content guide. Never change an earlier plan.
- Work on the branch `increment/<NN>-<short name>`. Until Commit everything is local: push nothing.
-->

*Started 2026-11-23. Explore, Plan, Code, Commit.*

## Goal

Lernende der Klassen 7 und 8 sehen Prozent am Prozentstreifen und lösen damit die drei Grundaufgaben, vergleichen, rechnen
Zu- und Abnahmen mit dem Faktor, unterscheiden Prozentpunkte von Prozent, verknüpfen mehrere Änderungen und berechnen
einfache Zinsen. Alle acht Bausteine des Issues lernapps/apps#391 werden geübt.

## Key decisions

- Auftrag und Rahmen: Issue 391, `docs/mathe-epic/regeln.md`, Anweisung; die Antworten des Orchestrators (in Vertretung
  des Menschen) stehen unter „Answers“.
- Die veröffentlichte Version bleibt unberührt; Arbeit nur auf `increment/01-prozent-zins`, Vorschau-PR, nie mergen.
- Drei Kapitel wie im Issue. Seiten-ids der bestehenden Seiten bleiben; die Kapitel-ids ändern sich, damit die
  Adressen sich ändern (guess). Frage dazu im Planbericht.
- Videos (Lehrerschmidt), serlo.org-Quellen/-Links und `links:` an Aufgaben entfallen ersatzlos (Regeln §4);
  `links:` zeigen, wo das Werkzeug sie verlangt, auf die Kartenseite des Bausteins.
- Der Prozentstreifen wird eine eigene Komponente (SVG, Vue), in allen Seiten gleich benannt: „Prozentstreifen“.
  Hunderterfeld und Balken bleiben, wo sie tragen (Grundbegriffe gehört zu #389 und wird nicht angefasst).
- Zinseszins und exponentielles Wachstum: nicht hier (#396). Nur einfache Zinsen.
- Recap nach Regeln §7.6: Recap-Seite (`recap:`) plus eigene Kurztest-Seite dahinter, beide am Anfang von Kapitel 1.
- Das `lernapps update` ist der erste Commit auf dem Branch; es braucht die Freigabe des Menschen für
  `npx --yes @lernapps/tooling@latest update` (Auto-Modus lehnte ab, nicht umgangen).

## Notes

**Bestand → Baustein** (Recherche, gemeldet):
| Baustein (id) | Bestand | Was fehlt |
|---|---|---|
| prozent-prozentwert | Seite `prozentwert`, 2 Aufgaben | Streifen, Dreisatz-Tabelle neben Formel, ≥3 Aufgaben |
| prozent-prozentsatz | Seite `prozentsatz`, 2 Aufgaben | dasselbe |
| prozent-grundwert | Seite `grundwert`, 2 Aufgaben | dasselbe |
| prozent-vergleich | Seite `vergleich`, 2 Aufgaben | zwei Streifen nebeneinander, ≥3 Aufgaben |
| prozent-sachaufgaben | Seite `sachaufgaben`, 2 Aufgaben | Zeitung/Werbung, ≥3 Aufgaben |
| prozent-veraenderung | Seite `veraenderung`, 3 Aufgaben | Streifen über 100 %, Faktorpfeil |
| prozent-von-prozenten | fehlt | neue Seite `prozentpunkte` |
| zinsrechnung | fehlt | neue Seite `zinsen` |

**Kapitel und Seiten** (Baustein → Seite):
1. `grundaufgaben` · Drei Grundaufgaben am Prozentstreifen: Recap (`recap:` stellenwertsystem, bruchbegriff,
   dezimalbrueche, prozent-grundbegriffe; ids vor dem Bauen gegen die Karte prüfen) · Kurztest · `streifen`
   (Musterseite, neu: führt den Streifen ein, Baustein prozent-prozentwert; die Aufgaben der alten Seite `prozentwert`
   gehen darin auf) · `prozentsatz` · `grundwert`.
2. `vergleich` · Vergleichen und Sachaufgaben: `vergleich` · `sachaufgaben`.
3. `aenderung` · Zu- und Abnahme, Zinsen: `veraenderung` · `prozentpunkte` (neu) · `zinsen` (neu).

**Zinsen** (zu prüfen vom fachlichen Prüfer): Jahreszins Z = K · p % · t, mit t in Jahren; Monatszins mit m/12;
Tageszins mit t/360 (deutsche Zinsmethode, 30 Tage je Monat) und ausdrücklich in der Aufgabe genannt. Nur
Guthaben, keine Kredite mit Gebühren; keine Marken.

**Prozentpunkte/mehrfach:** +10 %, dann −10 % ergibt 99 %; Faktoren multiplizieren; Prozentpunkte = Differenz von
Prozentsätzen; Aufgabentypen: Faktor einer Folge bestimmen, Gesamtänderung, Prozent vs. Prozentpunkte unterscheiden.

**Quellen:** Karte, KMK-Bildungsstandards 2022, Hessisches Kerncurriculum, eigene Herleitungen und Aufgaben mit
Rechenprobe. Nichts übernommen. Ungeprüft: Lehrplanzuordnung Hessen (Annahme), Zinsmethode (Prüfer).

**Offen / Funde fürs Epic:** `recap`-Seiten ohne Aufgaben (geklärt); Verhältnis Klasse 7/8 der Karte zu Hessen.

## Explore

<!--
- All content questions belong here; Plan maps the answers onto the app. Ask; write no code.
- Skip what earlier answers or the app already tell. At most 2 questions per message, one topic each.
-->

### Tasks

- [ ] Read the README of the archetype's template (its path is in skill `lernapps-app`): what the app can do now.
      Tell the creator what is new, if it matters for this increment.
- [ ] Load the content guide `.agents/skills/app-content/SKILL.md` and read the earlier plans in `.vibe/plans/`: what
      the app teaches, how its content is made, what is open.
- [ ] Interview, one topic per question, the creator's words under "Answers": which competencies, chapters or rounds,
      for which school years; hurdles and examples; the amount; any change of look and feel or of terms. No answer:
      ask once more, then write your assumption with "(guess)".
- [ ] Load skill `lernapps-content-research`. Research what the content guide does not cover. Write under "Notes":
      the new competencies by chapter with their ids, the sources you opened.
- [ ] Write under "Notes" the didactic approach per competency and the scope (in, out, data range).
- [ ] The increment needs a kind of content the guide does not cover (a new page structure, screen, component or kind
      of exercise): load skills `lernapps-explainer-design` and `lernapps-exercise-patterns`. Else skip this task.
- [ ] **Checkpoint:** research. Show in plain words: the new competencies by chapter, the didactic approach, the
      scope, every "(guess)", the sources and what is unchecked. Stop and wait. Changes: change them, then ask again.

### Answers

- Orchestrator (in Vertretung des Menschen, nicht der Mensch): Bestandsprüfung angenommen; Videos und serlo raus,
  geschützte Leerzeichen, `a/b` nur als Ausnahme W28 (zählen); `lernapps update` als erster Commit; Plan 02 aus
  increment-template; Recap als eigene Seite plus Kurztest-Seite; Musterseite „Drei Grundaufgaben am Prozentstreifen“
  vor dem Lernenden-Prüfer (Klasse 7).
- Look and feel: fixed by the archetype.

## Plan

<!--
- Map the new content onto the app with the guide's patterns. The creator confirms the plan in one read.
- After the yes you work on your own.
-->

### Tasks

- [ ] Load skill `lernapps-content-growth`. Add the tasks of Code as slices, one per competency, in the guide's
      order, one call each: `npx --no -- lernapps plan add --at slices "<task>"`. Say in each which sub-agent may
      write it in parallel, if any.
- [ ] Write "Content method": the guide's patterns, figures and components per slice. Anything new: map it as skill
      `lernapps-explainer-design` says, and say why the guide's patterns do not fit.
- [ ] Draw a sketch of each new component or interactive exercise, in `.vibe/sketches/`.
- [ ] Show the creator, short: goal, new competencies by chapter, slices; in plain words what learners see and do and
      what is new. At most 2 questions.
- [ ] **Checkpoint:** confirm the plan and the content method. Stop and wait for an explicit yes. Changes: change
      them, then ask again.

### Content method

- **Prozentstreifen** (neue Komponente `ProzentStreifen`, SVG, Tastatur nicht nötig, Textalternative): Ein Streifen mit
  Skala 0 % bis 100 % oben und dem Grundwert (€, Schüler, g) unten; eine Stelle ist gesucht und gefragt. Lernende
  lesen ab, wo die Größe fehlt, und ordnen Prozentwert, Prozentsatz, Grundwert zu. Bei Veränderungen wird der Streifen
  über 100 % verlängert oder bei Rabatt gekürzt; ein Pfeil „· 1,05“ zeigt den Faktor. Kann nicht: Eingaben, Animation.
- **Dreisatz-Tabelle neben Formel** (Blocktyp `table` in zwei Spalten) auf `streifen`, `prozentsatz`, `grundwert`:
  dieselbe Rechnung zweimal, damit die Verbindung sichtbar wird.
- **Hunderterfeld und Balken** (vorhanden) bleiben, wo sie tragen; **Vergleich:** zwei Streifen mit anderem Grundwert.
- Aufgaben: `generated` (vorhanden) mit festem Seed-Beispiel, Rechenprobe, Fehler-Rückmeldung; je Baustein ≥3 Aufgaben.
- **Recap** (Kapitel 1): Voraussetzungen aus Stellenwertsystem, Bruchbegriff, Dezimalbrüche, Grundbegriffe als Fachbegriffe
  (Stellenwert, Zähler/Nenner, Dezimalbruch, Hundertstel, Hunderterfeld, drei Schreibweisen); Kurztest als normale Seite.
- Engagement je Seite: Einstieg mit Alltagsfall (Rabatt, Mehrwertsteuer, Wahl, Sparbuch), Aktivitätswechsel Streifen →
  Rechnung, Rückmeldung sofort; keine Geschichte über Figuren.

## Code

<!--
- Build locally on the branch, on your own. After each task: `plan done`, then one commit with the work and this
  plan. The hooks check each commit; a failing check is fixed from its message, as skill `lernapps-cli` says.
- What you cannot decide: choose, write it under "Key decisions" with "(guess)", go on.
- The creator asks for a change: say your reading in one sentence first.
-->

### Tasks

- [ ] `git switch -c increment/<NN>-<short name>` from `main`. Commit this plan on it.
- [ ] Load skill `lernapps-cli`. Update the app as its section "Update" says. Commit the update alone and fix its
      findings before any content. The update replaces the `lernapps-*` skills: read again those you use.
- [ ] Load skill `lernapps-explainer` and the content guide.
- [ ] Load skill `lernapps-content-questions`. Read whole, with your file tool:
      `.agents/skills/lernapps-explainer/references/blocks.md` and
      `.agents/skills/lernapps-explainer/references/exercises.md`. A foreign language: also
      `references/language-tasks.md` in the same folder. A component in the plan: also `references/components.md`.
- [ ] Decide whether the app needs `scope`, as "`scope`" in
      `.agents/skills/lernapps-explainer/references/structure.md` says. Write the choice under "Key decisions".
<!-- tasks: slices: one per competency, as written in Plan -->
- [ ] **Checkpoint:** the pattern page, after the first slice. A slice in a pattern the app already has: show it to
      the creator and go on. A new pattern: load skill `lernapps-learner-check`, do its learner check, fix what it
      finds, then ask the creator whether the others may follow it, and wait.
- [ ] Update the content guide so that it describes the app as it is now (`app-content-matches`).
- [ ] Run `npx --no -- lernapps check` until it passes.
- [ ] Look at every changed screen, at 360 px and on a desktop, as "Look at the app" of skill `lernapps-cli` says.

## Commit

<!--
- Publish with the creator's yes. A push to `main` publishes.
- Open the pull requests (to `main`, to the catalog) without asking: they publish nothing.
-->

### Tasks

- [ ] If pages or exercises changed, load skill `lernapps-explainer-self-assessment` and update the self-assessment
      as it says. Commit.
- [ ] Load skill `lernapps-github`. Push the branch, open the preview pull request and see its checks to green, as it
      says.
- [ ] **Checkpoint:** publish. Show what the increment adds and the preview link. Ask whether it may go online. Stop
      and wait for the yes.
- [ ] Load skill `lernapps-commit`. Publish as skill `lernapps-github` says: the pull request squash-merged into
      `main`, the run of `Pages` watched to its end.
- [ ] Open the address the job `deploy` printed and confirm the new content. Never use a derived address.
- [ ] The app is listed and its entry changes (school years, summary): load skill `lernapps-listing` and write the
      changed entry. Else skip this task.
- [ ] Fill the retrospective.
- [ ] Commit this plan on `main` and push it. A push of only `.vibe/` publishes nothing.
- [ ] **Checkpoint:** list. The entry changed: open the pull request to the catalog as skill `lernapps-listing`
      says, without asking first, see it to "bestanden", then show the creator the pull request and its result. The
      entry did not change: tell the creator that the catalog updates the app by itself.
- [ ] If the plan changed since its last push, commit it on `main` and push again.

## Retrospective

<!-- At the end of Commit. Facts, short, no names. Read by review and evals. -->

### Phases reached

<!-- Last phase completed, checkpoints passed. E.g. "commit; confirmed, published". -->

### Creator turns after the plan

<!-- Number of creator messages after the confirmation, topic of each. Target: at most 3. -->

### Where I had to guess

<!-- Each gap in plan, skills, content guide, messages or answers, and your choice. "None" if none. -->
