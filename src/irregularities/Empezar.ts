import { Pronoun } from "../Pronoun"
import { Tense } from "../Tense"
import { Irregularities } from "./Irregularity"

const { Yo, Tu, Usted, Nosotros, Vosotros, Ustedes } = Pronoun
const {
    IndicativoPresente,
    SubjuntivoPresente,
    IndicativoIndefinido,
    ImperativoAfirmativo,
    ImperativoNegativo
} = Tense

export const empezar: Irregularities = {
    forms: function (string) {
        let oIndex = string.lastIndexOf("e")

        let base = string.slice(0, oIndex)

        let rest = string.slice(oIndex + 1, -3) // drop zar

        return new Map([
            [IndicativoPresente, new Map([
                [Yo, base + "ie" + rest + "zo"],
                [Tu, base + "ie" + rest + "zas"],
                [Usted, base + "ie" + rest + "za"],
                [Ustedes, base + "ie" + rest + "zan"],
            ])],
            [IndicativoIndefinido, new Map([
                [Yo, base + "ie" + rest + "cé"],
            ])],
            [SubjuntivoPresente, new Map([
                [Yo, base + "ie" + rest + "ce"],
                [Tu, base + "ie" + rest + "ces"],
                [Usted, base + "ue" + rest + "ce"],
                [Nosotros, base + "e" + rest + "cemos"],
                [Vosotros, base + "e" + rest + "céis"],
                [Ustedes, base + "ie" + rest + "cen"],
            ])],
            [ImperativoAfirmativo, new Map([
                [Tu, base + "ie" + rest + "za"],
                [Usted, base + "ue" + rest + "ce"],
                [Nosotros, base + "e" + rest + "cemos"],
                [Ustedes, base + "ie" + rest + "cen"],
            ])],
            [ImperativoNegativo, new Map([
                [Tu, base + "ie" + rest + "ces"],
                [Usted, base + "ue" + rest + "ce"],
                [Nosotros, base + "e" + rest + "cemos"],
                [Vosotros, base + "e" + rest + "céis"],
                [Ustedes, base + "ie" + rest + "cen"],
            ])]
        ])
    }
}
