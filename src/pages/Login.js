// src/component/Login.js
import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Navbar from '../component/Navbar';
import backgroundImage from '../assets/background_image.png';
import { auth } from '../firebase'; // Import Firebase auth
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import AuthContext from '../context/AuthContext'; // Import AuthContext

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
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Input = styled.input`
  margin-bottom: 15px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 300px;
`;

const Button = styled.button`
  padding: 10px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: 300px;

  &:hover {
    background-color: #45a049;
  }
`;

const GoogleButton = styled(Button)`
  background-color: #db4437;
  margin-top: 10px;

  &:hover {
    background-color: #c1352e;
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

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();
  const { setIsLoggedIn, setUserEmail } = useContext(AuthContext); // Use context

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, username, password);
      setIsLoggedIn(true);
      setUserEmail(userCredential.user.email);
      navigate('/solutions');
    } catch (error) {
      alert(error.message);
    }
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, username, password);
      setIsLoggedIn(true);
      setUserEmail(userCredential.user.email);
      navigate('/solutions');
    } catch (error) {
      alert(error.message);
    }
  };

  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const userCredential = await signInWithPopup(auth, provider);
      setIsLoggedIn(true);
      setUserEmail(userCredential.user.email);
      navigate('/solutions');
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <>
      <Navbar />
      <LoginContainer>
        <Title>{isLogin ? 'Login' : 'Sign Up'}</Title>
        <FormContainer>
          <Form onSubmit={isLogin ? handleLogin : handleSignup}>
            <Input
              type="email"
              placeholder="Email"
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
            <Button type="submit">{isLogin ? 'Login' : 'Sign Up'}</Button>
            <GoogleButton type="button" onClick={handleGoogleLogin}>
              Continue with Google
            </GoogleButton>
          </Form>
          <NoAccountText onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? "Don't have an account? Sign Up" : "Already have an account? Login"}
          </NoAccountText>
        </FormContainer>
      </LoginContainer>
    </>
  );
};

export default Login;
