import { Pronoun } from "../Pronoun"
import { Tense } from "../Tense"
import { Irregularities } from "./Irregularity"

const { Yo, Tu, Usted, Nosotros, Vosotros, Ustedes } = Pronoun
const {
    IndicativoPresente,
    IndicativoIndefinido,
    SubjuntivoPresente,
    ImperativoAfirmativo,
    ImperativoNegativo
 } = Tense

export const erguir: Irregularities = {
    forms: function () {
        return new Map<Tense, Map<Pronoun, string>>([
            [IndicativoPresente, new Map([
                [Yo, "irgo"],
                [Tu, "irgues"],
                [Usted, "irgue"],
                [Ustedes, "irguen"],
            ])],
            [IndicativoIndefinido, new Map([
                [Usted, "irguió"],
                [Ustedes, "irguieron"],
            ])],
            [SubjuntivoPresente, new Map([
                [Yo, "irga"],
                [Tu, "irgas"],
                [Usted, "irga"],
                [Nosotros, "irgamos"],
                [Vosotros, "irgáis"],
                [Ustedes, "irgan"],
            ])],
            [ImperativoAfirmativo, new Map([
                [Tu, "irgue"],
                [Usted, "irga"],
                [Nosotros, "irgamos"],
                [Ustedes, "irgan"],
            ])],
            [ImperativoNegativo, new Map([
                [Tu, "irgas"],
                [Usted, "irga"],
                [Nosotros, "irgamos"],
                [Vosotros, "irgáis"],
                [Ustedes, "irgan"],
            ])],
        ])
    }
}
