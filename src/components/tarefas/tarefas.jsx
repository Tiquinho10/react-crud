import React, { useState } from 'react';

export function TodoList() {
  const [tarefas, setTarefas] = useState([]); 
  const [novaTarefa, setNovaTarefa] = useState(''); 

 
  const adicionarTarefa = () => {
    if (novaTarefa.trim() === '') {
      return;
    }
    setTarefas([...tarefas, novaTarefa]);
    setNovaTarefa('');
  };


  const removerTarefa = (index) => {
    const novasTarefas = [...tarefas];
    novasTarefas.splice(index, 1);
    setTarefas(novasTarefas);
  };

  return (
    <div>
      <h2>Minha Lista de Tarefas</h2>
      <ul>
        {tarefas.map((tarefa, index) => (
          <li key={index}>
            {tarefa}
            <button onClick={() => removerTarefa(index)}>Remover</button>
          </li>
        ))}
      </ul>
      <div>
        <input
          type="text"
          placeholder="Nova Tarefa"
          value={novaTarefa}
          onChange={(e) => setNovaTarefa(e.target.value)}
        />
        <button onClick={adicionarTarefa}>Adicionar</button>
      </div>
    </div>
  );
}


