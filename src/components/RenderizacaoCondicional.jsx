import { useEffect } from "react";
import { useState } from "react";


export function RenderCondicional(){
    const [number, setNumber] = useState(0);
    const [text, setText] = useState('');

    const changeText = () => {

        if(number % 2 == 0)
              setText('par')
        else
           setText('impar')    
    }

    useEffect(() => {
        changeText();
    }, [number])

   return (
    <>
     <p>Digite um numero:</p>
     <input type="number"  placeholder="Digite um numero" onChange={(e) => {
        setNumber(e.target.value)
       }} />

{number & number !== 0  && 
 <p>o numero: {number} e: {text}</p>
}
   
    </>
      

   )
    
}