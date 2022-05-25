import './App.css';
import { Title } from "./conponents/Title";
import { InputForm } from "./conponents/InputForm"
import { TodoList } from "./conponents/TodoList"
import React,{useState} from "react";


function App() {
  const [taskList, setTaskList] = useState([]);
  
  return (
    <div className="body">
      <Title />
      <InputForm taskList={taskList} setTaskList={setTaskList} />
      <TodoList taskList={taskList} setTaskList={setTaskList}/>
    </div>
  );
}

export default App;
