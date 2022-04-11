
import './App.css';
import Landing_Page from './Landing-page/Landing_Page';
import { BrowserRouter, Route, Routes, Switch } from 'react-router-dom';
import Postview from './Postview';

function App() {
  return (
    <div className="App">
     
      
      
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<Landing_Page/>}/>
      <Route path='/Postview' element={<Postview/>}/>

     
      </Routes>
      </BrowserRouter>
    
     
      
        
        
        
    </div>
  );
}

export default App;
