
import './App.css'
import { Box } from '@mui/material';
import HomePage from './HomePage';
import NewArrivals from './NewArrivals';
import SpecialSale from './SpecialSale';
import FrequentlyAskedQuestions from './FrequentlyAskedQuestions'
import HowToSend from './HowToSend';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

function App() {


  return (
    <Box>
      
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/NewArrivals' element={<NewArrivals />} />
        <Route path='/SpecialSale' element={<SpecialSale />} />
        <Route path='/FrequentlyAskedQuestions' element={<FrequentlyAskedQuestions />} />
        <Route path='/HowToSend' element={<HowToSend />} />
      </Routes>
      </BrowserRouter>
    </Box>
  )
}

export default App;
