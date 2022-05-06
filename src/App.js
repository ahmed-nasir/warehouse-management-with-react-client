import './App.css';
import Home from './component/Home/Home/Home';
import { Route, Routes } from 'react-router-dom';

import Login from './component/Login/Login/Login';
import Header from './component/Shared/Header/Header';
import Footer from './component/Shared/Footer/Footer';
import Register from './component/Login/Register/Register';
import AddItem from './component/AddItem/AddItem';
import NotFound from './component/Shared/NotFound/NotFound';
import MyItem from './component/MyItem/MyItem';
import RequirAuth from './component/Login/RequirAuth/RequirAuth';
import ManageItem from './component/ManageItem/ManageItem';
import Blog from './component/Blog/Blog';
import ItemDetails from './component/Home/ItemDetails/ItemDetails';
import { ToastContainer } from 'react-toastify';



function App() {
  return (
    <div >
      <Header></Header>
      <ToastContainer />

      <Routes>
        <Route path='/' element={<Home></Home>} />
        <Route path='/addItem' element={<RequirAuth>
          <AddItem></AddItem>
        </RequirAuth>} />
        <Route path='/itemDetails/:id' element={<RequirAuth>
          <ItemDetails></ItemDetails>
        </RequirAuth>} />
        <Route path='/manageItem' element={<RequirAuth>
          <ManageItem></ManageItem>
        </RequirAuth>} />
        <Route path='/myItem' element={<RequirAuth>
          <MyItem></MyItem>
        </RequirAuth>} />

        <Route path='/login' element={<Login></Login>} />
        <Route path='/register' element={<Register></Register>} />
        <Route path='/blog' element={<Blog></Blog>} />
        <Route path='*' element={<NotFound></NotFound>} />


      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
