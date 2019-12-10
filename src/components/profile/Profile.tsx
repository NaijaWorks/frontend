// modules
import React, { useState } from "react";
import { RouteComponentProps } from "react-router";

// components
import NavHeader from "../../~reusables/design-system/molecules/NavHeader";
import { styled } from "../../contexts/ThemeContext";
import {
  Container,
  Box
} from "../../~reusables/design-system/atoms/Primitives/Primitives";

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
    description: "Project description 1",
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
  }
];

const Profile: React.FC<ProfileProps> = () => {
  const [projectIndex, setProjectIndex] = useState(0);
  return (
    <>
      <NavHeader />
      <StyledTopProfile>
        <div>
          <Box>
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
          <Box>
            {projects.length > 0 && (
              <ProjectCard
                title={projects[projectIndex].title}
                imageURL={projects[projectIndex].imageURL}
                description={projects[projectIndex].description}
                projectURL={projects[projectIndex].projectURL}
              />
            )}
          </Box>
          <Box>
            SKILLS
          </Box>
        </div>
      </StyledTopProfile>
      <StyledBottomProfile></StyledBottomProfile>
    </>
  );
};

const StyledBottomProfile = styled.div`
  margin: 0 auto;
`;

const StyledTopProfile = styled.div`
  margin: 0 auto;
  padding: 0 ${props => props.theme.space[7]}px;
  background: ${props => props.theme.colors.background};
  height: 40vh;

  & > div {
    maxwidth: ${MAX_PAGE_WIDTH};
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: ${props => props.theme.space[9]}px;
  }
`;

export default Profile;
