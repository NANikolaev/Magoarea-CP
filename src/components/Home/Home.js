import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Form, Input, Button, Heading, Image } from "./elements";
import Logo from "../Logo/Logo";
import logon from '../../assets/Icons/icons8-login-48 (1).png'

import { getUSer } from "./utils";

const Home = ({ setPass, setUser }) => {
  let [error, setError] = useState("");
  let navigate = useNavigate()

  function onSubmit(e) {
    e.preventDefault()
    let userId = e.currentTarget.id.value
    getUSer(userId)
      .then(user => {
        setUser(user);
        setPass(true);
        navigate('/')
      })
      .catch(err => {
        if(err.message =='Failed to fetch'){setError(true)}
        else{
          setError('red')
          setTimeout(() => {
            setError('')
          }, 2000)
        }
      });
  }

  return (

    <Container>
      <Logo />
      <Heading>НОМЕР НА СЛУЖИТЕЛ </Heading>
      <Form onSubmit={(e) => onSubmit(e)}>
        <Input type="search" name="id" required  style={{ borderColor: `${error}` }} autoComplete="off"></Input>
        <Button type="submit"><Image src={logon} /></Button>
      </Form>
       {error === true && <Heading style={{color:'red',fontSize:'18px', fontWeight:'800'}}>Няма връзка със сървъра!</Heading>}
    </Container>

  )

};

export default Home