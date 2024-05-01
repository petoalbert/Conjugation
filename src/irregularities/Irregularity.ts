import { Pronoun } from "../Pronoun"
import { Tense } from "../Tense"

export type Irregularities = {
    forms(verb: string): Map<Tense, Map<Pronoun, string>>
}