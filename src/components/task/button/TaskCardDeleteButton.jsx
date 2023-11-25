import React from 'react'

function TaskCardDeleteButton({taskCardsList, setTaskCardsList, taskCard}) {
  const taskCardDeleteButton = (id) => {
    // タスクカードを削除する
    setTaskCardsList(taskCardsList.filter((e) => e.id !== id))
  }
  return (
    <div className='taskCardDeleteBUtton' onClick={() => taskCardDeleteButton(taskCard.id)}>
      <i className="fa-solid fa-xmark"></i>
    </div>
  )
}

export default TaskCardDeleteButton