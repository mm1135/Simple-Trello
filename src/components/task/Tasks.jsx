import React from 'react'
import { Task } from './Task'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'

const reorder = (taskList, srtatIndex, endIndex) => {
  //タスクを並び替える
  const remove = taskList.splice(srtatIndex, 1)
  taskList.splice(endIndex, 0, remove[0]);
}

const Tasks = ({taskList, setTaskList}) => {
  const handleDrangEnd = (result) => {
    // console.log(result)
    if(result.destination){
      reorder(taskList, result.source.index, result.destination.index)
      setTaskList(taskList)
    }

  }
  return (
    <div>
      <DragDropContext onDragEnd={handleDrangEnd}>
        <Droppable droppableId='droppable'>
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {taskList.map((task, index) => (
                  <div key={task.id}>
                    <Task 
                      index={index}
                      task={task} 
                      taskList={taskList} 
                      setTaskList={setTaskList}>
                    </Task>
                  </div>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  )
}

export default Tasks