import React from 'react';
import Input from './input';
import Password from './password';

import Button from './button';
import styled from 'styled-components'
import nameLogo from "./img/user-interface.png";
import emailLogo from "./img/email.png";
import passwordLogo from "./img/padlock.png";
import hidden from "./img/hidden.png"




const Myform = styled.form`
display:flex;
flex-direction: column;
gap: 50px;
align-items: center;
margin-top: 70px;
width: 46vw;
border-radius: 36px;
background-color:white;
`

function Form() {
    return (
      <Myform>
        <h1>Sign Up</h1>
        <Input icon={nameLogo} placeholder=" Name" />
        <Input icon={emailLogo} placeholder=" Email" />
        <Password icon={passwordLogo} placeholder=" Password" type="password" pswrd={hidden} />
        <Button />
      </Myform>
    );
}

export default Form
