import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';

import Search from "./components/Search/Search";
import Articles from "./components/Articles/Articles";
import Form from './components/Form/Form';
import Logo from './components/Logo/Logo';

function App() {

  let [logo, setLogo] = useState(true);


  return (

    <>
      {logo
        ? <Logo setLogo={setLogo}/>
        : <>
          <Search />
          <Routes>
            <Route path='/Articles' element={<Articles />} />
            <Route path='/Article/:id' element={<Form />} />
          </Routes>
        </>
      }
    </>


  );
}

export default App;
