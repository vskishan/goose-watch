import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Form from './Form';
import Report from './Report';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Form/>} />
        <Route path="/report" element={<Report/>} />
      </Routes>
    </Router>

  )
}

export default App;
