
import './App.css'
import { Box } from '@mui/material';
import HomePage from './HomePage';
import NewArrivals from './NewArrivals';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

function App() {


  return (
    <Box>
      
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/NewArrivals' element={<NewArrivals />} />
      </Routes>
      </BrowserRouter>
    </Box>
  )
}

export default App;
