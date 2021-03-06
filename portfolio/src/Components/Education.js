import React, { useState, useRef, useEffect } from "react";
import { educationData } from "../data/EducationData";
import styled from "styled-components";
import { StyledH2 } from "./titleStyles";

const ExperienceSection = styled.section`
  position: relative;
  height: 100vh;
  min-height: 500px;
  max-height: 1080px;
  background-size: cover;
  /* background: rgb(211, 211, 211); */
  padding: 15px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media (max-width: 768px) {
    height: 100%;
  }
`;

const ExperienceTitle = styled(StyledH2)``;

const ExperienceObjects = styled.div``;

const ExperienceObject = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;

  border: 1px solid;
  border-image-slice: 1;
  border-image-source: linear-gradient(
    to right,
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 0.4),
    rgba(0, 0, 0, 0)
  );

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    margin-bottom: 1.5rem;
    border: none;
  }
`;

const ExperienceText = styled.div`
  height: 200px;
  width: 400px;
  margin-left: 2rem;
  overflow: scroll;
  cursor: ns-resize;

  h3 {
    margin: 1rem 0;
  }
  p {
    margin: 0.5rem 0;
  }

  @media (max-width: 768px) {
    margin: 0;
    padding: 0 1rem;
    text-align: justify;
    width: 80vw;

    border: 1px solid;
    border-image-slice: 1;
    border-image-source: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 0.4),
      rgba(0, 0, 0, 0)
    );
    h3 {
      margin: 0;
    }
  }
`;

const ExperienceImage = styled.img`
  height: 200px;
  min-width: 270px;
  object-fit: cover;
  border-radius: 5px 0 0 5px;

  @media (max-width: 768px) {
    margin-bottom: 1rem;
    height: 200px;
    width: 280px;
    object-fit: cover;
    border-radius: 5%;
  }
`;

function Education() {
  return (
    <ExperienceSection id="education">
      <ExperienceTitle black>Education</ExperienceTitle>
      <ExperienceObjects>
        {educationData.map((item, index) => (
          <ExperienceObject key={index}>
            <ExperienceImage src={item.image} />

            <ExperienceText>
              <h3>{item.title}</h3>
              <p>
                {item.location}, {item.year}
              </p>
              <p>{item.degree}</p>
              <p>{item.text}</p>
            </ExperienceText>
          </ExperienceObject>
        ))}
      </ExperienceObjects>
    </ExperienceSection>
  );
}

export default Education;
