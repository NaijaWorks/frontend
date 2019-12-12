// modules
import React from "react";
import { Link } from "react-router-dom";

// components
import { styled } from "../../../contexts/ThemeContext";
import { Container, Box } from "../atoms/Primitives/Primitives";
import { H5, P3, P2 } from "../atoms/Text/Text";

interface CardProps {
  id: string;
  name: string;
  role: string;
  shortBio: string;
  photoURL: string;
}

const FreelancerCard: React.FC<CardProps> = ({
  id,
  name,
  role,
  shortBio,
  photoURL
}) => {
  return (
    <StyledFreelancerCard to={`profile/${id}`}>
      <Box width="70%" p={6}>
        <H5>{name}</H5>
        <P3 py={2} color="primary">
          {role}
        </P3>
        <P2 mt={6}>{shortBio}</P2>
      </Box>
      <Box className="image-box" width="30%">
        <img src={photoURL} alt={`${name}'s profile`} />
      </Box>
    </StyledFreelancerCard>
  );
};

const StyledFreelancerCard = styled(Link)`
  display: flex;
  box-shadow: ${props => props.theme.shadows.shallow};
  -webkit-box-shadow: ${props => props.theme.shadows.shallow};
  -moz-box-shadow: ${props => props.theme.shadows.shallow};
  border-radius: ${props => props.theme.radii[1]}px;
  background: ${props => props.theme.colors.white};
  cursor: pointer;

  .image-box {
    border-bottom-right-radius: ${props => props.theme.radii[1]}px;
    border-top-right-radius: ${props => props.theme.radii[1]}px;
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

export default FreelancerCard;
