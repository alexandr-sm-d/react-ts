import React, {useRef} from "react"

interface ToDoFormProps {
    onAdd(title: string): void
}

export const ToDoForm: React.FunctionComponent<ToDoFormProps> = ({onAdd}) => {
    const ref = useRef<HTMLInputElement>(null)

    const keyPressHandler = (event: React.KeyboardEvent): void => {
        if (event.key === 'Enter') {
            onAdd(ref.current!.value)
            ref.current!.value = ''
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