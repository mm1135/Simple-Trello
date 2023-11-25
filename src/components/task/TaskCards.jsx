import React, { useState } from 'react'
import TaskCard from './TaskCard'
import AddTaskCardButton from './button/AddTaskCardButton'
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

const reorder = (taskCardsList, srtatIndex, endIndex) => {
  //タスクを並び替える
  const remove = taskCardsList.splice(srtatIndex, 1)
  taskCardsList.splice(endIndex, 0, remove[0]);
}

const TaskCards = () => {
  const [taskCardsList, setTaskCardsList] = useState([{
    id:"0",
    draggableId: "item0"
  }]);
  const handleDragEnd = (result) => {
    // console.log(result)
    if(result.destination){
      reorder(taskCardsList, result.source.index, result.destination.index)
      setTaskCardsList(taskCardsList)
    }
  }

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId='droppable' direction='horizontal'>
        {(provided) => (
          <div className='taskCardsArea' {...provided.droppableProps} ref={provided.innerRef}>
            {taskCardsList.map((taskCard, index) => (
              <TaskCard key={taskCard.id} taskCardsList={taskCardsList} setTaskCardsList={setTaskCardsList} taskCard={taskCard} index={index}></TaskCard>
            ))}
            {provided.placeholder}
            <AddTaskCardButton taskCardsList={taskCardsList} setTaskCardsList={setTaskCardsList}></AddTaskCardButton>
          </div>
        )}
        
      </Droppable>
    </DragDropContext>
    
  )
}

export default TaskCards