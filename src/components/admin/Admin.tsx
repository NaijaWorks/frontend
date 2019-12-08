// modules
import React, { useState } from "react";
import { RouteComponentProps } from "react-router";
import { styled } from "../../contexts/ThemeContext";
import { Container } from "../../~reusables/design-system/atoms/Primitives/Primitives";

// components
import NavHeader from "../../~reusables/design-system/molecules/NavHeader";
import StatusCircle from "../../~reusables/design-system/elements/StatusCircle";

// styles

interface AdminProps extends RouteComponentProps {}
enum AdminView {
  INFO = "INFO",
  SKILLS = "SKILLS",
  PROJECTS = "PROJECTS"
}

const Admin: React.FC<AdminProps> = () => {
  const [adminView, setAdminView] = useState<AdminView>(AdminView.INFO);

  return (
    <>
      <NavHeader />
      <StyledAdmin margin="0 auto" flexDirection="column">
        <div className="status-container">
          <StatusCircle
            callback={() => setAdminView(AdminView.INFO)}
            text="Basic info"
            checked={adminView === AdminView.INFO ? true : false}
            active={adminView === AdminView.INFO ? true : false}
          />
          <StatusCircle
            callback={() => setAdminView(AdminView.SKILLS)}
            text="Skills"
            checked={adminView === AdminView.SKILLS ? true : false}
            active={adminView === AdminView.SKILLS ? true : false}
          />
          <StatusCircle
            callback={() => setAdminView(AdminView.PROJECTS)}
            text="Projects"
            checked={adminView === AdminView.PROJECTS ? true : false}
            active={adminView === AdminView.PROJECTS ? true : false}
          />
        </div>
      </StyledAdmin>
    </>
  );
};

const StyledAdmin = styled(Container)`
  border: 1px solid red;
  padding: ${props => props.theme.space[8]}px
    ${props => props.theme.space[11]}px;
  .status-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }

  @media only screen and (max-width: ${props => props.theme.breakpoints[0]}) {
    padding: ${props => props.theme.space[6]}px;
  }
`;

export default Admin;
