import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import backgroundImage from '../assets/background_image.png'; // Adjust the path as needed
import Navbar from './Navbar'; // Adjust the import path as needed

const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 60px); // Adjust height to account for the navbar
  color: black;
  padding: 20px;
  background: url(${backgroundImage}) no-repeat center center;
  background-size: cover;
`;

const Title = styled.h1`
  margin: 20px 0;
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
  margin-bottom: 10px;

  &:hover {
    background-color: #45a049;
  }
`;

const GoogleButton = styled(Button)`
  background-color: #db4437; // Google red
`;

const SignInText = styled.p`
  margin-top: 15px;
  color: #007bff;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();
    // Add your sign-up logic here
    if (email && password) {
      alert('Sign-up successful!');
      navigate('/login'); // Redirect to login page after sign-up
    } else {
      alert('Please enter valid credentials.');
    }
  };

  const handleGoogleSignUp = () => {
    alert('Google sign-up is not implemented yet.');
  };

  return (
    <>
      <Navbar />
      <SignUpContainer>
        <Title>Sign Up</Title>
        <form onSubmit={handleSignUp}>
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Button type="submit">Sign Up</Button>
        </form>
        <GoogleButton onClick={handleGoogleSignUp}>Continue with Google</GoogleButton>
        <SignInText onClick={() => navigate('/login')}>Already have an account? Sign In</SignInText>
      </SignUpContainer>
    </>
  );
};

export default SignUp;
