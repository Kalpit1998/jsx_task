import { Route, Routes } from 'react-router-dom';
// import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import WithJSX from './components/WithJSX';
import WithoutJSX from './components/WithoutJSX';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/withoutjsx' element={<WithoutJSX />} />
        <Route path='/withjsx' element={<WithJSX />} />
        <Route path='*' element={<h1>404 Page Not Found</h1>} />
      </Routes>
    </div>
  );
}

export default App;
