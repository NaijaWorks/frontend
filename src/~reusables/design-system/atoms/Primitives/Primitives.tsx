import {
  space,
  SpaceProps,
  color,
  ColorProps,
  width,
  WidthProps,
  height,
  HeightProps,
  minHeight,
  MinHeightProps,
  flex,
  FlexProps as StyledSystemFlexProps,
  order,
  OrderProps,
  alignSelf,
  AlignSelfProps,
  flexWrap,
  FlexWrapProps,
  flexDirection,
  FlexDirectionProps,
  alignItems,
  AlignItemsProps,
  justifyContent,
  JustifyContentProps,
  fontSize,
  FontSizeProps,
  fontFamily,
  FontFamilyProps,
  fontWeight,
  FontWeightProps,
  textAlign,
  TextAlignProps,
  lineHeight,
  LineHeightProps,
  letterSpacing,
  LetterSpacingProps,
  borders,
  BordersProps,
  borderColor,
  BorderColorProps,
  borderRadius,
  BorderRadiusProps,
  boxShadow,
  BoxShadowProps,
  opacity,
  OpacityProps,
  position,
  PositionProps,
  top,
  TopProps,
  left,
  LeftProps,
  right,
  RightProps,
  bottom,
  BottomProps,
  zIndex,
  ZIndexProps,
  maxHeight,
  maxWidth,
  MaxHeightProps,
  MaxWidthProps,
  minWidth,
  MinWidthProps
} from "styled-system";
import { styled } from "../../../../contexts/ThemeContext";

export type BoxProps = SpaceProps &
  WidthProps &
  HeightProps &
  ColorProps &
  FontSizeProps &
  FontWeightProps &
  StyledSystemFlexProps &
  BorderRadiusProps &
  MinHeightProps &
  MaxHeightProps &
  MinWidthProps &
  MaxWidthProps;

export const Box = styled("div")<BoxProps>(
  space,
  width,
  height,
  color,
  fontSize,
  fontWeight,
  flex,
  borderRadius,
  minHeight,
  maxHeight,
  minWidth,
  maxWidth
);

export type FlexProps = BoxProps &
  AlignSelfProps &
  OrderProps &
  FlexWrapProps &
  FlexDirectionProps &
  AlignItemsProps &
  JustifyContentProps;

export const Flex = styled(Box)<FlexProps>(
  {
    display: "flex",
    width: "100%"
  },
  alignSelf,
  order,
  flexWrap,
  flexDirection,
  alignItems,
  justifyContent
);

export type ContainerProps = FlexProps &
  BordersProps &
  BorderColorProps &
  BorderRadiusProps &
  BoxShadowProps &
  OpacityProps &
  PositionProps &
  TopProps &
  BottomProps &
  LeftProps &
  RightProps &
  ZIndexProps &
  TextAlignProps;

export const Container = styled(Flex)<ContainerProps>(
  borders,
  borderColor,
  borderRadius,
  boxShadow,
  opacity,
  position,
  top,
  bottom,
  left,
  right,
  zIndex,
  textAlign
);

export type TextProps = BoxProps &
  FontFamilyProps &
  FontWeightProps &
  TextAlignProps &
  LineHeightProps &
  LetterSpacingProps;

export const Text = styled(Box)<TextProps>(
  fontFamily,
  textAlign,
  lineHeight,
  letterSpacing
);

Text.defaultProps = {
  color: "inherit",
  lineHeight: "solid",
  letterSpacing: "normal"
};
