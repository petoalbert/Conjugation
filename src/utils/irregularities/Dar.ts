import { Pronoun } from "../Pronoun"
import { Tense } from "../Tense"
import { Irregularities } from "./Irregularity"

const { Yo, Tu, Usted, Nosotros, Vosotros, Ustedes } = Pronoun
const {
    IndicativoPresente,
    IndicativoIndefinido,
    SubjuntivoPresente,
    ImperativoAfirmativo,
    SubjuntivoImperfecto
 } = Tense

export const dar: Irregularities = {
    forms: function () {
        return new Map([
            [IndicativoPresente, new Map([
                [Yo, ["doy"]],
                [Vosotros, ["dais"]],
            ])],
            [IndicativoIndefinido, new Map([
                [Yo, ["di"]],
                [Tu, ["diste"]],
                [Usted, ["dio"]],
                [Nosotros, ["dimos"]],
                [Vosotros, ["disteis"]],
                [Ustedes, ["dieron"]],
            ])],
            [SubjuntivoPresente, new Map([
                [Yo, ["dé"]],
                [Usted, ["dé"]],
                [Vosotros, ["deis"]],
            ])],
            [ImperativoAfirmativo, new Map([
                [Usted, ["dé"]]
            ])],
            [SubjuntivoImperfecto, new Map([
                [Yo, ["diera", "diese"]],
                [Tu, ["dieras", "dieses"]],
                [Usted, ["diera", "diese"]],
                [Nosotros, ["diéramos", "diésemos"]],
                [Vosotros, ["dierais", "dieseis"]],
                [Ustedes, ["dieran", "diesen"]]
            ])]
        ])
    }
}
