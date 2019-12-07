// modules
import React from "react";
import { Container } from "../../~reusables/design-system/atoms/Primitives/Primitives";
import { RouteComponentProps } from "react-router";

interface LandingProps extends RouteComponentProps {}

const Landing: React.FC<LandingProps> = () => {
  return <Container>Landing</Container>;
};

export default Landing;
