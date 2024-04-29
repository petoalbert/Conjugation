import { Pronoun } from "../Pronoun"
import { Tense } from "../Tense"

export type Irregularity = {
    forms(verb: string): Map<Tense, Map<Pronoun, string>>
}