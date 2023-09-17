import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import { Info } from "./components/Myinfo";
import { Counter } from "./components/Contador";

export function ExercisesRoutes(){

    return (
        <>
            <Routes>
                <Route path="/exer1" element={<Info />}></Route>
                <Route path="/exer2" element={<Counter />}></Route>
            </Routes>
        </>
    )
}