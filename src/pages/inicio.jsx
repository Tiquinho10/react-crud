import { Link, Outlet } from "react-router-dom"
import { AppRouter } from "../AppRoutes"
import { PageContent } from "../components/pageContent/pageContent"
import { ExercisesRoutes } from "../ExercisesRoutes"
import { Info } from "../components/Myinfo"
import { Counter } from "../components/Contador";
import { Routes, Route } from "react-router-dom"
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext"

export function Inicio(){
  const[theme, toggleTheme] = useContext(ThemeContext);

    return (
        <>
          <h1>Exercicios React</h1>
          <ul>
            <li> <Link to="/exer1"> 1. Componentes Básicos:</Link></li>
            <li> <Link to="/exer2"> 2. Props e Estado | 4. Ciclo de Vida de Componentes:</Link></li>
            <li> <Link to="/exer3"> 5. Renderização Condicional:</Link></li>
            <li> <Link to="/exer4">3. Manipulação de Eventos:</Link></li>
            <li>O tema atual e: {theme}</li>
            <li><button onClick={toggleTheme}>Mudar Tema</button></li>
          </ul>

          <main>
            {/* <AppRouter /> */}
            <Outlet />
            {/* <ExercisesRoutes /> */}
            
          </main>
        </>
    )
}