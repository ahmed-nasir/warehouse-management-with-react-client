import './App.css';
import Home from './component/Home/Home/Home';
import { Route, Routes } from 'react-router-dom';
import Header from './component/Header/Header';
import Login from './component/Login/Login/Login';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <h1 className='text-primary'>Warehouse management</h1>
      <Routes>
        <Route path='/' element={<Home></Home>}/>
        <Route path='/' element={<Home></Home>}/>
        <Route path='/login' element={<Login></Login>}/>
        
      </Routes>
    </div>
  );
}

export default App;
