import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './Main';
function App() {
  return (
  <div>
    <BrowserRouter>
    <Routes>
      <Route path ="/" element ={<Main/>}></Route>
    </Routes>
    </BrowserRouter>
  </div> 

  );
}

export default App;