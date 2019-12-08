import { styled } from "../../../../contexts/ThemeContext";

export const Button = styled("button")`
  font-size: ${props => props.theme.fontSizes[3]};
  padding: ${props => `${props.theme.space[5]}px ${props.theme.space[7]}px`};
  font-weight: 500;
  min-width: "140px";
  height: 40px;
  border: none;
  outline: none;
  border-radius: ${props => props.theme.radii[2]}px;
  box-shadow: ${props => props.theme.shadows.shallow};
  -webkit-box-shadow: ${props => props.theme.shadows.shallow};
  -moz-box-shadow: ${props => props.theme.shadows.shallow};
  transition: all 100ms ease-in-out;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }

  &:active {
    opacity: 0.8;
    box-shadow: 0 6px 10px 0 rgba(40, 51, 63, 0.11);
    -webkit-box-shadow: 0 6px 10px 0 rgba(40, 51, 63, 0.11);
    -moz-box-shadow: 0 6px 10px 0 rgba(40, 51, 63, 0.11);
  }
`;

export const PrimaryButton = styled(Button)`
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.white};
`;

export const SecondaryButton = styled(Button)`
  background-color: ${props => props.theme.colors.white};
  border: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.primary};
`;

export const TextButton = styled(Button)`
  background-color: transparent;
  color: ${props => props.theme.colors.primary};
  padding: 0;
  min-width: auto;
  box-shadow: none;
`;
