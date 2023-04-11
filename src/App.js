import React from 'react';
import './App.css';
import StartPage from './components/StartPage';
import Main from './components/Main';
import Travel from './components/Travel';
import Path from './components/Path';
import HotTravel from './components/HotTravel';
import Bookmark from './components/Bookmark';
import Friend from './components/Friend';
import { Route, Routes, BrowserRouter} from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<StartPage/>}></Route>
          <Route path='/main' element={<Main/>}></Route>
          <Route path='/travel' element={<Travel/>}></Route>
          <Route path='/path' element={<Path />}></Route>
          <Route path='/hotTravel' element={<HotTravel />}></Route>
          <Route path='/bookMark' element={<Bookmark />}></Route>
          <Route path='/friend' element={<Friend />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;