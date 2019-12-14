// modules
import React, { useState, useContext } from "react";
import { RouteComponentProps } from "react-router";
import { styled } from "../../contexts/ThemeContext";
import { Container } from "../../~reusables/design-system/atoms/Primitives/Primitives";

// components
import NavHeader from "../../~reusables/design-system/molecules/NavHeader";
import StatusCircle from "../../~reusables/design-system/elements/StatusCircle";
import Info from "./Info";
import Skills from "./Skills";
import Projects from "./Projects";
import { AuthContext } from "../../contexts/AuthContext";
import { ProfileInfo, GET_PROFILE_INFO } from "../profile/Profile";
import { useQuery } from "@apollo/react-hooks";

// styles

interface AdminProps extends RouteComponentProps {}
export enum AdminView {
  INFO = "INFO",
  SKILLS = "SKILLS",
  PROJECTS = "PROJECTS"
}

const Admin: React.FC<AdminProps> = () => {
  const [adminView, setAdminView] = useState<AdminView>(AdminView.INFO);
  const auth = useContext(AuthContext);

  const { data } = useQuery<{ user: ProfileInfo }, { id: string }>(
    GET_PROFILE_INFO,
    {
      variables: { id: auth.id || "" }
    }
  );

  return (
    <>
      <NavHeader />
      <StyledAdmin margin="0 auto" flexDirection="column">
        <div className="status-container">
          <StatusCircle
            callback={() => setAdminView(AdminView.INFO)}
            text="Basic info"
            checked={data && data.user.firstName ? true : false}
            active={adminView === AdminView.INFO ? true : false}
          />
          <StatusCircle
            callback={() => setAdminView(AdminView.SKILLS)}
            text="Skills"
            checked={data && data.user.skills.length > 0 ? true : false}
            active={adminView === AdminView.SKILLS ? true : false}
          />
          <StatusCircle
            callback={() => setAdminView(AdminView.PROJECTS)}
            text="Projects"
            checked={data && data.user.projects.length > 0 ? true : false}
            active={adminView === AdminView.PROJECTS ? true : false}
          />
        </div>
        <div className="admin-container">
          {adminView === AdminView.INFO ? (
            <Info setAdminView={setAdminView} />
          ) : adminView === AdminView.SKILLS ? (
            <Skills setAdminView={setAdminView} />
          ) : adminView === AdminView.PROJECTS ? (
            <Projects />
          ) : null}
        </div>
      </StyledAdmin>
    </>
  );
};

const StyledAdmin = styled(Container)`
  padding: ${props => props.theme.space[8]}px
    ${props => props.theme.space[11]}px;

  .status-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }

  .admin-container {
    margin: ${props => props.theme.space[6]}px 0;
  }

  @media only screen and (max-width: ${props => props.theme.breakpoints[0]}) {
    padding: ${props => props.theme.space[6]}px;
  }
`;

export default Admin;
