import React from "react";
import { conjugate } from "./Conjugation";
import { ConjugationParameters } from "./ConjugationParameters";

export function TaskResult({ params, input }: { params: ConjugationParameters, input: string }) {
    const correctForm = conjugate(params.verb, params.tense, params.pronoun)
    const trimmedInput = input.toLowerCase().trim()

    if (trimmedInput === correctForm) {
        return (<p className="success">{correctForm} &#128526;</p>)
    } else if (input.trim() === "") {
        return (<p className="failure">No guess &#128529;<br />{correctForm}</p>)
    } else {
        return (<p className="failure"><s>{trimmedInput}</s> &#128546;<br />{correctForm}</p>)
    }
}