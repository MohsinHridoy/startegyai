// src/component/Hero.js
import React, { useState } from 'react';
import styled from 'styled-components';
import backgroundImage from '../assets/background_image.png'; // Adjust the path as needed
import { useNavigate } from 'react-router-dom'; // Import useNavigate

import Navbar from './Navbar'; // Import the Navbar component

const BackgroundContainer = styled.div`
  background: url(${backgroundImage}) no-repeat center center;
  background-size: cover; // Ensure the image covers the entire container
  height: 100vh; // Full height for the background image
  position: relative; // To position the content absolutely
  
`;

const HeroContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 50px;
  height: auto; // Full height to cover the background
  color: white;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 20px;
  }
`;

const LeftSide = styled.div`
  flex: 1;
  padding: 20px;
  backdrop-filter: blur(5px);
    margin-top: -350px; /* Use a negative margin to move it up */


  @media (max-width: 768px) {
    text-align: center;
    margin-bottom: 20px;
  }
`;

const RightSide = styled.div`
  flex: 1;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FormContainer = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  width: 80%;
  max-width: 400px; // Adjust as needed

  @media (max-width: 768px) {
    max-width: 100%; // Full width on smaller screens
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Title = styled.label`
  margin-bottom: 5px;
  font-size: 14px; /* Set font size to 14px */
  height: 20px; /* Set height to 20px */
  font-family: 'Arial', sans-serif; /* Use Arial font */
  font-weight: 700; /* Set font weight to bold */
  color: #333; /* Change as necessary */
`;
const Input = styled.input`
  margin-bottom: 15px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;
const ScheduleTitle = styled.h3`
  color: #0056e0; /* Set color */
  font-size: 19px; /* Set font size */
  height: 20px; /* Set height */
  font-family: 'Impact', sans-serif; /* Use Impact font */
  font-weight: 700; /* Set font weight to 700 */
  margin-bottom: 20px; /* Space below the title */


`;

const Textarea = styled.textarea`
  margin-bottom: 15px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Dropdown = styled.select`
  margin-bottom: 15px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Button = styled.button`
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

const Heading = styled.h1`
  color: #07e7fc;
  font-size: 100%;
  height: 20px;
  font-family: 'Marriweather', serif;
  font-weight: 400;
`;

const SubHeading = styled.h2`
  color: white;
  font-family: 'Lato', sans-serif;
  font-weight: 700;
  font-size: 29px;
  line-height: 1.2;

  &::after {
    content: "";
    display: block; 
  }
`;

const Description = styled.p`
  font-family: 'Arial', sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: white;
`;

const Hero = () => {
    const [formData, setFormData] = useState({
      website: '',
      businessType: '',
      targetSegment: '',
      differentiation: '',
      painPoints: '',
      monthlySales: '',
      bestSelling: '',
      salesTarget: ''
    });
  
    const navigate = useNavigate(); 
    const [generatedText, setGeneratedText] = useState(''); 
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      
      const isValid = Object.values(formData).every(field => field !== '' || field === formData.differentiation);
      if (isValid) {
        const simulatedResponse = "This is the generated response from the API."; 
  
        setGeneratedText(simulatedResponse); 
        navigate('/solutions', { state: { generatedText: simulatedResponse } }); 
      } else {
        alert("Please fill in all required fields.");
      }
    };
  
    return (
      <>
        <Navbar />
        <BackgroundContainer>
          <HeroContent>
            <LeftSide>
              <Heading>Business Plan Automation</Heading>
              <SubHeading>Your Vision, Our Expertise:<br />Tailored Plans for Every Journey.</SubHeading>
              <Description>
                  Say goodbye to planning stress! Enter your data and receive expertly crafted business plans for the next 15, 20, or 130 days, 
                  powered by cutting-edge AI. Transform your ideas into actionable steps, tailored just for you.
                  With our intuitive platform, clarity and direction are just a click away!
              </Description>
            </LeftSide>
            <RightSide>
              <FormContainer>
              <ScheduleTitle>SCHEDULE A PLAN</ScheduleTitle> {/* New Title Above Form */}

                <Form onSubmit={handleSubmit}>
                  {/* Form Inputs with Titles */}
                  <Title htmlFor="website">Business Website or Facebook Link</Title>
                  <Input type="url" id="website" name="website" value={formData.website} onChange={handleChange} />
                  
                  <Title htmlFor="businessType">Select Business Type</Title>
                  <Dropdown id="businessType" name="businessType" value={formData.businessType} onChange={handleChange} required>
                    <option value="" disabled>Select Business Type</option>
                    <option value="Retail">Retail</option>
                    <option value="Service">Service</option>
                    <option value="E-commerce">E-commerce</option>
                    <option value="Wholesale">Wholesale</option>
                    <option value="Consulting">Consulting</option>
                  </Dropdown>
                  
                  <Title htmlFor="targetSegment">Target Customer Segment</Title>
                  <Input type="text" id="targetSegment" name="targetSegment" value={formData.targetSegment} onChange={handleChange} required />
                  
                  <Title htmlFor="differentiation">Differentiation from Competitors</Title>
                  <Input type="text" id="differentiation" name="differentiation" value={formData.differentiation} onChange={handleChange} />
                  
                  <Title htmlFor="painPoints">Current Pain Points or Problems</Title>
                  <Textarea id="painPoints" name="painPoints" value={formData.painPoints} onChange={handleChange} />
                  
                  <Title htmlFor="monthlySales">Current Monthly Sales in USD</Title>
                  <Input type="number" id="monthlySales" name="monthlySales" value={formData.monthlySales} onChange={handleChange} required />
                  
                  <Title htmlFor="bestSelling">Best-Selling Product or Service</Title>
                  <Input type="text" id="bestSelling" name="bestSelling" value={formData.bestSelling} onChange={handleChange} />
                  
                  <Title htmlFor="salesTarget">Sales Target for Next 3 Months</Title>
                  <Input type="number" id="salesTarget" name="salesTarget" value={formData.salesTarget} onChange={handleChange} required />
                  
                  <Button type="submit">Submit</Button>
                </Form>
              </FormContainer>
            </RightSide>
          </HeroContent>
        </BackgroundContainer>
      </>
    );
};

export default Hero;