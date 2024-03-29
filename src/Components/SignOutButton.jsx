import React from "react";
import styled from "styled-components";
import {useNavigate} from 'react-router-dom'

import getFirebase from "../Services/Firebase";

const SignOutButton = () => {
  const firebaseInstance = getFirebase();
  const navigateor = useNavigate()
  const signOut = async () => {
    try {
      if (firebaseInstance) {
        await firebaseInstance.auth().signOut();
        // alert("Successfully signed out!");
        navigateor('/')
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <div style={{display : "flex" , flexDirection:"column" , alignItems : "center", width: "100%" }}>
      <Title>Sign out</Title>
      <Button onClick={() => signOut()}>Sign out</Button>
    </div>
  );
};

export default SignOutButton;

const Title = styled.h1`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 40px;
  line-height: 48px;
  color: #000;
  text-align: center;
`;

const Button = styled.button`
  background: linear-gradient(91.4deg, #2fb8ff 0%, #9eecd9 100%);
  padding: 12px 0;
  width: 200px;
  border: none;
  border-radius: 30px;
  color: #fff;
  font-weight: bold;
  font-family: Segoe UI, sans-serif;
  cursor: pointer;

  :focus {
    outline: none;
  }
`;
