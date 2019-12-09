// modules
import React, { useState } from "react";

// components
import { styled } from "../../contexts/ThemeContext";
import {
  Flex,
  Container
} from "../../~reusables/design-system/atoms/Primitives/Primitives";
import { Input } from "../../~reusables/design-system/atoms/Input/Input";
import { H4 } from "../../~reusables/design-system/atoms/Text/Text";
import {
  PrimaryButton,
  TextButton,
  SecondaryButton
} from "../../~reusables/design-system/atoms/Button/Button";

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

const Projects = () => {
  const [project, setProject] = useState({
    title: "",
    imageURL: "",
    description: "",
    projectURL: "",
    userID: ""
  });

  return (
    <StyledProjects>
      <Flex flexDirection="column" justifyContent="center" alignItems="center">
        <Container
          boxShadow="deep"
          borderRadius={2}
          width="100%"
          height="180px"
          mb={7}
        >
          <img
            src="https://www.jeffbullas.com/wp-content/uploads/2019/11/The-Importance-of-URL-Structure-For-SEO-And-How-To-Use-It-768x512.jpg"
            alt={`Names's profile`}
          />
        </Container>
        <Input
          value={project.title}
          onChange={e => setProject({ ...project, title: e.target.value })}
          placeholder="Title"
          type="text"
          width="100%"
        />
        <Input
          value={project.description}
          onChange={e =>
            setProject({ ...project, description: e.target.value })
          }
          placeholder="Description"
          type="text"
          width="100%"
        />
        <Input
          value={project.projectURL}
          onChange={e => setProject({ ...project, projectURL: e.target.value })}
          placeholder="Project URL"
          type="text"
          width="100%"
        />
        <Flex justifyContent="space-evenly" width="100%">
          {project.userID && <TextButton>Delete project</TextButton>}
          <PrimaryButton className="primary-btn">
            {project.userID ? "Update project" : "Save project"}
          </PrimaryButton>
        </Flex>
      </Flex>
      <Flex
        flexDirection="column"
        justifyContent="flex-start"
        alignItems="center"
      >
        <ol>
          {projects.map(project => (
            <li key={project.title} onClick={() => setProject(project)}>
              <H4 color="text">{project.title}</H4>
            </li>
          ))}
        </ol>
        <SecondaryButton>Add new project</SecondaryButton>
      </Flex>
    </StyledProjects>
  );
};

const StyledProjects = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: ${props => props.theme.space[7]}px;

  .primary-btn {
    align-self: flex-end;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: inherit;
  }

  input {
    box-shadow: ${props => props.theme.shadows.shallow};
    -webkit-box-shadow: ${props => props.theme.shadows.shallow};
    -moz-box-shadow: ${props => props.theme.shadows.shallow};
    border: 0;
    background: ${props => props.theme.colors.white};
  }

  ol {
    list-style-type: square;

    h4 {
      margin-bottom: ${props => props.theme.space[7]}px;

      &:hover {
        cursor: pointer;
        color: ${props => props.theme.colors.primary};
      }
    }
  }
`;

export default Projects;
