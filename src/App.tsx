import React from "react";
import { useState } from "react";
import { ConjugationParameters, getParameters } from "./ConjugationParameters";
import Task from "./Task";
import { v4 as uuidv4 } from 'uuid';
import { TaskResult } from "./TaskResult";

type TaskData = {
  id: string;
  params: ConjugationParameters;
  userInput?: string;
}

export default function ConjugationGame() {
  const [onlyIrregular, setOnlyIrregular] = useState<boolean>(false);
  const [inputText, setInputText] = useState('');
  const [tasks, setTasks] = useState<TaskData[]>([{ id: uuidv4(), params: getParameters() }])

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(event.target.value);
  };

  const handleCheck = () => {
    let input = inputText
    setInputText("")
    setTasks(prevTasks => {
      const last = prevTasks[prevTasks.length - 1]
      const newTask = {
        id: uuidv4(),
        params: getParameters()
      }

      return [
        ...prevTasks.slice(0, -1),
        { id: last.id, params: last.params, userInput: input },
        newTask
      ]
    });
  };

  const handleCheckboxChange = () => {
    setOnlyIrregular(prevState => !prevState);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleCheck();
    }
  };

  return (
    <section>
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
      <ul>
        {tasks.map(t =>
          <li id={t.id}>
            <Task params={t.params} />
            {t.userInput && <TaskResult params={t.params} input={t.userInput} />}
          </li>
        )}
      </ul>
      <input
        type="text"
        value={inputText}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        placeholder="Enter text..."
      />
    </section>
  );
}