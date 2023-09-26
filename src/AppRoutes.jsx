import React from 'react';
import {  Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import { Inicio } from './pages/inicio';
import { Sobre } from './pages/sobre';
import { Servicos } from './pages/servicos';
import { Contacto } from './pages/contacto';
import { Header } from './components/cabecalho/cabecalho';
import { Info } from "./components/Myinfo";
import { Counter } from "./components/Contador";
import { RenderCondicional } from './components/RenderizacaoCondicional';
import { TodoList } from './components/tarefas/tarefas';


export function AppRouter(){
  return (
   
     <>
   
     <Header />
     <Routes>
      
      <Route path="/" element={<Inicio />}>
        <Route path="/exer1" element={<Info age="18" name="Luiz" />} />
        <Route path="/exer2" element={<Counter />} />
        <Route path="/exer3" element={<RenderCondicional />} />
        <Route path="/exer4" element={<TodoList />} />
        

      </Route>
      <Route path="/contacto" element={<Contacto />} caseSensitive /> 
      
      <Route path="/sobre" element={<Sobre />} caseSensitive />
      
      <Route path="/servicos" element={<Servicos />} caseSensitive />
       
                 
    </Routes>
 
    
   </>
   
    
  );
};


