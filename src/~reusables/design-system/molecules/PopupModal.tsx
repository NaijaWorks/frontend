// modules
import React from "react";
import { X } from "react-feather";

// components
import { styled } from "../../../contexts/ThemeContext";
import { H5, P2 } from "../atoms/Text/Text";
import { Flex } from "../atoms/Primitives/Primitives";
import { MAX_MODAL_WIDTH } from "../globals/metrics";

interface PopupModalProps {
  setModal: (bool: boolean) => void;
  title: string;
}

const PopupModal: React.FC<PopupModalProps> = ({
  title,
  setModal,
  children
}) => {
  return (
    <StyledModal>
      <div className="popup-modal">
        <div className="popup-inner">
          <section className="header">
            <Flex justifyContent="space-between">
              <H5>{title}</H5>
              <X />
            </Flex>
          </section>
          <section className="body">{children}</section>
        </div>
      </div>
    </StyledModal>
  );
};

const StyledModal = styled.aside`
  .header {
    text-align: left;
    padding: ${props => props.theme.space[7]}px;
  }

  .body {
    text-align: left;
    padding: ${props => props.theme.space[7]}px;
  }

  .header {
    background: ${props => props.theme.colors.lightBackground};
    border-top-left-radius: ${props => props.theme.radii[1]}px;
    border-top-right-radius: ${props => props.theme.radii[1]}px;
  }

  .popup-modal {
    z-index: 1000;
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    background-color: rgba(0, 0, 0, 0.3);
  }

  .popup-inner {
    background: ${props => props.theme.colors.white};
    position: absolute;
    left: 22%;
    right: 22%;
    top: 12%;
    margin: auto;
    border-radius: ${props => props.theme.radii[1]}px;
    max-width: ${MAX_MODAL_WIDTH}px;
    display: flex;
    flex-direction: column;
  }

  @media only screen and (max-width: ${props => props.theme.breakpoints[0]}) {
    .popup-inner {
      left: 7%;
      right: 7%;
      top: 7%;
    }
  }
`;

export default PopupModal;
