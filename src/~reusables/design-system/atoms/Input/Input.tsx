import { styled } from "../../../../contexts/ThemeContext";
import { layout, LayoutProps } from "styled-system";

export const Input = styled("input")<LayoutProps>`
  ${layout};
  font-size: ${props => props.theme.fontSizes[3]}px;
  transition: all 100ms ease-in-out;
  min-height: 40px;
  background-color: transparent;
  border: 1px solid ${props => props.theme.colors.grey};
  padding: 0 ${props => props.theme.space[6]}px;
  margin-bottom: ${props => props.theme.space[7]}px;
  color: ${props => props.theme.colors.text};
  border-radius: ${props => props.theme.radii[2]}px;
  box-sizing: border-box;

  &:hover,
  &:focus {
    outline: 0 none;
  }

  ::placeholder {
    color: ${props => props.theme.colors.grey};
    opacity: 1;
  }

  :-ms-input-placeholder {
    color: ${props => props.theme.colors.grey};
  }

  ::-ms-input-placeholder {
    color: ${props => props.theme.colors.grey};
  }
`;
