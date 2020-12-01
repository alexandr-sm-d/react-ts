import React, {useEffect, useState} from "react"

export const ToDoForm: React.FunctionComponent = () => {
    const [title, setTitle] = useState<string>('hi')

    const inputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setTitle(event.target.value)
    }

    const keyPressHandler = (event: React.KeyboardEvent) : void => {
        if (event.key === 'Enter') {
            console.log(title)
        }
    }

    useEffect(() => {
        console.log(title)
    })

    return (
        <div className='input-filed mt2'>
            <label htmlFor="todo">Enter todo</label>
            <input
                onChange={inputChangeHandler}
                onKeyPress={keyPressHandler}
                value={title}
                type="text"
                placeholder='enter todo'
                id='todo'
            />
        </div>
    )
}