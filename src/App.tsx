import React from "react";
import { useState } from "react";
import { conjugate } from "./Conjugation";
import { Tense, tenseToString } from "./Tense";
import { Pronoun, pronounToString } from "./Pronoun";
import { verbs } from "./IrregularVerbs";
import { Irregularities } from "./irregularities/Irregularity";

const irregularities = new Map<Irregularities, string[]>();

// Iterate over the original map's entries
verbs.forEach((value, key) => {
  // If the value is already in the reversed map, add the key to its array
  if (irregularities.has(value)) {
    irregularities.get(value)!.push(key);
  } else {
    // Otherwise, create a new array with the key as the only element
    irregularities.set(value, [key]);
  }
});

function getRandom<T>(l: T[]): T {
  const randomIndex = Math.floor(Math.random() * l.length);
  return l[randomIndex]
}

function getVerb():string {
  return getRandom(getRandom(Array.from(irregularities.values())))
}

type ConjugationParameters = {
  verb: string;
  tense: Tense;
  pronoun: Pronoun;
}

function getTense(): Tense {
  const tenses = [
    Tense.IndicativoPresente,
    Tense.IndicativoImperfecto,
    Tense.IndicativoIndefinido,
    Tense.IndicativoFuturoImperfecto,
    Tense.IndicativoCondicional,
    Tense.SubjuntivoPresente,
    Tense.ImperativoAfirmativo,
    Tense.ImperativoNegativo
  ]
  const randomIndex = Math.floor(Math.random() * tenses.length);
  return tenses[randomIndex];
}

function getPrononun(): Pronoun {
  const pronouns = [
    Pronoun.Yo,
    Pronoun.Tu,
    Pronoun.Usted,
    Pronoun.Nosotros,
    Pronoun.Vosotros,
    Pronoun.Ustedes
  ]
  const randomIndex = Math.floor(Math.random() * pronouns.length);
  return pronouns[randomIndex];
}

function getParameters(): ConjugationParameters {
  return {
    verb: getVerb(),
    tense: getTense(),
    pronoun: getPrononun()
  }
}

function MyButton({ onClick }: { onClick: () => void }) {
  return (
    <button onClick={onClick}>
      New word
    </button>
  );
}

export default function Gallery() {
  const [params, setParams] = useState<ConjugationParameters>(getParameters());

  function handleClick() {
    setParams(getParameters());
  }

  return (
    <section>
      <MyButton onClick={handleClick} />
      <div>{params.verb}</div>
      <div>{tenseToString(params.tense)}</div>
      <div>{pronounToString(params.pronoun)}</div>
      <div>{conjugate(params.verb, params.tense, params.pronoun)}</div>
    </section>
  );
}