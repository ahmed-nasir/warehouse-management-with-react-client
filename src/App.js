import './App.css';
import Home from './component/Home/Home/Home';
import { Route, Routes } from 'react-router-dom';

import Login from './component/Login/Login/Login';
import Header from './component/Shared/Header/Header';
import Footer from './component/Shared/Footer/Footer';
import Register from './component/Login/Register/Register';



function App() {
  return (
    <div >
      <Header></Header>
      
      <Routes>
        <Route path='/' element={<Home></Home>}/>
        
        <Route path='/login' element={<Login></Login>}/>
        <Route path='/register' element={<Register></Register>}/>
        
      </Routes>
     <Footer></Footer>
    </div>
  );
}

export default App;
