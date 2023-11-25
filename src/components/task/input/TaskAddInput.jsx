import React from 'react'
import { v4 as uuid } from 'uuid'

const TaskAddInput = ({inputText, 
    setInputText,
    taskList,
    setTaskList}) => { 
    const taskId = uuid();
    const handleSubmit = (e) => {
        e.preventDefault()
        // console.log(e)
        //カードを追加する
        if(inputText === "") {
            return
        }
        setTaskList([...taskList,
            {
                id : taskId,
                draggableId:`task-${taskId}`,
                text: inputText
        }])
        setInputText("")
        
        // console.log(...taskList)
        // console.log(inputText)
    }

    const handleChange = (e) => {
        setInputText(e.target.value)
        console.log(inputText)

    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input 
                className='taskAddInput' 
                type="text" 
                placeholder='add a task'
                onChange={handleChange}
                value={inputText}
            >

            </input>

        </form>
    </div>
  )
}

export default TaskAddInput