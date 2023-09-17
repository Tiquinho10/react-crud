import { Link, Outlet } from "react-router-dom"
import { AppRouter } from "../AppRoutes"
import { PageContent } from "../components/pageContent/pageContent"
import { ExercisesRoutes } from "../ExercisesRoutes"
import { Info } from "../components/Myinfo"
import { Counter } from "../components/Contador";
import { Routes, Route } from "react-router-dom"
export function Inicio(){


    return (
        <>
          <h1>Exercicios React</h1>
          <ul>
            <li> <Link to="/exer1"> 1. Componentes Básicos:</Link></li>
            <li> <Link to="/exer2"> 2. Props e Estado | 4. Ciclo de Vida de Componentes:</Link></li>
            <li> <Link to="/exer3"> 5. Renderização Condicional:</Link></li>
            <li> <Link to="/exer4">3. Manipulação de Eventos:</Link></li>
          </ul>

          <main>
            {/* <AppRouter /> */}
            <Outlet />
            {/* <ExercisesRoutes /> */}
            
          </main>
        </>
    )
}