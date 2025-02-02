import React from "react";
import { tenseToString } from "../utils/Tense";
import { pronounToString } from "../utils/Pronoun";
import { ConjugationParameters, getOnlyIrregularParameters } from "../utils/ConjugationParameters";
import Input from "./Input";
import { conjugate } from "../utils/Conjugation";
import { TaskResult } from "./TaskResult";

export default function Task() {
  const [params, setParams] = React.useState(getOnlyIrregularParameters(true));

  return (
    <div className="text-center">
      <div className="relative bg-white z-[100]">
        <div className="relative z-[100] font-bold text-xl mb-2">{params.verb}</div>
        <div className="relative z-[100] text-gray-700 mb-2">
          <h6 className="z-[100] text-lg font-semibold">
            {pronounToString(params.pronoun)} - {tenseToString(params.tense)}
          </h6>
        </div>
      </div>
      <Input key={params.verb} params={params} onFinish={() => setParams(getOnlyIrregularParameters(true))} />
    </div>
  );
}
