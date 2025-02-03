import React, { useCallback, useEffect, useMemo, useState } from "react";
import { getParameters } from "../utils/ConjugationParameters";
import { pronounToString } from "../utils/Pronoun";
import { tenseToString } from "../utils/Tense";
import translations from "../utils/translations.json";
import Input from "./Input";
import { AnimatePresence, motion } from "motion/react";

export default function Task() {
  const [params, setParams] = useState(getParameters());
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

  const newParams = useCallback(() => {
    setParams(getParameters());
  }, []);

  return (
    <AnimatePresence>
      <div className="relative text-center">
        <motion.div
          className="relative"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 30, opacity: 0 }}
          key={`task-${params.verb}-${params.tense}-${params.pronoun}`}
        >
          <div className="font-bold text-xl mb-2">
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
              className="absolute left-1/2 -translate-x-1/2 bottom-[70px] whitespace-normal break-words rounded-lg bg-gray-500 py-1.5 px-3 font-sans text-sm font-normal text-white focus:outline-none"
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
          <div className="text-gray-700 mb-2">
            <h6 className="text-lg font-semibold">
              {pronounToString(params.pronoun)} - {tenseToString(params.tense)}
            </h6>
          </div>
        </motion.div>
        <Input params={params} onFinish={newParams} />
      </div>
    </AnimatePresence>
  );
}
