import React from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './styles/inicio.css'
import { useState, useEffect } from 'react'
import useInputValue from './useInputValue'

const Inicio = (props) => {

    const name = useInputValue('')
  
     console.log(name)

  return (
    <>
    <div className='container'>
   <a href="https://vitejs.dev" target="_blank">
     <img src={viteLogo} className="logo" alt="Vite logo" />
   </a>
   <a href="https://react.dev" target="_blank">
       <img src={reactLogo} className="logo react" alt="React logo" />
   </a>
    </div>
      <h1> {props.tituloPrincipal} </h1>    

    <div className="card">
      

      <label>
        Name:
        <input type="text" {...name} />
      </label>
      

      

    </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
  </>
  )
}

export default Inicio