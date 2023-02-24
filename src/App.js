import './App.css';
import { BrowserRouter,Routes, } from 'react-router-dom';
import SideBar from './components/SideBar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <SideBar />
      <Routes>
      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
