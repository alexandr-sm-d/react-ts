import React from "react";
import {ToDo} from "./ToDo";
import {IToDo} from "../interfaces";

interface ToDoListProps {
    onToggle(id: number): void,

    onRemove(id: number): void,

    todos: Array<IToDo>
}

export const ToDoList: React.FunctionComponent<ToDoListProps> = ({todos, onRemove, onToggle}) => {
    if (todos.length === 0) {
        return (
            <p className='center'>ToDo is empty</p>
        )
    }

    return <ul> {todos.map(todo => <ToDo
        key={todo.id}
        title={todo.title}
        id={todo.id}
        complited={todo.complited}
        onToggle={onToggle}
        onRemove={onRemove}
    />)} </ul>
}