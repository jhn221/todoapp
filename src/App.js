import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import useFetch from './util/useFetch'
import Nev from './components/Nev';
import TodoList from './components/TodoList';
import Footer from './components/Footer';
import TodoDetail from './components/TodoDetali';
import CreateTodo from './components/createTodo';
import CheckCalendar from './components/Calendar';
import NowDate from './components/NowDate';

function App() {
  const [todos, setTodos] = useFetch('http://localhost:3000/lists/')
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
              {/* <Route path='/list' element={<TodoList todos={todos}/>} /> */}
              <Route path='/lists/:id' element={<TodoDetail />}/>
              <Route path='/create' element={<CreateTodo />}/>
              <Route path='/calender' element={<CheckCalendar />}/>
            </Routes>
          </div>
        </header>
          <span className='Quotes'>
            행복의 문이 하나 닫히면 다른 문이 열린다 그러나 우리는 종종 닫힌 문을 멍하니 바라보다가 우리를 향해 열린 문을 보지 못하게 된다 
            – 헬렌켈러
          </span>
      </div>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
