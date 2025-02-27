import React, { useState } from "react";
import { ConjugationParameters } from "../utils/ConjugationParameters";
import { conjugate } from "../utils/Conjugation";
import { motion } from "motion/react";

interface InputProps {
  onFinish: () => void;
  params: ConjugationParameters;
}

const Input: React.FC<InputProps> = ({ onFinish, params }) => {
  const textInput = React.useRef<HTMLInputElement>(null);
  const button = React.useRef<HTMLButtonElement>(null);
  const [text, setText] = useState<string | null>(null);
  const correctForm = React.useMemo(() => conjugate(params.verb, params.tense, params.pronoun), [params]);
  const trimmedText = React.useMemo(() => text?.trim().toLowerCase(), [text]);

  const handleSendClick = React.useCallback(
    (event: React.FormEvent) => {
      event?.preventDefault();

      const value = textInput.current?.value || null;

      if (text !== null) {
        onFinish();
        setText(null);
        textInput.current!.value = "";
      } else {
        setText(value);
        button.current?.focus();
        textInput.current?.blur();
      }
    },
    [text]
  );

  React.useEffect(() => {
    if (text === null) {
      textInput.current?.focus();
      // put the cursor into textInput
      textInput.current?.setSelectionRange(0, 0);
    } else {
      textInput.current?.blur();
    }
  }, [text]);

  return (
    <form onSubmit={handleSendClick} className="z-1">
      <div className="relative h-[55px] w-[400px] z-1">
        <motion.input
          id="search"
          animate={{ y: text ? "65px" : "0" }}
          className={`block absolute left-[10px] z-1 w-[90%] p-3 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white`}
          placeholder="Abc"
          ref={textInput}
          disabled={text !== null}
          required
        />
        <motion.button
          type="submit"
          ref={button}
          animate={{ width: text ? "80px" : "100px" }}
          className={`text-white absolute z-2 right-10 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800`}
        >
          {text ? "Next" : "Submit"}
        </motion.button>
        <div className="absolute z-0 bottom-[16px] left-[20px]">
          {correctForm.includes(trimmedText ?? '') ? "Correct answer!" : correctForm[0]}
        </div>
      </div>
    </form>
  );
};

export default Input;
