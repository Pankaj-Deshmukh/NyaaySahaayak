import LoginPage from './components/LoginPage.js';
import Home from './components/Home.js';
import { BrowserRouter as Path, Route, Routes } from 'react-router-dom'

function App() {
   return (
      <>
         <Path>
            <Routes>

               <Route exact path='/home' element={<Home/>} />
               <Route exact path='/login' element={<LoginPage />} />
               
            </Routes>
         </Path>
      </>
   );
}

export default App;
