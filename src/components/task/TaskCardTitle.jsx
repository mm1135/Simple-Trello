import React, { useState } from 'react'

const TaskCardTitle = () => {

    const [isClick, setIsClick] = useState(false);
    const [inputCardTitle, setInputCardTitle] = useState("Today");
    const handleClick = () => {
        setIsClick(true);
        // console.log(isClick)
    }

    const handleBlur = () => {
        setIsClick(false)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsClick(false)
    }

    const handleChange = (e) => {
        console.log(inputCardTitle);
        setInputCardTitle(e.target.value)
    }
    return (
    <div onClick={handleClick} className='taskCardTitleIputArea'>
        {isClick ? (
            <form onSubmit={handleSubmit}>
                <input className="taskCardTitleInput" maxLength="10" autoFocus type="text" onChange={handleChange} onBlur={handleBlur} value={inputCardTitle}></input>
            </form>) : 
            <h3>
                {inputCardTitle}
            </h3>}
    </div>
  )
}

export default TaskCardTitle