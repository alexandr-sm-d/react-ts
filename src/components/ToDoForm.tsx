import React, {useRef} from "react"

export const ToDoForm: React.FunctionComponent = () => {
    const ref = useRef<HTMLInputElement>(null)

    const keyPressHandler = (event: React.KeyboardEvent): void => {
        if (event.key === 'Enter') {
            console.log(ref.current!.value)
        }
    }

    return (
        <div className='input-filed mt2'>
            <label htmlFor="todo">Enter todo</label>
            <input
                ref={ref}
                onKeyPress={keyPressHandler}
                type="text"
                placeholder='enter todo'
                id='todo'
            />
        </div>
    )
}