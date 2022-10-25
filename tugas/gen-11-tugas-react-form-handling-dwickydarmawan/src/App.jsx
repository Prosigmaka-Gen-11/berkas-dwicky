import { useState } from 'react'
import reactLogo from './assets/react.svg'
import HandlingHookFunction from './Components/HandlingHookFunction'
import HandlingHookComponent from './Components/HandlingHookComponent'


function App() {


  return (
    <>
      <h1 className='text-center text-3xl text-bold my-10'>Handling Hook Functional Class</h1>
      <HandlingHookFunction />
      <br />
      <br />
      <br />
      <br />
      <hr className='my-4 mx-auto w-full h-2 bg-black rounded border-0 md:my-10 ' />
      <br />
      <br />
      <br />
      <br />
      <h1 className='text-center text-3xl text-bold my-10'>Handling Hook Component Class</h1>
      <HandlingHookComponent />
    </>
  )
}

export default App
