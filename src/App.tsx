import React from "react";
import { useState } from "react";
import { conjugate } from "./Conjugation";
import { tenseToString } from "./Tense";
import { pronounToString } from "./Pronoun";
import { ConjugationParameters, getOnlyIrregularParameters, getParameters } from "./ConjugationParameters";

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