import Main from './containers/Main'
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Main />} />
      </Routes>
    </Router>
  );
}

export default App;
