import React, { useContext } from 'react';
import styled from 'styled-components';
import backgroundImage from '../assets/background_image.png';
import jsPDF from 'jspdf';
import AuthContext from '../context/AuthContext';
import Navbar from '../component/Navbar';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const SolutionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: url(${backgroundImage}) no-repeat center center;
  background-size: cover;
  color: white;
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 40px;
  font-family: 'Marriweather', serif;
  font-weight: 400;
  margin-bottom: 10px;
  text-align: center;
  margin-top: 50px;
`;

const SubHeading = styled.h2`
  font-size: 16px;
  font-family: 'Arial', sans-serif;
  font-weight: 400;
  text-align: center;
  margin-bottom: 20px;
`;

const Textbox = styled.textarea`
  width: 200%;
  max-width: 1000px;
  height: 50%;
  margin-top: 50px;
  margin-bottom: 20px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  resize: none;
`;

const DownloadButton = styled.button`
  padding: 10px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #45a049;
  }
`;

const Solutions = ({ generatedText }) => {
  const { isLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate(); // Initialize useNavigate

  const downloadPDF = () => {
    if (!isLoggedIn) {
      navigate('/login', { state: { from: '/solutions' } });
      return;
    }
  
    // if (typeof generatedText !== 'string' || generatedText.trim() === '') {
    //   console.error('No content to download as PDF');
    //   return;
    // }
  
    const doc = new jsPDF();
    const margin = 10;
    const pageWidth = doc.internal.pageSize.getWidth() - margin * 2;
    const textLines = doc.splitTextToSize(generatedText, pageWidth);
    doc.text(textLines, margin, margin);
    doc.save('solution.pdf');
  };

  return (
    <>
      <Navbar /> 
      <SolutionsContainer>
        <Title>Strategy AI Helps you make<br /> your plan better and smarter</Title>
        <SubHeading>More than 40,000+ already made their plan with us—normal, better, and smarter.</SubHeading>
        <Textbox value={generatedText} readOnly />
        <DownloadButton onClick={downloadPDF}>Download as PDF</DownloadButton>
      </SolutionsContainer>
    </>
  );
};

export default Solutions;
