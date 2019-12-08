import { styled } from "../../../../contexts/ThemeContext";
import { space, SpaceProps } from "styled-system";

export const Button = styled("button")<SpaceProps>`
  ${space};
  font-size: ${props => props.theme.fontSizes[3]}px;
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
