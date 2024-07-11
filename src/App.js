import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import Home from './pages/Home';
import Menu from './pages/Menu';
import About from "./pages/About";
import Contact from "./pages/Contact";
import P_info from "./pages/P_info";
import Add_to_cart from "./pages/Add_to_cart";
import B_product from "./pages/B_product";
// import Deletedata from "./pages/Deletedata";
// import Deletedata from './pages/Deletedata'
import Payment from './pages/Payment';
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' exact Component={Home}/>
          <Route path='/Menu' exact Component={Menu}/>
          <Route path='/About' exact Component={About}/>
          <Route path='/Contact' exact Component={Contact}/>
          {/* <Route path='/Deletedata' exact component={Deletedata}></Route>/ */}
          <Route path='/B_product' exact Component={B_product}/>
          <Route path='/Payment' exact Component={Payment}/>
          {/* <Route path='/Deletedata' exact Component={Deletedata}/> */}
          <Route path='/P_info' exact Component={P_info}/>
          <Route path='/Add_to_cart' exact Component={Add_to_cart}/>
       
          </Routes>
          <Footer />
      </Router>
    </div>
  );
}

export default App;
