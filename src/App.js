import './App.css';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import TaskEditPage from './pages/TaskEditPage';

function App() {
  const [tasks, setTasks] = useState([
    'купить молоко',
    'сделать ИДЗ',
    'сходить в театр'
  ]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage tasks={tasks} setTasks={setTasks} />} />
        <Route path='/edit-task' element={<TaskEditPage />} />
        <Route path='*' element={<MainPage tasks={tasks} setTasks={setTasks} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
