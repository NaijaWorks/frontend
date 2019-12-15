// modules
import React from "react";

// components
import { styled } from "../../../contexts/ThemeContext";
import { Container, Box } from "../atoms/Primitives/Primitives";
import { P2, H4 } from "../atoms/Text/Text";
import { TextButton } from "../atoms/Button/Button";

interface CardProps {
  title: string;
  imageURL: string;
  description: string;
  projectURL: string;
}

const ProjectCard: React.FC<CardProps> = ({
  title,
  imageURL,
  description,
  projectURL
}) => {
  return (
    <StyledProjectCard>
      <Box className="image-box" width="40%">
        {imageURL && <img src={imageURL.replace('http://', 'https://')} alt={`${title} project`} />}
      </Box>
      <Box width="60%" p={6}>
        <H4>{title}</H4>
        <P2 mt={6}>{description}</P2>
        {projectURL && (
          <a href={projectURL} target="_blank" rel="noopener noreferrer">
            <TextButton>View project</TextButton>
          </a>
        )}
      </Box>
    </StyledProjectCard>
  );
};

const StyledProjectCard = styled(Container)`
  box-shadow: ${props => props.theme.shadows.shallow};
  -webkit-box-shadow: ${props => props.theme.shadows.shallow};
  -moz-box-shadow: ${props => props.theme.shadows.shallow};
  border-radius: ${props => props.theme.radii[2]}px;
  background: ${props => props.theme.colors.white};
  min-width: 240px;
  cursor: pointer;

  .image-box {
    border-bottom-left-radius: ${props => props.theme.radii[2]}px;
    border-top-left-radius: ${props => props.theme.radii[2]}px;
  }

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    border-bottom-right-radius: inherit;
    border-top-right-radius: inherit;
  }

  &:hover {
    box-shadow: ${props => props.theme.shadows.deep};
    -webkit-box-shadow: ${props => props.theme.shadows.deep};
    -moz-box-shadow: ${props => props.theme.shadows.deep};
    transition: 0.5s;
  }
`;

export default ProjectCard;
