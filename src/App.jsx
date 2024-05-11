import { ToastContainer,} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './App.css'
import Grocery from './Component/Grocery/Grocery'

function App() {
 

  return (
    <>
         <ToastContainer />
      <Grocery></Grocery>
    
     
    </>
  )
}

export default App
