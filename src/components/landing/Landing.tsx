// modules
import React from "react";
import { RouteComponentProps } from "react-router";
import { styled } from "../../contexts/ThemeContext";
import { css } from "styled-components/macro";

// components
import {
  Container,
  Flex,
  Box
} from "../../~reusables/design-system/atoms/Primitives/Primitives";
import NavHeader from "../../~reusables/design-system/molecules/NavHeader";
import { H1, P1 } from "../../~reusables/design-system/atoms/Text/Text";
import {
  PrimaryButton,
  SecondaryButton
} from "../../~reusables/design-system/atoms/Button/Button";

// STYLES
import { MAX_PAGE_WIDTH } from "../../~reusables/design-system/globals/metrics";

interface LandingProps extends RouteComponentProps {}

const Landing: React.FC<LandingProps> = () => {
  return (
    <StyledLanding>
      <Container
        maxWidth={MAX_PAGE_WIDTH}
        margin="0 auto"
        flexDirection="column"
      >
        <NavHeader />
        <Flex as="header" justifyContent="space-between" pt={7} pb={9}>
          <Box width="46%">
            <H1 color="lightTitle">
              The talent you need.
              <br /> The flexibility you want.
            </H1>
            <P1 py={7} color="lightText">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore.
            </P1>
            <Flex>
              <PrimaryButton mr={7}>Become a freelancer</PrimaryButton>
              <SecondaryButton>Find talent</SecondaryButton>
            </Flex>
          </Box>
          <Box width="46%">HI</Box>
        </Flex>
      </Container>
    </StyledLanding>
  );
};

const StyledLanding = styled.div`
  margin: 0 auto;
  background: ${props => props.theme.colors.background};
  button {
    box-shadow: ${props => props.theme.shadows.deepDark};
    -webkit-box-shadow: ${props => props.theme.shadows.deepDark};
    -moz-box-shadow: ${props => props.theme.shadows.deepDark};
  }
`;

export default Landing;
