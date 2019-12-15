// modules
import React from "react";
import { RouteComponentProps } from "react-router";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

// components
import { Container } from "../../~reusables/design-system/atoms/Primitives/Primitives";
import NavHeader from "../../~reusables/design-system/molecules/NavHeader";
import { styled } from "../../contexts/ThemeContext";
import { MAX_PAGE_WIDTH } from "../../~reusables/design-system/globals/metrics";
import FreelancerCard from "../../~reusables/design-system/molecules/FreelancerCard";

export interface UserCards {
  id: string;
  firstName: string;
  lastName: string;
  photoURL: string;
  role: string;
  shortBio: string;
}

export const GET_USER_CARDS = gql`
  query getUserCards {
    users {
      id
      firstName
      lastName
      photoURL
      role
      shortBio
    }
  }
`;

interface DiscoverProps extends RouteComponentProps { }

const Discover: React.FC<DiscoverProps> = () => {
  const { data } = useQuery<{ users: UserCards[] }>(GET_USER_CARDS);

  return (
    <>
      <NavHeader />
      <StyledDiscover>
        {data &&
          data.users.map(
            ({ id, firstName, lastName, role, shortBio, photoURL }) =>
              firstName && lastName && role ? (
                <FreelancerCard
                  id={id}
                  key={id}
                  name={`${firstName || ""} ${lastName || ""}`}
                  role={role}
                  shortBio={shortBio}
                  photoURL={photoURL !== null ? photoURL : "/profile-photo.png"}
                />
              ) : null
          )}
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
