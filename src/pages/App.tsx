import React from "react";
import { useState } from "react";
import { ConjugationParameters, getOnlyIrregularParameters, getParameters } from "../utils/ConjugationParameters";
import Task from "../components/Task";
import { v4 as uuidv4 } from 'uuid';
import { TaskResult } from "../components/TaskResult";
import { pronounToString } from "../utils/Pronoun";
import { tenseToString } from "../utils/Tense";
import Input from "../components/Input";

type TaskData = {
  id: string;
  params: ConjugationParameters;
  userInput: string | null;
}

export default function ConjugationGame() {
  const [onlyIrregular, setOnlyIrregular] = useState<boolean>(false)
  const [onlyTop500, setOnlyTop500] = useState<boolean>(true)
  const [inputText, setInputText] = useState('');
  const [tasks, setTasks] = useState<TaskData[]>([{ id: uuidv4(), params: getParameters(onlyTop500), userInput: null }])

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(event.target.value);
  };

  const handleOnlyIrregularChange = () => {
    setOnlyIrregular(prevState => !prevState);
  };

  const handleOnlyTop500Change = () => {
    setOnlyTop500(prevState => !prevState);
  };

  const handleCheck = () => {
    let input = JSON.parse(JSON.stringify(inputText));
    setInputText("")
    setTasks(prevTasks => {
      const last = prevTasks[prevTasks.length - 1]
      const newTask = {
        id: uuidv4(),
        params: onlyIrregular ? getOnlyIrregularParameters(onlyTop500) : getParameters(onlyTop500),
        userInput: null
      }

      return [
        ...prevTasks.slice(0, -1),
        { id: last.id, params: last.params, userInput: input },
        newTask
      ]
    });
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleCheck();
    }
  };

  return (
    <div id="main">
      <div className="w-full flex h-screen items-center justify-center">
        <div className="mb-20 p-4 h-auto" id="second">
          <Task />
        </div>
      </div>
    </div>
  );
}