import { Pronoun } from "../Pronoun"
import { Tense } from "../Tense"
import { Irregularities } from "./Irregularity"

const { Yo, Tu, Usted, Nosotros, Vosotros, Ustedes } = Pronoun
const {
    IndicativoPresente,
    SubjuntivoPresente,
    ImperativoAfirmativo,
    ImperativoNegativo,
    IndicativoIndefinido,
    IndicativoFuturoImperfecto,
    IndicativoCondicional,
    SubjuntivoImperfecto
} = Tense

export const hacer: Irregularities = {
    forms: function (string) {
        return new Map([
            [IndicativoPresente, new Map([
                [Yo, ["hago"]],
            ])],
            [IndicativoIndefinido, new Map([
                [Yo, ["hice"]],
                [Tu, ["hiciste"]],
                [Usted, ["hizo"]],
                [Nosotros, ["hicimos"]],
                [Vosotros, ["hicisteis"]],
                [Ustedes, ["hicieron"]],
            ])],
            [IndicativoFuturoImperfecto, new Map([
                [Yo, ["haré"]],
                [Tu, ["harás"]],
                [Usted, ["hará"]],
                [Nosotros, ["harémos"]],
                [Vosotros, ["haréis"]],
                [Ustedes, ["harán"]],
            ])],
            [IndicativoCondicional, new Map([
                [Yo, ["haría"]],
                [Tu, ["harías"]],
                [Usted, ["haría"]],
                [Nosotros, ["haríamos"]],
                [Vosotros, ["haríais"]],
                [Ustedes, ["harían"]],
            ])],
            [SubjuntivoPresente, new Map([
                [Yo, ["haga"]],
                [Tu, ["hagas"]],
                [Usted, ["haga"]],
                [Nosotros, ["hagamos"]],
                [Vosotros, ["hagáis"]],
                [Ustedes, ["hagan"]],
            ])],
            [ImperativoAfirmativo, new Map([
                [Tu, ["haz"]],
                [Usted, ["haga"]],
                [Nosotros, ["hagamos"]],
                [Ustedes, ["hagan"]],
            ])],
            [ImperativoNegativo, new Map([
                [Tu, ["hagas"]],
                [Usted, ["haga"]],
                [Nosotros, ["hagamos"]],
                [Vosotros, ["hagáis"]],
                [Ustedes, ["hagan"]],
            ])],
            [SubjuntivoImperfecto, new Map([
                [Yo, ["hiciera", "hiciese"]],
                [Tu, ["hicieras", "hicieses"]],
                [Usted, ["hiciera", "hiciese"]],
                [Nosotros, ["hiciéramos", "hiciésemos"]],
                [Vosotros, ["hicierais", "hicieseis"]],
                [Ustedes, ["hicieran", "hiciesen"]]
            ])]
        ])
    }
}
