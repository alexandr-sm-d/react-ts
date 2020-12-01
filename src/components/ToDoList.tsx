import React from "react";
import {ToDo} from "./ToDo";
import {IToDo} from "../interfaces";

interface ToDoListProps {
    todos: Array<IToDo>
}

export const ToDoList: React.FunctionComponent<ToDoListProps> = ({todos}) => {
    return <ul> {todos.map(todo => <ToDo title={todo.title} id={todo.id} isDone={todo.isDone}/>)} </ul>
}