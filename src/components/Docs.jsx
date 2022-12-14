import { useState, useEffect } from 'react'
import '../styles/App.css'

function Docs() {
  /* Reglas de los Hooks */
  /* 
  1. deben estar dentro del componente
  2. no deben estar dentro de un scope (condiciones, ciclos, funciones)
  */
  const [number, setNumber] = useState(0)
  const [isView, setIsView] = useState(false)


  const sumar = () =>{
    setNumber(9000 + 1)
  }
  /* esto se ejecuta cada que hay un cambio*/
 /* useEffect(() =>{
    sumar()
    console.log('useEffect')
  })
  */
 /*esto se ejecuta solo la primera vez que carga el componente*/ 
 /* useEffect(() => {
   sumar()
   console.log('useEffect')
}, [])
 */
/*cada que cambia el estado de la dependencia */
/* useEffect(() =>{
  sumar()
  console.log('useEffect');
}, [isView, number]) */
/* 4. cuando se desmonta el componente*/
/* useEffect(() =>{

  return () =>{
    console.log('desmontar')
  }
}, []) */

  //side effects
  //useEffect
  
  return (
    <div className="app text-white">
     <h1 className="text-danger">Consumo de API</h1>
     <h2>{number}</h2>
     <button
        className='d-block btn btn-primary'
        //cada clic suma el valor de number +1 con useState y muestra en <h2/>
        onClick={() => setNumber(number + 1)} >
          Sumar
     </button>
     <button className='d-block btn btn-info' onClick={() => setIsView(!isView)}>Visible</button>
     {
      isView && <p>Visible</p>
     }
    </div>
  )
}

export default Docs
