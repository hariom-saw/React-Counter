import { useState } from 'react'


import React from 'react'

const App = () => {
  const [count, setCount] = useState(0);
  const addValue = () => {
    setCount((prevCount) => prevCount + 1);
  };
  const subValue = () => { setCount((prevCount) => (prevCount > 0) ? prevCount - 1 : 0) };


  return (
    <div className='flex justify-center flex-col items-center'>
      <h1 className="text-4xl font-bold">Vite + React</h1>
      <h2 className='text-3xl font-bold my-2'>Counter value : {count} </h2>
      <div className="card">
        <button className=" m-3 select-none rounded-lg bg-gray-900 py-3 px-6 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="button" onClick={addValue}> Add </button>
        <button className="select-none rounded-lg bg-gray-900 py-3 px-6 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="button" onClick={subValue}>Minus </button>
      </div>
    </div >
  )
}

export default App