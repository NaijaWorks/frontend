// modules
import React from "react";
import { styled } from "../../../contexts/ThemeContext";
import { Check } from "react-feather";

// components
import { Container } from "../atoms/Primitives/Primitives";
import { P2 } from "../atoms/Text/Text";

interface StatusCircleProps {
  checked: boolean;
  active: boolean;
  text: string;
  callback?: () => void;
}

const StatusCircle: React.FC<StatusCircleProps> = ({
  checked,
  text,
  active,
  callback
}) => {
  return (
    <StyledStatusCircle onClick={callback}>
      <Container
        justifyContent="center"
        alignItems="center"
        borderRadius={5}
        border={active ? "2px solid" : "1px solid"}
        p={4}
        color={checked ? "primary" : "greys.6"}
        borderColor={checked ? "primary" : "greys.6"}
        fontWeight={active ? 7 : 3}
      >
        <Check />
      </Container>
      <P2
        fontWeight={active ? 5 : 3}
        p={6}
        color={active ? "primary" : "greys.6"}
      >
        {text}
      </P2>
    </StyledStatusCircle>
  );
};

const StyledStatusCircle = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default StatusCircle;
