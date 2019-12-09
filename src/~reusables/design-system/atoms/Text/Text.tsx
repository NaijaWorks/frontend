// modules
import { styled } from "../../../../contexts/ThemeContext";
import { ColorProps, color } from "styled-system";

// components
import { Text } from "../Primitives/Primitives";

const Paragraph = styled(Text)`
  line-height: ${props => props.theme.lineHeights.title};
  font-size: ${props => props.theme.fontSizes[3]};
`;

Paragraph.defaultProps = {
  color: "text"
};

export const P1 = styled(Paragraph)`
  font-size: ${props => props.theme.fontSizes[4]}px;
`;

export const P2 = styled(Paragraph)`
  font-size: ${props => props.theme.fontSizes[3]}px;
`;

export const P3 = styled(Paragraph)`
  font-size: ${props => props.theme.fontSizes[2]}px;
`;

export const H1 = styled("h1")<ColorProps>`
  ${color};
  line-height: ${props => props.theme.lineHeights.title};
  font-size: ${props => props.theme.fontSizes[7]}px;
  font-weight: ${props => props.theme.fontWeights[6]};
`;

H1.defaultProps = { color: "title" };

export const H2 = styled("h2")<ColorProps>`
  ${color};
  line-height: ${props => props.theme.lineHeights.title};
  font-size: ${props => props.theme.fontSizes[6]}px;
  font-weight: ${props => props.theme.fontWeights[6]};
`;

H2.defaultProps = { color: "title" };

export const H3 = styled("h3")<ColorProps>`
  ${color};
  line-height: ${props => props.theme.lineHeights.title};
  font-size: ${props => props.theme.fontSizes[5]}px;
  font-weight: ${props => props.theme.fontWeights[6]};
`;

H3.defaultProps = { color: "title" };

export const H4 = styled("h4")<ColorProps>`
  ${color};
  line-height: ${props => props.theme.lineHeights.copy};
  font-size: ${props => props.theme.fontSizes[4]}px;
  font-weight: ${props => props.theme.fontWeights[4]};
`;

H4.defaultProps = { color: "title" };

export const H5 = styled("h5")<ColorProps>`
  ${color};
  line-height: ${props => props.theme.lineHeights.copy};
  font-size: ${props => props.theme.fontSizes[3]}px;
  font-weight: ${props => props.theme.fontWeights[4]};
`;

H5.defaultProps = { color: "title" };

export const H6 = styled("h6")<ColorProps>`
  ${color};
  line-height: ${props => props.theme.lineHeights.copy};
  font-size: ${props => props.theme.fontSizes[1]}px;
  font-weight: ${props => props.theme.fontWeights[4]};
  letter-spacing: ${props => props.theme.letterSpacing.tight};
`;

H6.defaultProps = { color: "title" };
