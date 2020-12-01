import React, {useState} from 'react';
import {Navbar} from "./components/Navbar";
import {ToDoForm} from "./components/ToDoForm";

const App: React.FunctionComponent = () => {
    const [todos, setTodos] = useState<Array<string>>([])

    const addTodoHandler = (title: string) : void => {
        console.log('Add new todo', title)
    }

    return (
        <>
            <Navbar/>
            <div className='container'>
                <ToDoForm onAdd={addTodoHandler}/>
            </div>
        </>
    )
}

export default App;
