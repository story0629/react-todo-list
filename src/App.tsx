import { useState } from 'react'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='w-100 text-center px-2 py-4 text-amber-400 bg-gray-900'>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App
