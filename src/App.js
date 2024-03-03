import {Routes,Route} from 'react-router-dom';

import Search from "./components/Search/Search";
import Orders from "./components/Orders/Orders";


function App() {




  return (
    <>
    <Search/>
      <Routes>
       <Route path='/Orders' element={<Orders/>}/>
        <Route path='/Order/:id' element={<h1>Hello Hacker!!!</h1>}/>
      </Routes>
    </>
  );
}

export default App;
