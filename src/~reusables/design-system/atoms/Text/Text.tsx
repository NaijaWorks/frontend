// modules
import { styled } from "../../../../contexts/ThemeContext";

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

const Titles = styled(Text)``;
Titles.defaultProps = { color: "title" };

export const H1 = styled(Titles)`
  line-height: ${props => props.theme.lineHeights.title};
  font-size: ${props => props.theme.fontSizes[7]}px;
  font-weight: ${props => props.theme.fontWeights[6]};
`;

export const H2 = styled(Titles)`
  line-height: ${props => props.theme.lineHeights.title};
  font-size: ${props => props.theme.fontSizes[6]}px;
  font-weight: ${props => props.theme.fontWeights[6]};
`;

export const H3 = styled(Titles)`
  line-height: ${props => props.theme.lineHeights.title};
  font-size: ${props => props.theme.fontSizes[5]}px;
  font-weight: ${props => props.theme.fontWeights[6]};
`;

export const H4 = styled(Titles)`
  line-height: ${props => props.theme.lineHeights.copy};
  font-size: ${props => props.theme.fontSizes[4]}px;
  font-weight: ${props => props.theme.fontWeights[4]};
`;

export const H5 = styled(Titles)`
  line-height: ${props => props.theme.lineHeights.copy};
  font-size: ${props => props.theme.fontSizes[3]}px;
  font-weight: ${props => props.theme.fontWeights[4]};
`;

export const H6 = styled(Titles)`
  line-height: ${props => props.theme.lineHeights.copy};
  font-size: ${props => props.theme.fontSizes[1]}px;
  font-weight: ${props => props.theme.fontWeights[4]};
  letter-spacing: ${props => props.theme.letterSpacing.tight};
`;
