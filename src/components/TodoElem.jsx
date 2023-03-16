import React,{useState} from "react";

const TodoElem=() => {
    const [input,setInput]=useState("");
    const submitFunc= () =>{

    }
    const updateInput=(event) =>{
        setInput(event.target.value);
    }
    return (
        <>
            <form onSubmit={submitFunc}>
            <input class="form-control form-control-lg my-input" type="text" placeholder="Enter here..."/>

            </form>
        </>
    )
}

export default TodoElem;

// import React, { useState } from 'react';

// const TodoElem = () => {
//     const [input, setInput] = useState('');

//     const submitFunc = () => {
//         // handle submit functionality
//     }

//     const updateInput = (event) => {
//         setInput(event.target.value);
//     }

//     return (
//         <>
//             <form onSubmit={submitFunc}>
//                 <input
//                     placeholder="Enter your todo task"
//                     value={input}
//                     onChange={updateInput}
//                 />
//             </form>
//         </>
//     )
// }

// export default TodoElem;
