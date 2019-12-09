// modules
import React from "react";

// components
import { styled } from "../../../contexts/ThemeContext";
import { Container, Box, Flex } from "../atoms/Primitives/Primitives";
import { H4, P2 } from "../atoms/Text/Text";
import { PrimaryButton } from "../atoms/Button/Button";

interface CardProps {
  name: string;
  role: string;
  longBio: string;
  photoURL: string;
  email: string;
  showEmail: boolean;
  phoneNumber: string;
  showPhoneNumber: boolean;
}

const FreelancerProfileCard: React.FC<CardProps> = ({
  name,
  role,
  longBio,
  photoURL,
  email,
  showEmail,
  phoneNumber,
  showPhoneNumber
}) => {
  return (
    <StyledProfileCard flexDirection="column">
      <Box className="image-box" height="270px" width="100%">
        <img src={photoURL} alt={`${name}'s profile`} />
      </Box>
      <Box p={7}>
        <H4>{name}</H4>
        <P2 py={3} color="primary">
          {role}
        </P2>
        <P2 my={6}>{longBio}</P2>
        {(showEmail || showPhoneNumber) && (
          <Flex justifyContent="flex-end">
            <PrimaryButton className="contact-btn">Contact</PrimaryButton>
          </Flex>
        )}
      </Box>
    </StyledProfileCard>
  );
};

const StyledProfileCard = styled(Container)`
  box-shadow: ${props => props.theme.shadows.deep};
  -webkit-box-shadow: ${props => props.theme.shadows.deep};
  -moz-box-shadow: ${props => props.theme.shadows.deep};
  border-radius: ${props => props.theme.radii[2]}px;
  background: ${props => props.theme.colors.white};
  cursor: pointer;

  .image-box {
    border-top-left-radius: ${props => props.theme.radii[2]}px;
    border-top-right-radius: ${props => props.theme.radii[2]}px;
  }

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    border-top-left-radius: inherit;
    border-top-right-radius: inherit;
  }

  &:hover {
    box-shadow: ${props => props.theme.shadows.deepDark};
    -webkit-box-shadow: ${props => props.theme.shadows.deepDark};
    -moz-box-shadow: ${props => props.theme.shadows.deepDark};
    transition: 0.5s;
  }

  button.contact-btn {
    box-shadow: none;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
  }
`;

export default FreelancerProfileCard;
