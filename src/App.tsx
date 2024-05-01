import React from "react";
import { useState } from "react";
import { conjugate } from "./Conjugation";
import { Tense, tenseToString } from "./Tense";
import { Pronoun, pronounToString } from "./Pronoun";

type MyButtonProps = {
  count: number;
  onClick: () => void;
}

const verbs = [
    "actuar",
    "acentuar",
    "anticuar",
    "atenuar",
    "conceptuar",
    "consensuar",
    "continuar",
    "desconceptuar",
    "deshabituar",
    "desvirtuar",
    "devaluar",
    "efectuar",
    "evaluar",
    "exceptuar",
    "extenuar",
    "fluctuar",
    "graduar",
    "habituar",
    "insinuar",
    "interactuar",
    "menstruar",
    "perpetuar",
    "puntuar",
    "redituar",
    "reevaluar",
    "revaluar",
    "situar",
    "tatuar",
    "valuar"
]

function getVerb() {
  const randomIndex = Math.floor(Math.random() * verbs.length);
  return verbs[randomIndex];
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

function Profile() {
    return (
      <img
        src="https://i.imgur.com/MK3eW3As.jpg"
        alt="Katherine Johnson"
      />
    );
  }

  function MyButton( { onClick } : { onClick: () => void } ) {  
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