
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import AddTodo from './Components/AddTodo';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/add' element={<AddTodo/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
