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

export const satisfacer: Irregularities = {
    forms: function (string) {
        let base = string.slice(0, -4) // acer

        return new Map([
            [IndicativoPresente, new Map([
                [Yo, [base + "ago"]]
            ])],
            [IndicativoIndefinido, new Map([
                [Yo, [base + "ice"]],
                [Tu, [base + "iciste"]],
                [Usted, [base + "izo"]],
                [Nosotros, [base + "icimos"]],
                [Vosotros, [base + "icisteis"]],
                [Ustedes, [base + "icieron"]],
            ])],
            [IndicativoFuturoImperfecto, new Map([
                [Yo, [base + "aré"]],
                [Tu, [base + "arás"]],
                [Usted, [base + "ará"]],
                [Nosotros, [base + "aremos"]],
                [Vosotros, [base + "aréis"]],
                [Ustedes, [base + "arán"]],
            ])],
            [IndicativoCondicional, new Map([
                [Yo, [base + "aría"]],
                [Tu, [base + "arías"]],
                [Usted, [base + "aría"]],
                [Nosotros, [base + "aríamos"]],
                [Vosotros, [base + "aríais"]],
                [Ustedes, [base + "arían"]],
            ])],
            [SubjuntivoPresente, new Map([
                [Yo, [base + "aga"]],
                [Tu, [base + "agas"]],
                [Usted, [base + "aga"]],
                [Nosotros, [base + "agamos"]],
                [Vosotros, [base + "agáis"]],
                [Ustedes, [base + "agan"]],
            ])],
            [ImperativoAfirmativo, new Map([
                [Tu, [base + "az"]],
                [Usted, [base + "aga"]],
                [Nosotros, [base + "agamos"]],
                [Ustedes, [base + "agan"]],
            ])],
            [ImperativoNegativo, new Map([
                [Tu, [base + "agas"]],
                [Usted, [base + "aga"]],
                [Nosotros, [base + "agamos"]],
                [Vosotros, [base + "agáis"]],
                [Ustedes, [base + "agan"]],
            ])],
            [SubjuntivoImperfecto, new Map([
                [Yo, [base + "iciera", base + "iciese"]],
                [Tu, [base + "icieras", base + "icieses"]],
                [Usted, [base + "iciera", base + "iciese"]],
                [Nosotros, [base + "iciéramos", base + "iciésemos"]],
                [Vosotros, [base + "icierais", base + "icieseis"]],
                [Ustedes, [base + "icieran", base + "iciesen"]],
            ])]
        ])
    }
}
