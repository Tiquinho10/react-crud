import { Helloworld } from "./HelloWorld"

export function Info({age, name}){

    return (
        <>
           <p><Helloworld /></p>
           <p>Nome: {name}</p>
           <p>Idade: {age}</p>
        </>
    )
}