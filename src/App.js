import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './mainComponent/Main';
import Pagedetails, { pageLoader } from './Pagedetails';
function App() {
  return(
    <BrowserRouter>
       <Routes>
        <Route path='/' element={<Main />}>
           <Route 
            path=':pageTitle'
            element={<Pagedetails />}
           ></Route>
        </Route>
       </Routes>
    </BrowserRouter>
  );
}
export default App;