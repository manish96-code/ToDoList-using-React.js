import React from 'react'

const List = ({list, handleDelete, handleCompleted}) => {
  return (
    <div className="px-6 py-3">

        {list.length > 0 ? (
            <ul className="list-disc space-y-2">
                
                {
                    list.map((items) => (
                        <li className="text-2xl flex justify-between">
                            <span className={items.isCompleted ? "line-through text-gray-500" : ""}>{items.task}</span>
                            <div className='flex gap-2'>
                                <button onClick={() => handleDelete(items)} className="text-sm bg-red-500 text-white rounded px-3 py-1 hover:bg-red-600 cursor-pointer transition">X</button>
                                <button onClick={() => handleCompleted(items)} className="text-sm bg-green-500 text-white rounded px-3 py-1 hover:bg-green-600 cursor-pointer transition">✔</button>
                            </div>
                        </li>
                    ))
                }
            </ul>
        ) : (
            <h2 className="text-center text-4xl text-gray-400 font-bold italic mt-6">No task to do</h2>
        )}

    </div>
  )
}

export default List