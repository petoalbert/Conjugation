import React from "react";
import { useState } from "react";
import { ConjugationParameters, getOnlyIrregularParameters, getParameters } from "./ConjugationParameters";
import Task from "./Task";
import { v4 as uuidv4 } from 'uuid';
import { TaskResult } from "./TaskResult";
import { pronounToString } from "./Pronoun";
import { tenseToString } from "./Tense";

type TaskData = {
  id: string;
  params: ConjugationParameters;
  userInput: string | null;
}

export default function ConjugationGame() {
  const [onlyIrregular, setOnlyIrregular] = useState<boolean>(false)
  const [inputText, setInputText] = useState('');
  const [tasks, setTasks] = useState<TaskData[]>([{ id: uuidv4(), params: getParameters(), userInput: null }])

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(event.target.value);
  };

  const handleCheckboxChange = () => {
    setOnlyIrregular(prevState => !prevState);
  };

  const handleCheck = () => {
    let input = JSON.parse(JSON.stringify(inputText));
    setInputText("")
    setTasks(prevTasks => {
      const last = prevTasks[prevTasks.length - 1]
      const newTask = {
        id: uuidv4(),
        params: onlyIrregular ? getOnlyIrregularParameters() : getParameters(),
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
    <div className="container" id="main">
      <div className="row text-center fixed-bottom">
        <div className="col-sm"></div>
        <div className="mb-xl-5 col-lg-2" id="second">
          {tasks.map(t =>
            <div key={t.id} className="card rounded border border-primary mb-2 animated-element shadow">
              <Task params={t.params} />
              {t.userInput != null && <TaskResult params={t.params} input={t.userInput} />}
            </div>
          )}
          <div className="input-group">
            <span className="input-group-text" id="basic-addon1">{pronounToString(tasks[tasks.length - 1].params.pronoun)}</span>
            <input
              type="text"
              id="userinput"
              className="form-control"
              value={inputText}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
              placeholder={tenseToString(tasks[tasks.length - 1].params.tense)}
              aria-label={tenseToString(tasks[tasks.length - 1].params.tense)}
              aria-describedby="basic-addon1"
            />
          </div>
          <div>
            <label>
              <input
                type="checkbox"
                checked={onlyIrregular}
                onChange={handleCheckboxChange}
              />
              Only irregular forms
            </label>
          </div>
        </div>
        <div className="col-sm"></div>
      </div>
    </div>
  );
}