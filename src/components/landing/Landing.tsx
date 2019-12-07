// modules
import React from "react";
import { RouteComponentProps } from "react-router";
import { styled } from "../../contexts/ThemeContext";

// components
import { Container } from "../../~reusables/design-system/atoms/Primitives/Primitives";
import NavHeader from "../../~reusables/design-system/molecules/NavHeader";

// STYLES
import { MAX_PAGE_WIDTH } from "../../~reusables/design-system/globals/metrics";

interface LandingProps extends RouteComponentProps {}

const Landing: React.FC<LandingProps> = () => {
  return (
    <StyledLanding>
      <Container maxWidth={MAX_PAGE_WIDTH} margin="0 auto">
        <NavHeader />
      </Container>
    </StyledLanding>
  );
};

const StyledLanding = styled.div`
  margin: 0 auto;
  background: ${props => props.theme.colors.background};
`;

export default Landing;
