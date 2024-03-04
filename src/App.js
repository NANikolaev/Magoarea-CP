import { Routes, Route } from 'react-router-dom';

import Search from "./components/Search/Search";
import Orders from "./components/Orders/Orders";
import Form from './components/Form/Form';

function App() {


  return (
    <>
      <Search />
      <Routes>
        <Route path='/Orders' element={<Orders />} />
        <Route path='/Order/:id' element={<Form />} />
      </Routes>
    </>
  );
}

export default App;
