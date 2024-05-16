import './App.css';
import { Routes, Route } from 'react-router-dom';
import AppLayout from './layout/AppLayout';
import Homapage from './pages/Homepage/Homapage';

function App() {
  return (
    <div>
      <Routes>
        {/* navbar부분 */}
        <Route path="/" element={ <AppLayout/> }>
          <Route index element={ <Homapage/> } />
        </Route> 
      </Routes>
      
    </div>
  );
}

export default App;
