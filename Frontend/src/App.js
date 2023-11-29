import LoginPage from './LoginPage.js';
import Home from './components/home.js';
import { BrowserRouter as Path, Route, Routes } from 'react-router-dom'

function App() {
   return (
      <>
         <Path>
            <Routes>

               <Route exact path='/' element={<LoginPage />} />
               <Route exact path='/home' element={<Home/>} />
               
            </Routes>
         </Path>
      </>
   );
}

export default App;
