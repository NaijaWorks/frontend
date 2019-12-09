// modules
import React from "react";

// components
import { styled } from "../../contexts/ThemeContext";
import { Flex } from "../../~reusables/design-system/atoms/Primitives/Primitives";

const Projects = () => {
  return (
    <StyledProjects>
      <Flex justifyContent="center" alignItems="center">
        Inputs
      </Flex>
      <Flex justifyContent="center" alignItems="center">
        Visuals
      </Flex>
    </StyledProjects>
  );
};

const StyledProjects = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: ${props => props.theme.space[7]}px;
`;

export default Projects;