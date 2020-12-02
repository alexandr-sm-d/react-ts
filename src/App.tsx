import React, {useEffect, useState} from 'react';
import {Navbar} from "./components/Navbar";
import {ToDoForm} from "./components/ToDoForm";
import {ToDoList} from "./components/ToDoList";
import {IToDo} from "./interfaces";

const App: React.FunctionComponent = () => {
    const [todos, setTodos] = useState<Array<IToDo>>([])

    useEffect(() => console.log('render APP.TSX'))

    const addTodoHandler = (title: string): void => {
        let newToDo: IToDo = {
            title,
            id: Date.now(),
            complited: false
        }
        setTodos(prevState => [newToDo, ...prevState])
    }

    // test
    // const toggleToDoHandler = (id: number): void => {
    //     setTodos(prevState => prevState.map(todo => {
    //         if (todo.id === id) {
    //             todo.complited = !todo.complited
    //         }
    //         return todo
    //     }))
    // }
    // test2
    // const toggleToDoHandler = (id: number): void => {
    //     setTodos(prevState => prevState)
    // }


    const toggleToDoHandler = (id: number): void => {
        setTodos(prevState => prevState.map(todo => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        complited: !todo.complited
                    }
                }
                return todo
            }
        ))
    }

    const removeToDoHandler = (id: number): void => {
        setTodos(prevState => prevState.filter(todo => todo.id !== id))
    }

    return (
        <>
            <Navbar/>
            <div className='container'>
                <ToDoForm onAdd={addTodoHandler}/>
                <ToDoList todos={todos} onToggle={toggleToDoHandler} onRemove={removeToDoHandler}/>
            </div>
        </>
    )
}

export default App;
