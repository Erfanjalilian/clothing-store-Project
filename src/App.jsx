
import './App.css'
import { Box } from '@mui/material';
import HomePage from './HomePage';
import NewArrivals from './NewArrivals';
import SpecialSale from './SpecialSale';
import FrequentlyAskedQuestions from './FrequentlyAskedQuestions'
import HowToSend from './HowToSend';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import PaymentMethod from './PaymentMethod'
import Login from './Login';
import SignUp from './SignUp';
import ContactUs from './ContactUs'
import StorePage from './StorePage/StorePage';


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
        <Route path='/PaymentMethod' element={<PaymentMethod />} />
        <Route path='/ContactUs' element={<ContactUs />} />
         <Route path='/Login' element={<Login />} />
         <Route path='/SignUp' element={<SignUp />} />
          <Route path='/StorePage' element={<StorePage />} />
      </Routes>
      </BrowserRouter>
    </Box>
  )
}

export default App;
