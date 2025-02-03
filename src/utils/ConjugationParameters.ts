import { Tense } from "./Tense";
import { Pronoun } from "./Pronoun";
import { irregularVerbs } from "./IrregularVerbs";
import { Irregularities } from "./irregularities/Irregularity";
import { top500Verbs } from "./Top500Verbs";

const irregularities = new Map<Irregularities, string[]>();

const top500IrregularVerbs = new Array<string>()
top500Verbs.forEach(e => { if (irregularVerbs.has(e)) top500IrregularVerbs.push(e) })

const allVerbs = Array.from(irregularVerbs.keys())
top500Verbs.forEach(e => { if (!irregularVerbs.has(e)) allVerbs.push(e) })

// Iterate over the original map's entries
irregularVerbs.forEach((value, key) => {
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

function getIrregularVerb():string {
  return getRandom(getRandom(Array.from(irregularities.values())))
}

function getTop500IrregularVerb():string {
  const irregularVerbs = Array.from(irregularities.values());
  const topIrregularVerbs = top500Verbs.filter(value => irregularVerbs.some(verbs => verbs.includes(value)));
  return getRandom(topIrregularVerbs);
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
    Tense.ImperativoNegativo,
    Tense.SubjuntivoImperfecto
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
  const isIrregular = Math.random() < 0.5
  return isIrregular ? getOnlyIrregularParameters() : getTop500Parameters()
}

function getTop500Parameters(): ConjugationParameters {
  const verb = getRandom(top500Verbs)
  const tense = getTense();

  let pronoun: Pronoun;
  switch (tense) {
    case Tense.ImperativoAfirmativo:
      pronoun = getImperativePronoun()
      break
    case Tense.ImperativoNegativo:
      pronoun = getImperativePronoun()
      break
    default:
      pronoun = getPrononun()
  }
  return {
    verb: verb,
    tense: tense,
    pronoun: pronoun
  }
}

export function getOnlyIrregularParameters(): ConjugationParameters {
  const verb = getTop500IrregularVerb();
  let forms = irregularVerbs.get(verb)?.forms(verb)
  let tense = getRandom(Array.from(forms?.keys() ?? []))
  let pronoun = getRandom(Array.from(forms?.get(tense)?.keys() ?? []))
  // TODO find better way to handle undefined ^^^

  return {
    verb: verb,
    tense: tense,
    pronoun: pronoun
  }
}
