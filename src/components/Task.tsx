import React from "react";
import { tenseToString } from "../utils/Tense";
import { pronounToString } from "../utils/Pronoun";
import { ConjugationParameters } from "../utils/ConjugationParameters";

export default function Task({ params }: { params: ConjugationParameters }) {
    const translateLink = "https://www.rae.es/drae2001/" + params.verb
    const wordrefLink = "https://www.wordreference.com/conj/esverbs.aspx?v=" + params.verb

    return (
        <div className="text-center">
        <div className="card-header">{params.verb}</div>
        <div className="card-body">
            <h6 className="card-subtitle">{pronounToString(params.pronoun)} - {tenseToString(params.tense)}</h6>
            <div>
                <a className="card-link" href={translateLink} target="_blank">Translation</a>
                <a className="card-link" href={wordrefLink} target="_blank">Conjugation</a>
            </div>
        </div>
        </div>
    )
}
