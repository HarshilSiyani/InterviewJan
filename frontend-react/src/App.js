import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import Index from './pages/Index';
import Heroes from './pages/Heroes';
import './App.css'

function App() {
  return (
    <div>
        <Router>
          <Routes>
            <Route path="/" exact element={<Index />}></Route>
            <Route path="/my-heroes" exact element={<Heroes />}></Route>
          </Routes>
        </Router>
      </div>
  )
};


export default App;
