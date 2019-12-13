// modules
import React, { useState, useContext } from "react";
import { gql } from "apollo-boost";

// components
import { styled } from "../../contexts/ThemeContext";
import { Flex } from "../../~reusables/design-system/atoms/Primitives/Primitives";
import { Input } from "../../~reusables/design-system/atoms/Input/Input";
import {
  TextButton,
  PrimaryButton,
  SecondaryButton
} from "../../~reusables/design-system/atoms/Button/Button";
import { AuthContext } from "../../contexts/AuthContext";
import { useMutation, useQuery } from "@apollo/react-hooks";
import { H4 } from "../../~reusables/design-system/atoms/Text/Text";

const initialSkillState = {
  id: "",
  name: "",
  logo: ""
};

interface SkillData {
  id: string;
  name: string;
  logo: string;
}

// mutation
const ADD_SKILL = gql`
  mutation addSkill($name: String!, $logo: String, $userId: ID!) {
    addSkill(name: $name, logo: $logo, userId: $userId) {
      id
      name
      logo
    }
  }
`;

// query
const SKILLS = gql`
  query skills($id: ID!) {
    user(id: $id) {
      id
      skills {
        id
        name
        logo
      }
    }
  }
`;

const Skills = () => {
  const [skill, setSkill] = useState(initialSkillState);
  const auth = useContext(AuthContext);

  const [addSkill] = useMutation<{ addSkill: SkillData }>(ADD_SKILL, {
    variables: { ...skill, userId: auth.id ? auth.id : "" }
  });

  const { data, refetch } = useQuery<
    { user: { skills: SkillData[] } },
    { id: string }
  >(SKILLS, {
    variables: { id: auth.id ? auth.id : "" }
  });

  const onFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // call add project or update project, catching both errors if needs be
    try {
      if (skill.id) {
      } else {
        await addSkill();
        refetch();
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <StyledSkills>
      <form onSubmit={onFormSubmit}>
        <Input
          value={skill.name}
          onChange={e => setSkill({ ...skill, name: e.target.value })}
          placeholder="Skill name"
          type="text"
          width="100%"
          required
        />
        <Flex justifyContent="space-evenly" width="100%">
          {skill.id && <TextButton>Delete skill</TextButton>}
          <PrimaryButton className="primary-btn">
            {skill.id ? "Update skill" : "Save skill"}
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
            data.user.skills.map(skill => (
              <li key={skill.id} onClick={() => setSkill(skill)}>
                <H4 color="text">{skill.name}</H4>
              </li>
            ))}
        </ol>
        <SecondaryButton onClick={() => setSkill(initialSkillState)}>
          Add new project
        </SecondaryButton>
      </Flex>
    </StyledSkills>
  );
};

const StyledSkills = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: ${props => props.theme.space[7]}px;

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

export default Skills;
