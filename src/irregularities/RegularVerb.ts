import { Pronoun } from "../Pronoun";
import { Tense } from "../Tense";
import { Irregularities } from "./Irregularity";

export const regularVerb: Irregularities = {
    forms(verb: string): Map<Tense, Map<Pronoun, string>> { return new Map() }
}