// modules
import React from "react";
import { RouteComponentProps } from "react-router";
import { styled } from "../../contexts/ThemeContext";
import { Container } from "../../~reusables/design-system/atoms/Primitives/Primitives";

// components
import NavHeader from "../../~reusables/design-system/molecules/NavHeader";
import StatusCircle from "../../~reusables/design-system/elements/StatusCircle";

// styles
import { MAX_PAGE_WIDTH } from "../../~reusables/design-system/globals/metrics";

interface AdminProps extends RouteComponentProps {}

const Admin: React.FC<AdminProps> = () => {
  return (
    <>
      <NavHeader />
      <StyledAdmin margin="0 auto" py={9} px={11} flexDirection="column">
        <div className="status-container">
          <StatusCircle text="Basic info" checked={true} active={true} />
          <StatusCircle text="Skills" checked={true} active={false} />
          <StatusCircle text="Projects" checked={false} active={false} />
        </div>
      </StyledAdmin>
    </>
  );
};

const StyledAdmin = styled(Container)`
  border: 1px solid red;
  .status-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
`;

export default Admin;
