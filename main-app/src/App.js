import LoginPage from './components/LoginPage.js';
import Home from './components/Home.js';
import { BrowserRouter as Main, Route, Routes } from 'react-router-dom'

function App() {
   return (
      <>
         <Main>
            <Routes>
               <Route exact path='/' element={<LoginPage />} />
               <Route exact path='/home' element={<Home/>} />
            </Routes>
         </Main>
      </>
   );
}

export default App;
