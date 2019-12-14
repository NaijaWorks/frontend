// modules
import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import { useQuery, useMutation } from "@apollo/react-hooks";
import { Upload } from "react-feather";
import { gql } from "apollo-boost";

// components
import { styled } from "../../contexts/ThemeContext";
import {
  Flex,
  Box,
  Container
} from "../../~reusables/design-system/atoms/Primitives/Primitives";
import { Input } from "../../~reusables/design-system/atoms/Input/Input";
import { PrimaryButton, TextButton } from "../../~reusables/design-system/atoms/Button/Button";
import Checkbox from "../../~reusables/design-system/atoms/Checkbox/Checkbox";
import FreelancerCard from "../../~reusables/design-system/molecules/FreelancerCard";
import FreelancerProfileCard from "../../~reusables/design-system/molecules/FreelancerProfileCard";
import { AuthContext } from "../../contexts/AuthContext";
import { AdminView } from "./Admin";

// query
export interface UserInfo {
  id?: string;
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

interface OwnProps {
  setAdminView: React.Dispatch<React.SetStateAction<AdminView>>
}

const Info:React.FC<OwnProps> = ({setAdminView}) => {
  const auth = useContext(AuthContext);
  const [info, setInfo] = useState({
    photoURL: "https://via.placeholder.com/600",
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
        ...info
      }
    }
  );

  useEffect(() => {
    if (data && data.user) setInfo(data.user);
  }, [data]);

  // api/v1/upload
  const onChangePhoto = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    // TODO - add validation checks
    if (file) {
      const formData = new FormData();
      formData.append("image", file);
      const res = await axios.post<{ message: string; image: string }>(
        `${process.env.REACT_APP_API_URL}/api/v1/upload`,
        formData
      );

      setInfo({ ...info, photoURL: res.data.image });
      updateUserInfo({ variables: { ...info, photoURL: res.data.image } });
    }
  };

  const onClickUpdate = () => {
    try {
      updateUserInfo();
    } catch (err) {
      console.log(err);
    }
  };


  return (
    <StyledInfo>
      <Flex flexDirection="column" justifyContent="center" alignItems="center">
        <input
          onChange={onChangePhoto}
          id="single"
          name="file"
          type="file"
          data-cloudinary-field="image_id"
          data-form-data="{ 'transformation': {'crop':'limit','tags':'photo','width':200,'height':200}}"
        />
        <label htmlFor="single">
          <Container
            boxShadow="deep"
            borderRadius={5}
            width="120px"
            height="120px"
            position="relative"
          >
            <Upload className="upload" width={32} height={32} color="white" />
            <img
              src={info.photoURL || "https://via.placeholder.com/600"}
              alt={`${info.firstName || ""} ${info.lastName || ""}`}
            />
          </Container>
        </label>
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
        <TextButton onClick={() => setAdminView(AdminView.SKILLS)}>
          Next
        </TextButton>
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
          photoURL={info.photoURL}
        />
        <Box p={7} />
        <FreelancerProfileCard
          name={`${info.firstName || ""} ${info.lastName || ""}`}
          role={info.role}
          longBio={info.longBio}
          photoURL={info.photoURL}
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

  input#single {
    display: none;
  }

  .upload {
    position: absolute;
    left: 50%;
    margin-left: -16px;
    top: 50%;
    margin-top: -16px;
    cursor: pointer;
  }

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

  button:first-of-type {
    box-shadow: ${props => props.theme.shadows.deep};
    -webkit-box-shadow: ${props => props.theme.shadows.deep};
    -moz-box-shadow: ${props => props.theme.shadows.deep};
    margin-bottom: ${props => props.theme.space[6]}px;
  }
`;

export default Info;
