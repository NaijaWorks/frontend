// modules
import React, { useState, useContext, useEffect } from "react";
import { useQuery, useMutation } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

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
import FreelancerProfileCard from "../../~reusables/design-system/molecules/FreelancerProfileCard";
import { AuthContext } from "../../contexts/AuthContext";

// query
export interface UserInfo {
  id: string;
  firstName: string;
  lastName: string;
  photoURL: string;
  role: string;
  shortBio: string;
  longBio: string;
  email: string;
  showEmail: boolean;
  phone: string;
  showPhone: boolean;
  location: string;
}

export const GET_USER_INFO = gql`
  query getUserInfo($id: ID!) {
    user(id: $id) {
      id
      firstName
      lastName
      photoURL
      role
      shortBio
      longBio
      email
      showEmail
      phone
      showPhone
      location
    }
  }
`;

// mutation
const UPDATE_USER_INFO = gql`
  mutation(
    $id: ID
    $firstName: String
    $lastName: String
    $photoURL: String
    $showEmail: Boolean
    $phone: String
    $showPhone: Boolean
    $location: String
    $role: String
    $shortBio: String
    $longBio: String
  ) {
    updateUser(
      id: $id
      firstName: $firstName
      lastName: $lastName
      photoURL: $photoURL
      showEmail: $showEmail
      phone: $phone
      showPhone: $showPhone
      location: $location
      role: $role
      shortBio: $shortBio
      longBio: $longBio
    ) {
      id
      firstName
      lastName
      photoURL
      role
      shortBio
      longBio
      email
      showEmail
      phone
      showPhone
      location
    }
  }
`;

const Info = () => {
  const auth = useContext(AuthContext);
  const [info, setInfo] = useState({
    photoURL: "",
    firstName: "",
    lastName: "",
    role: "",
    shortBio: "",
    longBio: "",
    email: "",
    showEmail: true,
    phone: "",
    showPhone: true,
    location: ""
  });

  const { data } = useQuery<{ user: UserInfo }, { id: string }>(GET_USER_INFO, {
    variables: { id: auth.id ? auth.id : "" }
  });

  const [updateUserInfo] = useMutation<{ updateUser: UserInfo }, UserInfo>(
    UPDATE_USER_INFO,
    {
      variables: {
        id: auth.id || "",
        ...info
      }
    }
  );

  useEffect(() => {
    if (data && data.user) setInfo(data.user);
  }, [data]);

  const onClickUpdate = () => {
    updateUserInfo();
  };

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
            value={info.firstName || ""}
            onChange={e => setInfo({ ...info, firstName: e.target.value })}
            placeholder="First name"
            type="text"
          />
          <Input
            value={info.lastName || ""}
            onChange={e => setInfo({ ...info, lastName: e.target.value })}
            placeholder="Last name"
            type="text"
          />
        </Box>
        <Input
          value={info.role || ""}
          onChange={e => setInfo({ ...info, role: e.target.value })}
          width="100%"
          placeholder="Role"
          type="text"
        />
        <Input
          value={info.shortBio || ""}
          onChange={e => setInfo({ ...info, shortBio: e.target.value })}
          width="100%"
          placeholder="Shortbio"
          type="text"
        />
        <Input
          value={info.longBio || ""}
          onChange={e => setInfo({ ...info, longBio: e.target.value })}
          width="100%"
          placeholder="Longbio"
          type="text"
        />
        <Box className="checkbox-column" width="100%">
          <Input
            value={info.email || ""}
            onChange={e => setInfo({ ...info, email: e.target.value })}
            disabled
            placeholder="Email"
            type="text"
          />
          <Checkbox
            label="Show email"
            value=""
            checked={
              typeof info.showEmail === "boolean" ? info.showEmail : false
            }
            onChange={() => setInfo({ ...info, showEmail: !info.showEmail })}
          />
        </Box>
        <Box className="checkbox-column" width="100%">
          <Input
            value={info.phone || ""}
            onChange={e => setInfo({ ...info, phone: e.target.value })}
            placeholder="Phone Number"
            type="text"
          />
          <Checkbox
            label="Show number"
            value=""
            checked={
              typeof info.showPhone === "boolean" ? info.showPhone : false
            }
            onChange={() => setInfo({ ...info, showPhone: !info.showPhone })}
          />
        </Box>
        <Input
          value={info.location || ""}
          onChange={e => setInfo({ ...info, location: e.target.value })}
          width="100%"
          placeholder="Location"
          type="text"
        />
        <PrimaryButton onClick={() => onClickUpdate()}>
          Update info
        </PrimaryButton>
      </Flex>

      <Flex
        flexDirection="column"
        justifyContent="flex-start"
        alignItems="center"
      >
        <FreelancerCard
          id={auth.id || ""}
          name={`${info.firstName || ""} ${info.lastName || ""}`}
          role={info.role}
          shortBio={info.shortBio}
          photoURL="https://www.jeffbullas.com/wp-content/uploads/2019/11/The-Importance-of-URL-Structure-For-SEO-And-How-To-Use-It-768x512.jpg"
        />
        <Box p={7} />
        <FreelancerProfileCard
          name={`${info.firstName || ""} ${info.lastName || ""}`}
          role={info.role}
          longBio={info.longBio}
          photoURL="https://www.jeffbullas.com/wp-content/uploads/2019/11/The-Importance-of-URL-Structure-For-SEO-And-How-To-Use-It-768x512.jpg"
          email={info.email}
          showEmail={info.showEmail}
          phone={info.phone}
          showPhone={info.showPhone}
        />
      </Flex>
    </StyledInfo>
  );
};

const StyledInfo = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: ${props => props.theme.space[8]}px;

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
