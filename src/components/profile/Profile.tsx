// modules
import React from "react";
import { RouteComponentProps } from "react-router";
import NavHeader from "../../~reusables/design-system/molecules/NavHeader";

// components

interface ProfileProps extends RouteComponentProps {}

const Profile: React.FC<ProfileProps> = () => {
  return (
    <>
      <NavHeader />
    </>
  );
};

export default Profile;
