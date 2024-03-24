import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';

import Home from './components/Home/Home';
import User from './components/User/User';
import Search from "./components/Search/Search";
import Articles from "./components/Articles/Articles";
import Article from './components/Article/Article';

function App() {

  let [pass, setPass] = useState(false);
  let [user ,setUser] =useState('');

  return (

    <>
      {pass
        ? <>
          <User user={user} setPass={setPass} setUser={setUser} />
           <Search/>
          <Routes>
            <Route path='/Articles' element={<Articles />} />
            <Route path='/Article/:year/:id' element={<Article  setPass={setPass} setUser={setUser} user={user}/>} />      
          </Routes>
          </>
        : <Home setPass={setPass} setUser={setUser} />
      }
    </>
  );
}

export default App;
