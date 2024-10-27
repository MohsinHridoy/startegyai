// src/component/Login.js
import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Navbar from '../component/Navbar'; // Import the Navbar component
import backgroundImage from '../assets/background_image.png'; // Import the background image

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  color: black;
  padding: 20px;
  background: url(${backgroundImage}) no-repeat center center;
  background-size: cover;
`;

const Title = styled.h1`
  margin-bottom: 20px;
`;

const FormContainer = styled.div`
  background-color: white; // White background for the form
  padding: 20px;
  border-radius: 10px; // Rounded corners
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1); // Soft shadow for depth
`;

const Form = styled.form`
  display: flex;
  flex-direction: column; /* Ensures items are stacked vertically */
  align-items: center; /* Center items horizontally */
`;

const Input = styled.input`
  margin-bottom: 15px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 300px; // Adjust as needed
`;

const Button = styled.button`
  padding: 10px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: 300px; // Match the width of the input fields

  &:hover {
    background-color: #45a049;
  }
`;

const GoogleButton = styled(Button)`
  background-color: #db4437; // Google red
  margin-top: 10px; // Add space above the Google button

  &:hover {
    background-color: #c1352e; // Darker shade for hover
  }
`;

const NoAccountText = styled.p`
  margin-top: 15px;
  color: #007bff;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

const Login = ({ setIsLoggedIn }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (username && password) {
      setIsLoggedIn(true);
      navigate('/solutions'); // Redirect after login
    } else {
      alert("Please enter valid credentials.");
    }
  };

  const handleGoogleLogin = () => {
    // Add your Google login logic here
    alert('Google login is not implemented yet.');
  };

  return (
    <>
      <Navbar />

      <LoginContainer>
        <Title>Login</Title>
        <FormContainer>
          <Form onSubmit={handleLogin}>
            <Input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <Button type="submit">Login</Button>
            <GoogleButton type="button" onClick={handleGoogleLogin}>
              Continue with Google
            </GoogleButton>
          </Form>
          <NoAccountText onClick={() => navigate('/signup')}>
            Don't have an account? Sign Up
          </NoAccountText>
        </FormContainer>
      </LoginContainer>
    </>
  );
};

export default Login;
