import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import Cart from './pages/Cart';
import Home from './pages/Home';

const App = () => {
  return (
    <div className="container">
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/cart' element={<Cart/>} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
