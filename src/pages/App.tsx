import React from "react";
import { useState } from "react";
import { ConjugationParameters, getOnlyIrregularParameters, getParameters } from "../utils/ConjugationParameters";
import Task from "../components/Task";
import { v4 as uuidv4 } from 'uuid';
import { TaskResult } from "../components/TaskResult";
import { pronounToString } from "../utils/Pronoun";
import { tenseToString } from "../utils/Tense";

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
      <div className="fixed bottom-0 w-full">
        <div className="mb-20 p-4" id="second">
          {tasks.map(t => (
            <div key={t.id} className="rounded border border-blue-500 mb-2 shadow-lg">
              <Task params={t.params} />
              {t.userInput != null && <TaskResult params={t.params} input={t.userInput} />}
            </div>
          ))}
          <div className="flex items-center border border-gray-300 rounded-md shadow-sm">
            <span className="px-3 py-2 bg-gray-100 text-gray-700 border-r border-gray-300 rounded-l-md">
              {pronounToString(tasks[tasks.length - 1].params.pronoun)}
            </span>
            <input
              type="text"
              className="flex-1 px-3 py-2 border-none focus:ring-2 focus:ring-blue-500 rounded-r-md"
              value={inputText}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
              placeholder={tenseToString(tasks[tasks.length - 1].params.tense)}
              aria-label={tenseToString(tasks[tasks.length - 1].params.tense)}
              aria-describedby="basic-addon1"
            />
          </div>
        </div>
      </div>
    </div>
  );
}