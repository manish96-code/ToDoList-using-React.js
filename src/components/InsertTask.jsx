import React, { useState } from 'react'

const InsertTask = ({handleInsert}) => {
    const [newTask, setNewTask] = useState("");

    const handleSubmit = () => {
        if (newTask.trim() == "")
           return;
        handleInsert(newTask);
        setNewTask("")
    }

  return (
    <div className='flex gap-2'>
        <input type="text" className='bg-white border border-slate-300 px-3 py-2 flex-1 rounded-lg shadow' placeholder='✍️ Write your task...' value={newTask} onChange={(e) => setNewTask(e.target.value)}/>
        <button  onClick={handleSubmit} className='bg-teal-500 hover:bg-teal-600 hover:shadow text-white transition-all px-3 py-2 rounded hover:cursor-pointer'>Add</button>
    </div>
  )
}

export default InsertTask