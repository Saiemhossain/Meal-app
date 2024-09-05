
import { Route, Routes } from 'react-router';
import './App.css'
import Home from './pages/Home';
import Details from './components/Details';



function App() {
  

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:idMeal" element={<Details />} />
      </Routes>
    </>
  );
}

export default App
