import React from "react";
import { tenseToString } from "../utils/Tense";
import { pronounToString } from "../utils/Pronoun";
import { ConjugationParameters } from "../utils/ConjugationParameters";

export default function Task({ params }: { params: ConjugationParameters }) {
    const translateLink = "https://www.rae.es/drae2001/" + params.verb;
    const wordrefLink = "https://www.wordreference.com/conj/esverbs.aspx?v=" + params.verb;

    return (
        <div className="text-center">
            <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <div className="font-bold text-xl mb-2">{params.verb}</div>
                <div className="text-gray-700 text-base mb-4">
                    <h6 className="text-lg font-semibold">{pronounToString(params.pronoun)} - {tenseToString(params.tense)}</h6>
                </div>
                <div>
                    <a className="text-blue-500 hover:text-blue-700 mr-4" href={translateLink} target="_blank" rel="noopener noreferrer">Translation</a>
                    <a className="text-blue-500 hover:text-blue-700" href={wordrefLink} target="_blank" rel="noopener noreferrer">Conjugation</a>
                </div>
            </div>
        </div>
    );
}
