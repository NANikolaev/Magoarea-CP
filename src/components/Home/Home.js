import { useState } from "react";
import { Container, Form, Input, Button, Heading, Image } from "./elements";
import Logo from "../Logo/Logo";
import logon from '../../assets/Icons/icons8-login-48 (1).png'

import { getUSer } from "./utils";

const Home = ({ setPass, setUser }) => {
  let [error, setError] = useState("");

  function onSubmit(e) {
    e.preventDefault()
    let userId = e.currentTarget.id.value
    getUSer(userId)
      .then(user => {
        setUser(user);
        setPass(true);
      })
      .catch(err => {
        setError('red')
        setTimeout(() => {
          setError('')
        }, 2000)
      });
  }

  return (

    <Container>
      <Logo />
      <Heading>НОМЕР НА СЛУЖИТЕЛ </Heading>
      <Form onSubmit={(e) => onSubmit(e)}>
        <Input type="search" name="id" required pattern="[0-9]?\d+" style={{ borderColor: `${error}` }}></Input>
        <Button type="submit"><Image src={logon} /></Button>
      </Form>
    </Container>

  )

};

export default Home