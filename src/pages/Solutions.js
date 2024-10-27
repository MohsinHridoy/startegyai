import React, { useContext } from 'react';
import styled from 'styled-components';
import backgroundImage from '../assets/background_image.png'; // Adjust the path as needed
import jsPDF from 'jspdf';
import AuthContext from '../context/AuthContext'; // Use default export
// import Navbar from '../component/Navbar'; // Import the Navbar component

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
  font-size: 40px; /* Set font size to 29px */
  font-family: 'Marriweather', serif; /* Set font family */
  font-weight: 400; /* Set font weight to 400 */
  margin-bottom: 10px; /* Add margin below the title */
    text-align: center; /* Center the text */
    margin-top: 50px; /* Use a negative margin to move it up */

`;

const SubHeading = styled.h2`
  font-size: 16px; /* Set a suitable font size for the subheading */
  font-family: 'Arial', sans-serif; /* Use Arial font */
  font-weight: 400; /* Set font weight to 400 */
  text-align: center; /* Center the text */
  margin-bottom: 20px; /* Space below the subheading */
`;

const Textbox = styled.textarea`
  width: 200%;
  max-width: 1000px;
  height: 50%;
      margin-top: 50px; /* Use a negative margin to move it up */

  margin-bottom: 20px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  resize: none;
`;

const DownloadButton = styled.button`
  padding: 10px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #45a049;
  }
`;

const Solutions = ({ generatedText }) => {
  const { isLoggedIn } = useContext(AuthContext); // Check the user's login status

  const downloadPDF = () => {
    // if (!isLoggedIn) {
    //   // Redirect to login page if not logged in
    //   window.location.href = '/login'; // Adjust the route as needed
    //   return;
    // }

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
      {/* <Navbar /> Render the Navbar */}
      <SolutionsContainer>
        <Title>Staretegy AI Helps helps you make<br /> your plan better and smarter</Title>
        <SubHeading>More than 40,000+ already made their plan with us—normal, better, and smarter.</SubHeading>
        <Textbox value={generatedText} readOnly />
        <DownloadButton onClick={downloadPDF}>Download as PDF</DownloadButton>
      </SolutionsContainer>
    </>
  );
};

export default Solutions;