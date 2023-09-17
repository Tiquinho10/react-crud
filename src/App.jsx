import { useEffect, useState } from "react";
import { Info } from "./components/Myinfo";
import { Counter } from "./components/Contador";
import { Header } from "./components/cabecalho/cabecalho";
import { AppRouter } from "./AppRoutes";
import { PageContent } from "./components/pageContent/pageContent";
const API_BASE_URL = "http://localhost:3210";

function App(){

  const [logged, setLogged] = useState(false);


  
  return (
    <>
      
    <PageContent />
     {/* <Info age="17" name="Luiz Tique"/>
     <Info age="24" name="Imilsicio"/> */}
     {/* <button onClick={() => {
      setLogged(!logged);
     }}>Logado</button>
     {logged && 
       <Info age="17" name="Luiz Tique"/>
     }
   <br></br>
   <Counter /> */}
    </>
   
  )


}

export default App;