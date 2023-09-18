import { useState, useEffect } from "react"

export function Counter(){
   const [count, setCount] = useState(0);

   useEffect(() => {
    alert('Componente montado...')

    return () => {
        alert("Componente desmontado...")    
    }
  }, [])

 useEffect(() => {
    alert('Componente actualizado...')
  },[count])


   const increase = () => {
       setCount(prev => 
        prev = prev + 1)
   }

   const decrease = () => {
    if(count >= 0){
        setCount(prev => 
     prev = prev - 1)
    }    
}

  


    return(
        <>
        <button onClick={decrease}>Diminuir</button>
        <h1>Contador: {count}</h1>
       <button onClick={increase}>Aumentar</button>
        </>


    )
}