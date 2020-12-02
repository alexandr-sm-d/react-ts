import React, {MouseEventHandler} from "react";
import {IToDo} from "../interfaces";

interface ToDoAction extends IToDo {
    onToggle(id: number): void,

    onRemove(id: number): void,
}

export const ToDo: React.FunctionComponent<ToDoAction> = ({title, id, complited, ...props}) => {
    const classes: Array<string> = ['todo']
    if (complited) {
        classes.push('comleted')
    }

    const onRemove = (event: React.MouseEvent, id: number) => {
        event.preventDefault()
        props.onRemove(id)
    }

    return (
        <li className={classes.join(' ')}>
            <label>
                <input type="checkbox" checked={complited} onChange={() => props.onToggle(id)}/>
                <span>{title}</span>
                <i className='material-icons red-text' onClick={event => onRemove(event, id)}>delete</i>
            </label>
        </li>
    )
}