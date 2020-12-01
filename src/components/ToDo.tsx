import React from "react";
import {IToDo} from "../interfaces";

export const ToDo: React.FunctionComponent<IToDo> = ({title, id, isDone}) => {
    const classes: Array<string> = ['todo']
    if (isDone) {
        classes.push('comleted')
    }

    return (
        <li className={classes.join(' ')} key={id}>
            <label>
                <input type="checkbox" checked={isDone}/>
                <span>{title}</span>
                <i className='material-icons red-text'>delete</i>
            </label>
        </li>
    )
}