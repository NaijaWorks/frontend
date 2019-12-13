// modules
import React, { useState, useContext } from "react";
import { gql } from "apollo-boost";
import { useMutation, useQuery } from "@apollo/react-hooks";

// components
import { styled } from "../../contexts/ThemeContext";
import {
  Flex,
  Container,
  Box
} from "../../~reusables/design-system/atoms/Primitives/Primitives";
import { Input } from "../../~reusables/design-system/atoms/Input/Input";
import { H4 } from "../../~reusables/design-system/atoms/Text/Text";
import {
  PrimaryButton,
  TextButton,
  SecondaryButton
} from "../../~reusables/design-system/atoms/Button/Button";
import ProjectCard from "../../~reusables/design-system/molecules/ProjectCard";
import { AuthContext } from "../../contexts/AuthContext";

const initialProjectState = {
  id: "",
  title: "",
  imageURL: "https://via.placeholder.com/600",
  description: "",
  projectURL: ""
};

export interface ProjectData {
  id: string;
  title: string;
  imageURL: string | null;
  description: string;
  projectURL: string | null;
}

// mutation
const ADD_PROJECT = gql`
  mutation addProject(
    $title: String!
    $imageURL: String
    $description: String!
    $projectURL: String
    $userId: ID!
  ) {
    addProject(
      title: $title
      imageURL: $imageURL
      description: $description
      projectURL: $projectURL
      userId: $userId
    ) {
      id
      title
      imageURL
      description
      projectURL
    }
  }
`;

// query
const PROJECTS = gql`
  query projects($id: ID!) {
    user(id: $id) {
      id
      projects {
        id
        title
        imageURL
        description
        projectURL
      }
    }
  }
`;

const Projects = () => {
  const [project, setProject] = useState<ProjectData>(initialProjectState);
  const auth = useContext(AuthContext);
  const [addProject] = useMutation<{ addProject: ProjectData }>(ADD_PROJECT, {
    variables: { ...project, userId: auth.id ? auth.id : "" }
  });

  const { data, refetch } = useQuery<
    { user: { projects: ProjectData[] } },
    { id: string }
  >(PROJECTS, {
    variables: { id: auth.id ? auth.id : "" }
  });

  const onFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // call add project or update project, catching both errors if needs be
    try {
      if (project.id) {
      } else {
        await addProject();
        refetch();
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <StyledProjects>
      <form onSubmit={onFormSubmit}>
        <Container
          boxShadow="deep"
          borderRadius={2}
          width="100%"
          height="180px"
          mb={7}
        >
          <img
            src="https://via.placeholder.com/600"
            alt={`Names's profile`}
          />
        </Container>
        <Input
          value={project.title}
          onChange={e => setProject({ ...project, title: e.target.value })}
          placeholder="Title"
          type="text"
          width="100%"
          required
        />
        <Input
          value={project.description}
          onChange={e =>
            setProject({ ...project, description: e.target.value })
          }
          placeholder="Description"
          type="text"
          width="100%"
          required
        />
        <Input
          value={project.projectURL || ""}
          onChange={e => setProject({ ...project, projectURL: e.target.value })}
          placeholder="Project URL"
          type="text"
          width="100%"
        />
        <Flex justifyContent="space-evenly" width="100%">
          {project.id && <TextButton>Delete project</TextButton>}
          <PrimaryButton className="primary-btn">
            {project.id ? "Update project" : "Save project"}
          </PrimaryButton>
        </Flex>
      </form>
      <Flex
        flexDirection="column"
        justifyContent="flex-start"
        alignItems="center"
      >
        <ol>
          {data &&
            data.user &&
            data.user.projects.map(project => (
              <li key={project.id} onClick={() => setProject(project)}>
                <H4 color="text">{project.title}</H4>
              </li>
            ))}
        </ol>
        <SecondaryButton onClick={() => setProject(initialProjectState)}>
          Add new project
        </SecondaryButton>
        <Box p={7} />
        {project.title && (
          <ProjectCard
            title={project.title}
            imageURL={project.imageURL || ""}
            description={project.description}
            projectURL={project.projectURL || ""}
          />
        )}
      </Flex>
    </StyledProjects>
  );
};

const StyledProjects = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: ${props => props.theme.space[7]}px;

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

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
