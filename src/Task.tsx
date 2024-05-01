import React from "react";
import { tenseToString } from "./Tense";
import { pronounToString } from "./Pronoun";
import { ConjugationParameters } from "./ConjugationParameters";

export default function Task({ params }: { params: ConjugationParameters }) {
    const translateLink = "https://translate.google.com/?sl=es&tl=en&text=" + params.verb
    const wordrefLink = "https://www.wordreference.com/conj/esverbs.aspx?v=" + params.verb

    return (
        <div>
            <div>{params.verb}</div>
            <div>{tenseToString(params.tense)}</div>
            <div>{pronounToString(params.pronoun)}</div>
            <div><a href={translateLink} target="_blank">Translation</a></div>
            <div><a href={wordrefLink} target="_blank">Conjugation</a></div>
        </div>
    )
}
