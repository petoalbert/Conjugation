import { Tense } from "./Tense";
import { Pronoun } from "./Pronoun";
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

export type ConjugationParameters = {
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

function getImperativePronoun(): Pronoun {
  const pronouns = [
    Pronoun.Tu,
    Pronoun.Usted,
    Pronoun.Nosotros,
    Pronoun.Vosotros,
    Pronoun.Ustedes
  ]
  const randomIndex = Math.floor(Math.random() * pronouns.length);
  return pronouns[randomIndex];
}

export function getParameters(): ConjugationParameters {
  const tense = getTense();
  let pronoun: Pronoun;
  switch (tense) {
    case Tense.ImperativoAfirmativo:
    case Tense.ImperativoNegativo:
      pronoun = getImperativePronoun()
      break
    default:
      pronoun = getPrononun()
  }
  return {
    verb: getVerb(),
    tense: getTense(),
    pronoun: getPrononun()
  }
}

export function getOnlyIrregularParameters(): ConjugationParameters {
  const verb = getVerb()
  let forms = verbs.get(verb)?.forms(verb)
  let tense = getRandom(Array.from(forms?.keys() ?? []))
  let pronoun = getRandom(Array.from(forms?.get(tense)?.keys() ?? []))
  // TODO find better way to handle undefined ^^^

  return {
    verb: verb,
    tense: tense,
    pronoun: pronoun
  }
}
