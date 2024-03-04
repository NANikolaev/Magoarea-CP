import { Routes, Route } from 'react-router-dom';

import Search from "./components/Search/Search";
import Articles from "./components/Articles/Articles";
import Form from './components/Form/Form';

function App() {


  return (
    <>
      <Search />
      <Routes>
        <Route path='/Articles' element={<Articles />} />
        <Route path='/Article/:id' element={<Form />} />
      </Routes>
    </>
  );
}

export default App;
