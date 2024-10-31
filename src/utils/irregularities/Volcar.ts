import { Pronoun } from "../Pronoun"
import { Tense } from "../Tense"
import { Irregularities } from "./Irregularity"

const { Yo, Tu, Usted, Nosotros, Vosotros, Ustedes } = Pronoun
const {
    IndicativoPresente,
    SubjuntivoPresente,
    ImperativoAfirmativo,
    ImperativoNegativo,
    IndicativoIndefinido
} = Tense

export const volcar: Irregularities = {
    forms: function (string) {
        let oIndex = string.lastIndexOf("o")

        let base = string.slice(0, oIndex)

        let rest = string.slice(oIndex + 1, -3) // drop car

        return new Map([
            [IndicativoPresente, new Map([
                [Yo, base + "ue" + rest + "co"],
                [Tu, base + "ue" + rest + "cas"],
                [Usted, base + "ue" + rest + "ca"],
                [Ustedes, base + "ue" + rest + "can"],
            ])],
            [IndicativoIndefinido, new Map([
                [Yo, base + "o" + rest + "qué"],
            ])],
            [SubjuntivoPresente, new Map([
                [Yo, base + "ue" + rest + "que"],
                [Tu, base + "ue" + rest + "ques"],
                [Usted, base + "ue" + rest + "que"],
                [Nosotros, base + "o" + rest + "quemos"],
                [Vosotros, base + "o" + rest + "quéis"],
                [Ustedes, base + "ue" + rest + "quen"],
            ])],
            [ImperativoAfirmativo, new Map([
                [Tu, base + "ue" + rest + "ca"],
                [Usted, base + "ue" + rest + "que"],
                [Nosotros, base + "o" + rest + "quemos"],
                [Ustedes, base + "ue" + rest + "quen"],
            ])],
            [ImperativoNegativo, new Map([
                [Tu, base + "ue" + rest + "ques"],
                [Usted, base + "ue" + rest + "que"],
                [Nosotros, base + "o" + rest + "quemos"],
                [Vosotros, base + "o" + rest + "quéis"],
                [Ustedes, base + "ue" + rest + "quen"],
            ])]
        ])
    }
}
