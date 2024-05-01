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

function getOnlyIrregularParameters(): ConjugationParameters {
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

function MyButton({ onClick }: { onClick: () => void }) {
  return (
    <button onClick={onClick}>
      New word
    </button>
  );
}

export default function Gallery() {
  const [params, setParams] = useState<ConjugationParameters>(getParameters());
  const [onlyIrregular, setOnlyIrregular] = useState<boolean>(false);
  const [inputText, setInputText] = useState('');
  const [isValid, setIsValid] = useState<boolean | null>(null);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(event.target.value);
  };

  const handleCheck = () => {
    if (inputText === conjugate(params.verb, params.tense, params.pronoun)) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  };

  const handleCheckboxChange = () => {
    setOnlyIrregular(prevState => !prevState);
  };

  function handleClick() {
    setIsValid(null)
    setInputText('')

    if (onlyIrregular) {
      setParams(getOnlyIrregularParameters())
    } else {
      setParams(getParameters())
    }
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleCheck();
    }
  };

  function translateLink(): string {
    return "https://translate.google.com/?sl=es&tl=en&text=" + params.verb
  }

  function wordrefLink(): string {
    return "https://www.wordreference.com/conj/esverbs.aspx?v=" + params.verb
  }

  return (
    <section>
    <div>
      <label>
        <input
          type="checkbox"
          checked={onlyIrregular}
          onChange={handleCheckboxChange}
        />
        Only irregular forms
      </label>
    </div>
      <div>{params.verb}</div>
      <div>{tenseToString(params.tense)}</div>
      <div>{pronounToString(params.pronoun)}</div>
      {/* <div>{conjugate(params.verb, params.tense, params.pronoun)}</div> */}
      <input
        type="text"
        value={inputText}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        placeholder="Enter text..."
      />
      {isValid === true && <p style={{ color: 'green' }}>Correct!</p>}
      {isValid === false && <p style={{ color: 'red' }}>Incorrect! Correct one was: 
      {conjugate(params.verb, params.tense, params.pronoun)}"</p>}
      <div><a href={translateLink()} target="_blank">Translation</a></div>
      <div><a href={wordrefLink()} target="_blank">Conjugation</a></div>
      <MyButton onClick={handleClick} />

    </section>
  );
}