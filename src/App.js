import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Components/About/About';
import Checkout from './Components/Checkout/Checkout';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import RequireAuth from './Components/RequireAuth/RequireAuth';
import RoomDetail from './Components/RoomDetail/RoomDetail';
import Rooms from './Components/Rooms/Rooms';
import SignUp from './Components/SignUp/SignUp';
import Footer from './Shared/Footer/Footer';
import Header from './Shared/Header/Header';
import NotFound from './Shared/NotFound/NotFound';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>} />
        <Route path='/rooms' element={<Rooms></Rooms>} />
        <Route path='/room/:roomId' element={<RoomDetail></RoomDetail>} />
        <Route path='/about' element={<About></About>} />
        <Route path='/login' element={<Login></Login>} />
        <Route path='/signup' element={<SignUp></SignUp>} />
        <Route path='/checkout' element={
          <RequireAuth>
            <Checkout></Checkout>
          </RequireAuth>
        } />
        <Route path='*' element={<NotFound></NotFound>} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
