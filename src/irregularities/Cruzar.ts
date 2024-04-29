import { Pronoun } from "../Pronoun"
import { Tense } from "../Tense"
import { Irregularity } from "./Irregularity"

const { Yo, Tu, Usted, Nosotros, Vosotros, Ustedes } = Pronoun
const {
    IndicativoPresente,
    IndicativoImperfecto,
    IndicativoIndefinido,
    IndicativoFuturoImperfecto,
    IndicativoCondicional,
    SubjuntivoPresente,
    ImperativoAfirmativo,
    ImperativoNegativo
} = Tense

export const cruzar: Irregularity = {
    forms: function (string) {
        let base = string.slice(0, -3) // zar

        return new Map([
            [IndicativoIndefinido, new Map([
                [Yo, base + "cé"],
            ])],
            [SubjuntivoPresente, new Map([
                [Yo, base + "ce"],
                [Tu, base + "ces"],
                [Usted, base + "ce"],
                [Nosotros, base + "cemos"],
                [Vosotros, base + "céis"],
                [Ustedes, base + "cen"],
            ])],
            [ImperativoAfirmativo, new Map([
                [Usted, base + "ce"],
                [Nosotros, base + "cemos"],
                [Ustedes, base + "cen"],
            ])],
            [ImperativoNegativo, new Map([
                [Tu, "no" + base + "ces"],
                [Usted, "no" + base + "ce"],
                [Nosotros, "no" + base + "cemos"],
                [Vosotros, "no" + base + "céis"],
                [Ustedes, "no " + base + "cen"]
            ])]
        ])
    }
}
