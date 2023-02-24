import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import { BrowserRouter,Route,Routes, } from 'react-router-dom';
import SideBar from './components/SideBar';
import NavBar from './components/NavBar';
import FooterBar from "./components/FooterBar"
import Main from "./components/Main"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <SideBar />
        <NavBar/>
      <Routes>
        <Route path="Main" element={<Main/>}/>
      </Routes>
        <FooterBar />
      </BrowserRouter>

    </div>
  );
}

export default App;
