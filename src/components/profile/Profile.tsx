// modules
import React, { useState, useContext } from "react";
import { RouteComponentProps } from "react-router";
import { ChevronRight, ChevronLeft } from "react-feather";
import GoogleMapReact from "google-map-react";
import { gql } from "apollo-boost";

// components
import NavHeader from "../../~reusables/design-system/molecules/NavHeader";
import { styled } from "../../contexts/ThemeContext";
import { Box } from "../../~reusables/design-system/atoms/Primitives/Primitives";

// styles
import { MAX_PAGE_WIDTH } from "../../~reusables/design-system/globals/metrics";
import FreelancerProfileCard from "../../~reusables/design-system/molecules/FreelancerProfileCard";
import ProjectCard from "../../~reusables/design-system/molecules/ProjectCard";
import { ProjectData } from "../admin/Projects";
import { SkillData } from "../admin/Skills";
import { AuthContext } from "../../contexts/AuthContext";
import { useQuery } from "@apollo/react-hooks";
import { H4 } from "../../~reusables/design-system/atoms/Text/Text";

interface ProfileProps extends RouteComponentProps {}

export interface ProfileInfo {
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
  projects: ProjectData[];
  skills: SkillData[];
}

// query
export const GET_PROFILE_INFO = gql`
  query getProfileInfo($id: ID!) {
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
      projects {
        id
        title
        imageURL
        description
        projectURL
      }
      skills {
        id
        name
        logo
      }
    }
  }
`;

const Profile: React.FC<ProfileProps> = props => {
  const [projectIndex, setProjectIndex] = useState(0);
  const auth = useContext(AuthContext);

  const { data } = useQuery<{ user: ProfileInfo }, { id: string }>(
    GET_PROFILE_INFO,
    {
      variables: { id: auth.id || "" }
    }
  );

  const onClickArrow = (direction: string) => {
    if (data && data.user && data.user.projects.length > 0) {
      switch (direction) {
        case "left":
          setProjectIndex(
            projectIndex !== 0
              ? projectIndex - 1
              : data.user.projects.length - 1
          );
          break;
        case "right":
          setProjectIndex(
            projectIndex !== data.user.projects.length - 1
              ? projectIndex + 1
              : 0
          );
          break;
        default:
      }
    }
  };

  return (
    <>
      <NavHeader />
      <StyledTopProfile>
        <div>
          <Box className="profile-card-container">
            {data && data.user && (
              <FreelancerProfileCard
                name={`${data.user.firstName} ${data.user.lastName}`}
                role={data.user.role}
                longBio={data.user.longBio}
                photoURL={data.user.photoURL}
                email={data.user.email}
                showEmail={data.user.showEmail}
                phone={data.user.phone}
                showPhone={data.user.showPhone}
              />
            )}
          </Box>
          <Box className="middle-box">
            {data && data.user && data.user.projects.length > 1 && (
              <Box
                className="left box"
                bg="white"
                borderRadius={5}
                width="24px"
                onClick={() => onClickArrow("left")}
              >
                <ChevronLeft />
              </Box>
            )}
            {data && data.user && data.user.projects.length > 0 && (
              <ProjectCard
                title={data.user.projects[projectIndex].title}
                imageURL={data.user.projects[projectIndex].imageURL || ""}
                description={data.user.projects[projectIndex].description}
                projectURL={data.user.projects[projectIndex].projectURL || ""}
              />
            )}
            {data && data.user && data.user.projects.length > 1 && (
              <Box
                className="right box"
                bg="white"
                borderRadius={5}
                width="24px"
                onClick={() => onClickArrow("right")}
              >
                <ChevronRight />
              </Box>
            )}
          </Box>
          {data && data.user && data.user.skills.length > 0 && (
            <Box className="skills-card">
              <ol>
                {data.user.skills.map(skill => (
                  <li key={skill.id}>
                    <H4 color="text">{skill.name}</H4>
                  </li>
                ))}
              </ol>
            </Box>
          )}
        </div>
      </StyledTopProfile>
      <StyledBottomProfile>
        <GoogleMapReact
          bootstrapURLKeys={{
            key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY as string
          }}
          defaultCenter={{
            lat: 11.082,
            lng: 7.6753
          }}
          defaultZoom={7}
        ></GoogleMapReact>
      </StyledBottomProfile>
    </>
  );
};

const StyledBottomProfile = styled.div`
  margin: 0 auto;
  height: 100vh;
  width: 100%;
  z-index: -1;
`;

const StyledTopProfile = styled.div`
  margin: 0 auto;
  padding: 0 ${props => props.theme.space[7]}px;
  background: ${props => props.theme.colors.background};
  height: 40vh;
  position: absolute;
  z-index: 1000;
  width: 100%;
  box-sizing: border-box;

  .skills-card {
    box-shadow: ${props => props.theme.shadows.shallow};
    -webkit-box-shadow: ${props => props.theme.shadows.shallow};
    -moz-box-shadow: ${props => props.theme.shadows.shallow};
    border-radius: ${props => props.theme.radii[2]}px;
    background: ${props => props.theme.colors.white};
  }

  .middle-box {
    position: relative;
    height: inherit;

    .box {
      cursor: pointer;
      box-shadow: ${props => props.theme.shadows.shallow};
      -webkit-box-shadow: ${props => props.theme.shadows.shallow};
      -moz-box-shadow: ${props => props.theme.shadows.shallow};

      &: hover {
        box-shadow: ${props => props.theme.shadows.deepDark};
        -webkit-box-shadow: ${props => props.theme.shadows.deepDark};
        -moz-box-shadow: ${props => props.theme.shadows.deepDark};
      }
    }

    .box.left {
      position: absolute;
      left: -${props => props.theme.space[6]}px;
      top: 47%;
    }

    .box.right {
      position: absolute;
      right: -${props => props.theme.space[6]}px;
      top: 47%;
    }
  }

  ol {
    padding: ${props => props.theme.space[6]}px;
  }

  & > div {
    max-width: ${MAX_PAGE_WIDTH}px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    grid-template-rows: auto;
    align-items: start;
    gap: ${props => props.theme.space[9]}px;
  }
`;

export default Profile;
