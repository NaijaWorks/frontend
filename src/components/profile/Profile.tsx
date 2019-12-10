// modules
import React, { useState } from "react";
import { RouteComponentProps } from "react-router";
import { ChevronRight, ChevronLeft } from "react-feather";
import GoogleMapReact from "google-map-react";

// components
import NavHeader from "../../~reusables/design-system/molecules/NavHeader";
import { styled } from "../../contexts/ThemeContext";
import { Box } from "../../~reusables/design-system/atoms/Primitives/Primitives";

// styles
import { MAX_PAGE_WIDTH } from "../../~reusables/design-system/globals/metrics";
import FreelancerProfileCard from "../../~reusables/design-system/molecules/FreelancerProfileCard";
import ProjectCard from "../../~reusables/design-system/molecules/ProjectCard";

interface ProfileProps extends RouteComponentProps {}

const projects = [
  {
    title: "Project title 1",
    imageURL:
      "https://www.jeffbullas.com/wp-content/uploads/2019/11/The-Importance-of-URL-Structure-For-SEO-And-How-To-Use-It-768x512.jpg",
    description:
      "Project description 1 Project description 1 Project description 1 Project description 1",
    projectURL:
      "https://www.jeffbullas.com/wp-content/uploads/2019/11/The-Importance-of-URL-Structure-For-SEO-And-How-To-Use-It-768x512.jpg",
    userID: "98498"
  },
  {
    title: "Project title 2",
    imageURL:
      "https://www.jeffbullas.com/wp-content/uploads/2019/11/The-Importance-of-URL-Structure-For-SEO-And-How-To-Use-It-768x512.jpg",
    description: "Project description 2",
    projectURL:
      "https://www.jeffbullas.com/wp-content/uploads/2019/11/The-Importance-of-URL-Structure-For-SEO-And-How-To-Use-It-768x512.jpg",
    userID: "98498"
  },
  {
    title: "Project title 3",
    imageURL:
      "https://www.jeffbullas.com/wp-content/uploads/2019/11/The-Importance-of-URL-Structure-For-SEO-And-How-To-Use-It-768x512.jpg",
    description: "Project description 3",
    projectURL:
      "https://www.jeffbullas.com/wp-content/uploads/2019/11/The-Importance-of-URL-Structure-For-SEO-And-How-To-Use-It-768x512.jpg",
    userID: "98498"
  }
];

const Profile: React.FC<ProfileProps> = props => {
  const [projectIndex, setProjectIndex] = useState(0);

  const onClickArrow = (direction: string) => {
    switch (direction) {
      case "left":
        setProjectIndex(
          projectIndex !== 0 ? projectIndex - 1 : projects.length - 1
        );
        break;
      case "right":
        setProjectIndex(
          projectIndex !== projects.length - 1 ? projectIndex + 1 : 0
        );
        break;
      default:
    }
  };

  return (
    <>
      <NavHeader />
      <StyledTopProfile>
        <div>
          <Box className="profile-card-container">
            <FreelancerProfileCard
              name="Taiye Adeleke"
              role="Developer"
              longBio="Front-end developer with experience in modern technologies such as React and Apollo Graphql. "
              photoURL="https://www.jeffbullas.com/wp-content/uploads/2019/11/The-Importance-of-URL-Structure-For-SEO-And-How-To-Use-It-768x512.jpg"
              email="isaacaderogba1@gmail.com"
              showEmail={true}
              phoneNumber="0861241218"
              showPhoneNumber={false}
            />
          </Box>
          <Box className="middle-box">
            {projects.length > 1 && (
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
            {projects.length > 0 && (
              <ProjectCard
                title={projects[projectIndex].title}
                imageURL={projects[projectIndex].imageURL}
                description={projects[projectIndex].description}
                projectURL={projects[projectIndex].projectURL}
              />
            )}
            {projects.length > 1 && (
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
          <Box>SKILLS</Box>
        </div>
      </StyledTopProfile>
      <StyledBottomProfile>
        {/* <Map
          style={{ width: "100%", height: "inherit", position: "static" }}
          google={props.google}
          zoom={14}
        >
          <Marker
            title="The title attribute"
            name="The name attribute"
            position={{ lat: 37.759703, lng: -122.428093 }}
          />
        </Map> */}
        <GoogleMapReact
          bootstrapURLKeys={{
            key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY as string
          }}
          defaultCenter={{
            lat: 59.95,
            lng: 30.33
          }}
          defaultZoom={11}
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

  & > div {
    maxwidth: ${MAX_PAGE_WIDTH};
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    grid-template-rows: auto;
    align-items: start;
    gap: ${props => props.theme.space[9]}px;
  }
`;

export default Profile
