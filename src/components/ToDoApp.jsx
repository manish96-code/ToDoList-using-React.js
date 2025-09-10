import React, { useState } from 'react'
import InsertTask from './InsertTask'
import List from './List'

const ToDoApp = () => {

    const [list, setList] = useState([]);

    const handleInsert = (value) => {
        let newTask = {
            id: list.length+1,
            task : value,
            isCompleted: false
        }
        setList([...list, newTask])
    }

    const handleDelete = (task) => {
        setList(list.filter((item) => item.id != task.id))
    }

    const handleCompleted = (task) => {
        setList(list.map((item) => item.id == task.id ?  {...item, isCompleted:!item.isCompleted} : item));
    }

  return (
    <div>
        <InsertTask handleInsert={handleInsert}/>
        <List list={list} handleDelete={handleDelete} handleCompleted={handleCompleted}/>
    </div>
  )
}

export default ToDoApp