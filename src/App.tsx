import './App.css'
import HelloWorld from "./components/HelloWorld.tsx";
import Counter from "./components/Counter.tsx";
import List from "./components/List.tsx";
import NameForm from "./components/NameForm.tsx";
import ToDoList from "./components/ToDoList.tsx";
import {useCallback, useState} from "react";

function App() {
    const [count, setCount] = useState(0)


    const handleIncrement = useCallback(()=>{
        setCount(count + 1);
    },[count]);

    const handleDecrement = useCallback(()=>{
        setCount(count - 1);
    },[count])
  return (
      <div>
          <HelloWorld/>
          <Counter count={count} />
          <Counter count={count} />
          <button onClick={handleIncrement}>+1</button>
          <button onClick={handleDecrement}>-1</button>
          <List/>
          <NameForm/>
          <ToDoList/>
      </div>
  )
}

export default App
