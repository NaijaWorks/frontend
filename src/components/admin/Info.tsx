// modules
import React, { useState } from "react";

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
import FreelancerCard from "../../~reusables/design-system/molecules/FreelancerCard";

const Info = () => {
  const [info, setInfo] = useState({
    firstName: "",
    lastName: "",
    role: "",
    shortBio: "",
    longBio: "",
    email: "",
    showEmail: true,
    phoneNumber: "",
    showPhoneNumber: true,
    location: ""
  });

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
          <Input
            value={info.firstName}
            onChange={e => setInfo({ ...info, firstName: e.target.value })}
            placeholder="First name"
            type="text"
          />
          <Input
            value={info.lastName}
            onChange={e => setInfo({ ...info, lastName: e.target.value })}
            placeholder="Last name"
            type="text"
          />
        </Box>
        <Input
          value={info.role}
          onChange={e => setInfo({ ...info, role: e.target.value })}
          width="100%"
          placeholder="Role"
          type="text"
        />
        <Input
          value={info.shortBio}
          onChange={e => setInfo({ ...info, shortBio: e.target.value })}
          width="100%"
          placeholder="Shortbio"
          type="text"
        />
        <Input
          value={info.longBio}
          onChange={e => setInfo({ ...info, longBio: e.target.value })}
          width="100%"
          placeholder="Longbio"
          type="text"
        />
        <Box className="checkbox-column" width="100%">
          <Input
            value={info.email}
            onChange={e => setInfo({ ...info, email: e.target.value })}
            placeholder="Email"
            type="text"
          />
          <Checkbox
            label="Show email"
            value=""
            checked={info.showEmail}
            onChange={() => setInfo({ ...info, showEmail: !info.showEmail })}
          />
        </Box>
        <Box className="checkbox-column" width="100%">
          <Input
            value={info.phoneNumber}
            onChange={e => setInfo({ ...info, phoneNumber: e.target.value })}
            placeholder="Phone Number"
            type="text"
          />
          <Checkbox
            label="Show number"
            value=""
            checked={info.showPhoneNumber}
            onChange={() =>
              setInfo({ ...info, showPhoneNumber: !info.showPhoneNumber })
            }
          />
        </Box>
        <Input
          value={info.location}
          onChange={e => setInfo({ ...info, location: e.target.value })}
          width="100%"
          placeholder="Location"
          type="text"
        />
        <PrimaryButton>Save basic info</PrimaryButton>
      </Flex>

      <Flex
        flexDirection="column"
        justifyContent="flex-start"
        alignItems="center"
      >
        <FreelancerCard
          name={`${info.firstName} ${info.lastName}`}
          role={info.role}
          shortBio={info.shortBio}
          photoURL="https://www.jeffbullas.com/wp-content/uploads/2019/11/The-Importance-of-URL-Structure-For-SEO-And-How-To-Use-It-768x512.jpg"
        />
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
