import React from "react";
import { getOnlyIrregularParameters } from "../utils/ConjugationParameters";
import { pronounToString } from "../utils/Pronoun";
import { tenseToString } from "../utils/Tense";
import Input from "./Input";

export default function Task() {
  const [params, setParams] = React.useState(getOnlyIrregularParameters(true));
  const [isTooltipVisible, setIsTooltipVisible] = React.useState(false);

  const handleMouseEnter = () => {
    setIsTooltipVisible(true);
  };

  const handleMouseLeave = () => {
    setIsTooltipVisible(false);
  };

  return (
    <div className="text-center">
      <div className="relative bg-white z-[100]">
        <div className="relative z-[100] font-bold text-xl mb-2">
          <span className="border-b border-dotted border-black" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            {params.verb}
          </span>
        </div>
        {isTooltipVisible && (
          <div
            data-tooltip="tooltip"
            className="absolute w-[80%] left-[10%] bottom-[70px] z-[150] whitespace-normal break-words rounded-lg bg-black py-1.5 px-3 font-sans text-sm font-normal text-white focus:outline-none"
          >
            Sample tooltip
          </div>
        )}
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
