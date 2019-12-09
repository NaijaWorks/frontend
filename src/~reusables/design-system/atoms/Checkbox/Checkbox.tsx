// modules
import React from "react";
import { styled } from "../../../../contexts/ThemeContext";

//

interface CheckboxProps {
  label: string;
  value: string;
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Checkbox: React.FC<CheckboxProps> = ({
  value,
  label,
  checked,
  onChange
}) => {
  return (
    <StyledLabel>
      {label}
      <input
        value={value}
        type="checkbox"
        checked={checked}
        onChange={onChange}
      />
      <span className="checkmark"></span>
    </StyledLabel>
  );
};

const StyledLabel = styled("label")`
  display: block;
  position: relative;
  padding-left: 35px;
  cursor: pointer;
  font-size: 16px;
  color: ${props => props.theme.colors.text};
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  .checkmark {
    position: absolute;
    top: 0;
    left: 0;
    height: 20px;
    width: 20px;
    background-color: transparent;
    border: 2px solid ${props => props.theme.colors.grey};
    border-radius: 3px;
  }

  &:hover input ~ .checkmark {
    border-color: ${props => props.theme.colors.primary};
  }

  input:checked ~ .checkmark {
    background: ${props => props.theme.colors.primary};
    border-color: ${props => props.theme.colors.primary};
  }

  .checkmark:after {
    content: "";
    position: absolute;
    display: none;
  }

  input:checked ~ .checkmark:after {
    display: block;
  }

  .checkmark:after {
    left: 8px;
    top: 4px;
    width: 4px;
    height: 8px;
    border: solid ${props => props.theme.colors.white};
    border-width: 0 2px 2px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
`;

export default Checkbox;
