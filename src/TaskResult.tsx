import React from "react";
import { conjugate } from "./Conjugation";
import { ConjugationParameters } from "./ConjugationParameters";

export function TaskResult({ params, input }: { params: ConjugationParameters, input: string }) {
    const correctForm = conjugate(params.verb, params.tense, params.pronoun)
    const trimmedInput = input.toLowerCase().trim()

    if (trimmedInput === correctForm) {
        return (<p className="text-center success">{correctForm} &#128526;</p>)
    } else if (input.trim() === "") {
        return (<p className="text-center failure">No guess &#128529;<br />{correctForm}</p>)
    } else {
        return (<p className="text-center failure"><s>{trimmedInput}</s> &#128546;<br />{correctForm}</p>)
    }
}