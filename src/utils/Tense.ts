export enum Tense {
    IndicativoPresente,
    IndicativoImperfecto,
    IndicativoIndefinido,
    IndicativoFuturoImperfecto,
    IndicativoCondicional,
    SubjuntivoPresente,
    ImperativoAfirmativo,
    ImperativoNegativo,
    SubjuntivoImperfecto
}

export function tenseToString(tense: Tense): string {
    switch (tense) {
        case Tense.IndicativoPresente: return "indicativo presente"
        case Tense.IndicativoImperfecto: return "preterito imperfecto"
        case Tense.IndicativoIndefinido: return "preterito indefinido"
        case Tense.IndicativoFuturoImperfecto: return "futuro imperfecto"
        case Tense.IndicativoCondicional: return "condicional"
        case Tense.SubjuntivoPresente: return "subjuntivo presente"
        case Tense.ImperativoAfirmativo: return "imperativo afirmativo"
        case Tense.ImperativoNegativo: return "imperativo negativo"
        case Tense.SubjuntivoImperfecto: return "subjuntivo imperfecto"
    }
}