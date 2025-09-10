import ToDoApp from './components/ToDoApp'

function App() {
  return (
    <div className='flex justify-center items-center h-screen'>
      <div className='border p-6 rounded-lg shadow-lg border-slate-300 bg-slate-100 w-4/12 min-h-[400px]'>
        <h2 className='text-2xl text-center font-bold text-teal-600 mb-5'>Todo Application</h2>
        <ToDoApp/>
      </div>
    </div>
  )
}

export default App