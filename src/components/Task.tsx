import React, { useCallback, useEffect, useMemo, useState } from "react";
import { getParameters } from "../utils/ConjugationParameters";
import { pronounToString } from "../utils/Pronoun";
import { tenseToString } from "../utils/Tense";
import translations from "../utils/translations.json";
import Input from "./Input";

const onlyTop500 = true;

export default function Task() {
  const [params, setParams] = useState(getParameters(onlyTop500));
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const translationMap = useMemo(() => translations as Record<string, string[]>, []);
  const translation = useMemo(() => translationMap[params.verb], [params.verb, translationMap]);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.matchMedia("(max-width: 768px)").matches);
    };

    setIsMobile(window.matchMedia("(max-width: 768px)").matches);
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleMouseEnter = useCallback(() => {
    if (!isMobile) {
      setIsTooltipVisible(true);
    }
  }, [isMobile]);

  const handleMouseLeave = useCallback(() => {
    if (!isMobile) {
      setIsTooltipVisible(false);
    }
  }, [isMobile]);

  const toggleTooltip = useCallback(() => {
    if (isMobile) {
      setIsTooltipVisible(!isTooltipVisible);
    }
  }, [isMobile]);

  return (
    <div className="text-center">
      <div className="relative bg-white z-[100]">
        <div className="relative z-[100] font-bold text-xl mb-2">
          <span
            className="border-b border-dotted border-black"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={toggleTooltip}
          >
            {params.verb}
          </span>
        </div>
        {isTooltipVisible && (
          <div
            data-tooltip="tooltip"
            className="absolute left-1/2 -translate-x-1/2 bottom-[70px] z-[150] whitespace-normal break-words rounded-lg bg-gray-500 py-1.5 px-3 font-sans text-sm font-normal text-white focus:outline-none"
          >
            <div className="text-left">
              <ul>
                {translation.map((t, i) => (
                  <li key={i}>{t}</li>
                ))}
              </ul>
            </div>
          </div>
        )}
        <div className="relative z-[100] text-gray-700 mb-2">
          <h6 className="z-[100] text-lg font-semibold">
            {pronounToString(params.pronoun)} - {tenseToString(params.tense)}
          </h6>
        </div>
      </div>
      <Input key={params.verb} params={params} onFinish={() => setParams(getParameters(onlyTop500))} />
    </div>
  );
}
