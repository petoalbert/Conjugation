import React from "react";
import { useState } from "react";
import { conjugate } from "./Conjugation";
import { tenseToString } from "./Tense";
import { pronounToString } from "./Pronoun";
import { ConjugationParameters, getOnlyIrregularParameters, getParameters } from "./ConjugationParameters";

export default function Task({ params }: { params: ConjugationParameters }) {
    return (
        <div>
            <div>{params.verb}</div>
            <div>{tenseToString(params.tense)}</div>
            <div>{pronounToString(params.pronoun)}</div>
        </div>
    )
}
