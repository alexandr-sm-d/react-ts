import React, {useState} from 'react';
import {Navbar} from "./components/Navbar";
import {ToDoForm} from "./components/ToDoForm";
import {ToDoList} from "./components/ToDoList";
import {IToDo} from "./interfaces";

const App: React.FunctionComponent = () => {
    const [todos, setTodos] = useState<Array<IToDo>>([])

    const addTodoHandler = (title: string): void => {
        let newToDo: IToDo = {
            title,
            id: Date.now(),
            isDone: false
        }
        setTodos(prevState => [newToDo, ...prevState])
        console.log('Add new todo', title)
    }

    return (
        <>
            <Navbar/>
            <div className='container'>
                <ToDoForm onAdd={addTodoHandler}/>
                <ToDoList todos={todos}/>
            </div>
        </>
    )
}

export default App;
