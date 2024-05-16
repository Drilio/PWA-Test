import {ChangeEvent, FormEvent, useCallback, useEffect, useState} from "react";

export default function ToDoList(){
    const [tasks, setTasks] = useState<string[]>([]);
    const [nextTask, setNextTask] = useState<string>("");

    useEffect(()=>{


    },[])

    const handleNewTask = useCallback((event:FormEvent)=>{
        event.preventDefault();
        setTasks([...tasks, nextTask]);
        setNextTask('')
        localStorage.setItem('myTasks', JSON.stringify(tasks));
    },[tasks, nextTask]);


    const handleChangeNextTask = useCallback((event:ChangeEvent<HTMLInputElement>)=>{
        const newTask = event.target.value;
        setNextTask(newTask);
    },[nextTask]);

    const handleDeleteTask = useCallback((id : number)=>{
        localStorage.setItem('myTasks',JSON.stringify( tasks.filter((_, i) => i !== id)));
        setTasks(prevTasks => prevTasks.filter((_, i) => i !== id));
    },[tasks])

    return(
        <div>
            <form>
                <label>Tasks</label>
                <input name="task" onChange={handleChangeNextTask} value={nextTask} type="text"></input>
                <button type='submit' onClick={handleNewTask}>Submit</button>
            </form>

            <ul>
            {tasks.map((task, index) => (
                <div key={index} className="task">
                    <li>{task}</li>
                    <button id={`${index}`} onClick={() => handleDeleteTask(index)} >delete</button>
                </div>
            ))}
            </ul>
        </div>
    )
}
