import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';

import Home from './components/Home/Home';
import User from './components/User/User';
import Search from "./components/Search/Search";
import Articles from "./components/Articles/Articles";
import Form from './components/Form/Form';

function App() {

  let [pass, setPass] = useState(false);
  let [user ,setUser] =useState('');

  return (

    <>
      {pass
        ? <>
          <User user={user} />
           <Search/>
          <Routes>
            <Route path='/Articles' element={<Articles />} />
            <Route path='/Article/:id' element={<Form />} />         
          </Routes>
          </>
        : <Home setPass={setPass} setUser={setUser} />
      }
    </>
  );
}

export default App;
