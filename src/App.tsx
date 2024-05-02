import React from "react";
import { useState } from "react";
import { ConjugationParameters, getParameters } from "./ConjugationParameters";
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
  const [inputText, setInputText] = useState('');
  const [tasks, setTasks] = useState<TaskData[]>([{ id: uuidv4(), params: getParameters(), userInput: null }])

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(event.target.value);
  };

  const handleCheck = () => {
    let input = JSON.parse(JSON.stringify(inputText));
    setInputText("")
    setTasks(prevTasks => {
      const last = prevTasks[prevTasks.length - 1]
      const newTask = {
        id: uuidv4(),
        params: getParameters(),
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
    <div className="container text-center fixed-bottom mb-xl-5 col-sm-4 offset-sm-3" id="main">
      <div id="second">
        {tasks.map(t =>
          <div key={t.id} className="card border border-primary mb-2 animated-element">
            <Task params={t.params} />
            {t.userInput != null && <TaskResult params={t.params} input={t.userInput} />}
          </div>
        )}
        <div className="input-group">
          <span className="input-group-text" id="basic-addon1">{pronounToString(tasks[tasks.length-1].params.pronoun)}</span>
          <input
            type="text"
            className="form-control"
            value={inputText}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            placeholder={tenseToString(tasks[tasks.length-1].params.tense)}
            aria-label={tenseToString(tasks[tasks.length-1].params.tense)}
            aria-describedby="basic-addon1"
          />
        </div>
      </div>
    </div>
  );
}