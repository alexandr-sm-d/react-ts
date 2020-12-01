import React from 'react';
import {Navbar} from "./components/Navbar";
import {ToDoForm} from "./components/ToDoForm";

const App: React.FunctionComponent = () => {
    return (
        <>
            <Navbar/>
            <div className='container'>
                <ToDoForm/>
            </div>
        </>
    )
}

export default App;
