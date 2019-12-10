// modules
import React from "react";
import { RouteComponentProps } from "react-router";

// components
import { Container } from "../../~reusables/design-system/atoms/Primitives/Primitives";
import NavHeader from "../../~reusables/design-system/molecules/NavHeader";
import { styled } from "../../contexts/ThemeContext";
import { MAX_PAGE_WIDTH } from "../../~reusables/design-system/globals/metrics";
import FreelancerCard from "../../~reusables/design-system/molecules/FreelancerCard";

interface DiscoverProps extends RouteComponentProps {}

const discoverData = [
  {
    name: "Firstname, Lastname",
    role: "Role",
    shortBio: "Short one-line bio",
    photoURL:
      "https://www.jeffbullas.com/wp-content/uploads/2019/11/The-Importance-of-URL-Structure-For-SEO-And-How-To-Use-It-768x512.jpg"
  },
  {
    name: "Firstname, Lastname",
    role: "Role",
    shortBio: "Short one-line bio",
    photoURL:
      "https://www.jeffbullas.com/wp-content/uploads/2019/11/The-Importance-of-URL-Structure-For-SEO-And-How-To-Use-It-768x512.jpg"
  },
  {
    name: "Firstname, Lastname",
    role: "Role",
    shortBio: "Short one-line bio",
    photoURL:
      "https://www.jeffbullas.com/wp-content/uploads/2019/11/The-Importance-of-URL-Structure-For-SEO-And-How-To-Use-It-768x512.jpg"
  },
  {
    name: "Firstname, Lastname",
    role: "Role",
    shortBio: "Short one-line bio",
    photoURL:
      "https://www.jeffbullas.com/wp-content/uploads/2019/11/The-Importance-of-URL-Structure-For-SEO-And-How-To-Use-It-768x512.jpg"
  },
  {
    name: "Firstname, Lastname",
    role: "Role",
    shortBio: "Short one-line bio",
    photoURL:
      "https://www.jeffbullas.com/wp-content/uploads/2019/11/The-Importance-of-URL-Structure-For-SEO-And-How-To-Use-It-768x512.jpg"
  },
  {
    name: "Firstname, Lastname",
    role: "Role",
    shortBio: "Short one-line bio",
    photoURL:
      "https://www.jeffbullas.com/wp-content/uploads/2019/11/The-Importance-of-URL-Structure-For-SEO-And-How-To-Use-It-768x512.jpg"
  },
  {
    name: "Firstname, Lastname",
    role: "Role",
    shortBio: "Short one-line bio",
    photoURL:
      "https://www.jeffbullas.com/wp-content/uploads/2019/11/The-Importance-of-URL-Structure-For-SEO-And-How-To-Use-It-768x512.jpg"
  },
  {
    name: "Firstname, Lastname",
    role: "Role",
    shortBio: "Short one-line bio",
    photoURL:
      "https://www.jeffbullas.com/wp-content/uploads/2019/11/The-Importance-of-URL-Structure-For-SEO-And-How-To-Use-It-768x512.jpg"
  },
  {
    name: "Firstname, Lastname",
    role: "Role",
    shortBio: "Short one-line bio",
    photoURL:
      "https://www.jeffbullas.com/wp-content/uploads/2019/11/The-Importance-of-URL-Structure-For-SEO-And-How-To-Use-It-768x512.jpg"
  },
  {
    name: "Firstname, Lastname",
    role: "Role",
    shortBio: "Short one-line bio",
    photoURL:
      "https://www.jeffbullas.com/wp-content/uploads/2019/11/The-Importance-of-URL-Structure-For-SEO-And-How-To-Use-It-768x512.jpg"
  },
  {
    name: "Firstname, Lastname",
    role: "Role",
    shortBio: "Short one-line bio",
    photoURL:
      "https://www.jeffbullas.com/wp-content/uploads/2019/11/The-Importance-of-URL-Structure-For-SEO-And-How-To-Use-It-768x512.jpg"
  },
  {
    name: "Firstname, Lastname",
    role: "Role",
    shortBio: "Short one-line bio",
    photoURL:
      "https://www.jeffbullas.com/wp-content/uploads/2019/11/The-Importance-of-URL-Structure-For-SEO-And-How-To-Use-It-768x512.jpg"
  },
  {
    name: "Firstname, Lastname",
    role: "Role",
    shortBio: "Short one-line bio",
    photoURL:
      "https://www.jeffbullas.com/wp-content/uploads/2019/11/The-Importance-of-URL-Structure-For-SEO-And-How-To-Use-It-768x512.jpg"
  },
  {
    name: "Firstname, Lastname",
    role: "Role",
    shortBio: "Short one-line bio",
    photoURL:
      "https://www.jeffbullas.com/wp-content/uploads/2019/11/The-Importance-of-URL-Structure-For-SEO-And-How-To-Use-It-768x512.jpg"
  },
  {
    name: "Firstname, Lastname",
    role: "Role",
    shortBio: "Short one-line bio",
    photoURL:
      "https://www.jeffbullas.com/wp-content/uploads/2019/11/The-Importance-of-URL-Structure-For-SEO-And-How-To-Use-It-768x512.jpg"
  },
  {
    name: "Firstname, Lastname",
    role: "Role",
    shortBio: "Short one-line bio",
    photoURL:
      "https://www.jeffbullas.com/wp-content/uploads/2019/11/The-Importance-of-URL-Structure-For-SEO-And-How-To-Use-It-768x512.jpg"
  },
  {
    name: "Firstname, Lastname",
    role: "Role",
    shortBio: "Short one-line bio",
    photoURL:
      "https://www.jeffbullas.com/wp-content/uploads/2019/11/The-Importance-of-URL-Structure-For-SEO-And-How-To-Use-It-768x512.jpg"
  },
  {
    name: "Firstname, Lastname",
    role: "Role",
    shortBio: "Short one-line bio",
    photoURL:
      "https://www.jeffbullas.com/wp-content/uploads/2019/11/The-Importance-of-URL-Structure-For-SEO-And-How-To-Use-It-768x512.jpg"
  }
];

const Discover: React.FC<DiscoverProps> = () => {
  return (
    <>
      <NavHeader />
      <StyledDiscover>
        {discoverData.map(({ name, role, shortBio, photoURL }) => (
          <FreelancerCard
            key={name}
            name={name}
            role={role}
            shortBio={shortBio}
            photoURL={photoURL}
          />
        ))}
      </StyledDiscover>
    </>
  );
};

const StyledDiscover = styled(Container)`
  margin: 0 auto;
  padding: ${props => props.theme.space[7]}px;
  max-width: ${MAX_PAGE_WIDTH}px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: ${props => props.theme.space[8]}px;
`;

export default Discover;
