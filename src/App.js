import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import useFetch from './util/useFetch'
import Nev from './components/Nev';
import TodoList from './components/todo/TodoList';
import Footer from './components/Footer';
import TodoDetail from './components/todo/TodoDetali';
import CreateTodo from './components/todo/createTodo';
import CheckCalendar from './components/Calendar';
import NowDate from './components/NowDate';
import Todocount from './components/todo/Todocount';
import RandomProverbs from './components/Random';

function App() {
  const [todos] = useFetch('http://localhost:3000/lists/')
  // console.log(todos)
  return (
    <BrowserRouter>
      <Nev />
      <div className="App">
        <header className="App-header">
          <div className='content'>
            오늘의 할 일
            {<TodoList todos={todos}/>}
          </div>
          <div className='tododetail'>
            <div className='todayDate'>{<NowDate/>}</div>   
            <Routes>
              <Route path='/' element={<Todocount/>}/>
              <Route path='/lists/:id' element={<TodoDetail />}/>
              <Route path='/create' element={<CreateTodo />}/>
              <Route path='/calender' element={<CheckCalendar />}/>
            </Routes>
          </div>
        </header>
          <span className='Quotes'>{<RandomProverbs/>}</span>
      </div>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
