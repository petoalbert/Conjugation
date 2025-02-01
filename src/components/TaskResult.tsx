import React from "react";
import { conjugate } from "../utils/Conjugation";
import { ConjugationParameters } from "../utils/ConjugationParameters";

export function TaskResult({ params, input }: { params: ConjugationParameters, input: string }) {
    const correctForm = conjugate(params.verb, params.tense, params.pronoun);
    const trimmedInput = input.toLowerCase().trim();

    if (trimmedInput === correctForm) {
        return (<p className="text-center text-green-500">{correctForm} &#128526;</p>);
    } else if (input.trim() === "") {
        return (<p className="text-center text-red-500">No guess &#128529;<br />{correctForm}</p>);
    } else {
        return (<p className="text-center text-red-500"><s>{trimmedInput}</s> &#128546;<br />{correctForm}</p>);
    }
}