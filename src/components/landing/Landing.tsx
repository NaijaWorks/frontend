// modules
import React, { useState } from "react";
import { RouteComponentProps } from "react-router";
import { styled } from "../../contexts/ThemeContext";

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
import profile from "../../~reusables/assets/Profile.png";
import FreelancerCard from "../../~reusables/design-system/molecules/FreelancerCard";
import PopupModal from "../../~reusables/design-system/molecules/PopupModal";
import { Input } from "../../~reusables/design-system/atoms/Input/Input";

// styles
import { MAX_PAGE_WIDTH } from "../../~reusables/design-system/globals/metrics";

interface LandingProps extends RouteComponentProps {}

const Landing: React.FC<LandingProps> = () => {
  const [modal, setModal] = useState(false);

  return (
    <>
      {modal && (
        <PopupModal title="Create a new account" setModal={setModal}>
          <Input width="100%" placeholder="Email address" type="text" />
          <Input width="100%" placeholder="Password" type="password" />
          <Flex justifyContent="flex-end">
            <PrimaryButton>Sign up</PrimaryButton>
          </Flex>
        </PopupModal>
      )}
      <StyledTopLanding>
        <Container
          maxWidth={MAX_PAGE_WIDTH}
          margin="0 auto"
          flexDirection="column"
        >
          <NavHeader />
          <Flex
            className="flex-container"
            as="header"
            justifyContent="space-between"
            pt={7}
            pb={9}
          >
            <Box className="box-container">
              <H1 color="lightTitle">
                The talent you need.
                <br /> The flexibility you want.
              </H1>
              <P1 py={7} color="lightText">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore.
              </P1>
              <Flex>
                <PrimaryButton onClick={() => setModal(true)} mr={7}>
                  Become a freelancer
                </PrimaryButton>
                <SecondaryButton>Find talent</SecondaryButton>
              </Flex>
            </Box>
            <Box className="profile box-container">
              <img src={profile} alt="profile" />
            </Box>
          </Flex>
        </Container>
      </StyledTopLanding>
      <StyledBottomLanding>
        <FreelancerCard
          name="Firstname, lastname"
          role="role"
          shortBio="short one line bio"
          photoURL="https://www.jeffbullas.com/wp-content/uploads/2019/11/The-Importance-of-URL-Structure-For-SEO-And-How-To-Use-It-768x512.jpg"
        />
        <FreelancerCard
          name="Firstname, lastname"
          role="role"
          shortBio="short one line bio"
          photoURL="https://www.jeffbullas.com/wp-content/uploads/2019/11/The-Importance-of-URL-Structure-For-SEO-And-How-To-Use-It-768x512.jpg"
        />
        <FreelancerCard
          name="Firstname, lastname"
          role="role"
          shortBio="short one line bio"
          photoURL="https://www.jeffbullas.com/wp-content/uploads/2019/11/The-Importance-of-URL-Structure-For-SEO-And-How-To-Use-It-768x512.jpg"
        />
        <FreelancerCard
          name="Firstname, lastname"
          role="role"
          shortBio="short one line bio"
          photoURL="https://www.jeffbullas.com/wp-content/uploads/2019/11/The-Importance-of-URL-Structure-For-SEO-And-How-To-Use-It-768x512.jpg"
        />
        <FreelancerCard
          name="Firstname, lastname"
          role="role"
          shortBio="short one line bio"
          photoURL="https://www.jeffbullas.com/wp-content/uploads/2019/11/The-Importance-of-URL-Structure-For-SEO-And-How-To-Use-It-768x512.jpg"
        />
        <FreelancerCard
          name="Firstname, lastname"
          role="role"
          shortBio="short one line bio"
          photoURL="https://www.jeffbullas.com/wp-content/uploads/2019/11/The-Importance-of-URL-Structure-For-SEO-And-How-To-Use-It-768x512.jpg"
        />
      </StyledBottomLanding>
    </>
  );
};

const StyledBottomLanding = styled.div`
  margin: 0 auto;
  padding: ${props => props.theme.space[7]}px;
  max-width: ${MAX_PAGE_WIDTH}px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: ${props => props.theme.space[8]}px;
`;

const StyledTopLanding = styled.div`
  margin: 0 auto;
  padding: 0 ${props => props.theme.space[7]}px;
  background: ${props => props.theme.colors.background};
  .box-container button {
    box-shadow: ${props => props.theme.shadows.deepDark};
    -webkit-box-shadow: ${props => props.theme.shadows.deepDark};
    -moz-box-shadow: ${props => props.theme.shadows.deepDark};
  }

  .box-container {
    width: 46%;
  }

  .profile {
    position: relative;
    img {
      width: 100%;
      max-width: 500px;
      min-width: 400px;
      position: absolute;
      right: -180px;
      top: 140px;
      bottom: 0;
      border-radius: ${props => props.theme.radii[2]}px;
      transform: translate(-50%, -50%) rotate3d(0.342, -0.94, 0, 22deg)
        rotateZ(7deg);
      box-shadow: 37.2px 62.5px 125px -25px rgba(50, 50, 93, 0.5),
        22.3px 37.5px 75px -37.5px rgba(0, 0, 0, 0.6);
    }
  }

  @media only screen and (max-width: ${props => props.theme.breakpoints[0]}) {
    .flex-container {
      flex-direction: column;
      .box-container {
        width: 100%;
      }
      .profile.box-container {
        display: none;
      }
    }
  }
`;

export default Landing;
