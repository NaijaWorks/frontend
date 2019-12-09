// modules
import React from "react";

// components
import { styled } from "../../contexts/ThemeContext";
import {
  Flex,
  Box,
  Container
} from "../../~reusables/design-system/atoms/Primitives/Primitives";
import { Input } from "../../~reusables/design-system/atoms/Input/Input";
import { PrimaryButton } from "../../~reusables/design-system/atoms/Button/Button";
import Checkbox from "../../~reusables/design-system/atoms/Checkbox/Checkbox";

const Info = () => {
  return (
    <StyledInfo>
      <Flex flexDirection="column" justifyContent="center" alignItems="center">
        <Container
          boxShadow="deep"
          borderRadius={5}
          width="120px"
          height="120px"
        >
          <img
            src="https://www.jeffbullas.com/wp-content/uploads/2019/11/The-Importance-of-URL-Structure-For-SEO-And-How-To-Use-It-768x512.jpg"
            alt={`Names's profile`}
          />
        </Container>
        <Box mt={7} className="input-column" width="100%">
          <Input placeholder="First name" type="text" />
          <Input placeholder="Last name" type="text" />
        </Box>
        <Input width="100%" placeholder="Role" type="text" />
        <Input width="100%" placeholder="Shortbio" type="text" />
        <Input width="100%" placeholder="Longbio" type="text" />
        <Box className="checkbox-column" width="100%">
          <Input placeholder="Email" type="text" />
          <Checkbox
            label="Show email"
            value=""
            checked={true}
            onChange={() => console.log()}
          />
        </Box>
        <Box className="checkbox-column" width="100%">
          <Input placeholder="Phone Number" type="text" />
          <Checkbox
            label="Show number"
            value=""
            checked={false}
            onChange={() => console.log()}
          />
        </Box>
        <Input width="100%" placeholder="Location" type="text" />
        <PrimaryButton>Save basic info</PrimaryButton>
      </Flex>

      <Flex flexDirection="column" justifyContent="center" alignItems="center">
        Visuals
      </Flex>
    </StyledInfo>
  );
};

const StyledInfo = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: ${props => props.theme.space[7]}px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: inherit;
  }

  .input-column {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
    gap: 0 ${props => props.theme.space[6]}px;
  }

  .checkbox-column {
    display: grid;
    grid-template-columns: 1fr 140px;
    gap: 0 ${props => props.theme.space[6]}px;
  }

  input {
    box-shadow: ${props => props.theme.shadows.shallow};
    -webkit-box-shadow: ${props => props.theme.shadows.shallow};
    -moz-box-shadow: ${props => props.theme.shadows.shallow};
    border: 0;
    background: ${props => props.theme.colors.white};
  }

  button {
    box-shadow: ${props => props.theme.shadows.deep};
    -webkit-box-shadow: ${props => props.theme.shadows.deep};
    -moz-box-shadow: ${props => props.theme.shadows.deep};
  }
`;

export default Info;
