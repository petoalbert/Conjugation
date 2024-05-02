import React from "react";
import { conjugate } from "./Conjugation";
import { ConjugationParameters } from "./ConjugationParameters";

export function TaskResult({ params, input }: { params: ConjugationParameters, input: string }) {
    const correctForm = conjugate(params.verb, params.tense, params.pronoun)

    if (input === correctForm) {
        return (<p style={{ color: 'green' }}>Correct!</p>)
    } else {
        return (<p style={{ color: 'red' }}>Incorrect! Correct one was: {correctForm}"</p>)
    }
}