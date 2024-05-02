import React from "react";
import { tenseToString } from "./Tense";
import { pronounToString } from "./Pronoun";
import { ConjugationParameters } from "./ConjugationParameters";

export default function Task({ params }: { params: ConjugationParameters }) {
    const translateLink = "https://translate.google.com/?sl=es&tl=en&text=" + params.verb
    const wordrefLink = "https://www.wordreference.com/conj/esverbs.aspx?v=" + params.verb

    return (
        <div className="card-body">
            <h5 className="card-title">{params.verb}</h5>
            <h6 className="card-subtitle">{pronounToString(params.pronoun)} - {tenseToString(params.tense)}</h6>
            <div>
                <a className="card-link" href={translateLink} target="_blank">Translation</a>
                <a className="card-link" href={wordrefLink} target="_blank">Conjugation</a>
            </div>
        </div>
    )
}
