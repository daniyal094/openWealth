import { lightTheme, ThemeType } from "@/styles/theme";
import { HTMLProps } from "react";

export interface FlexContainerProps extends HTMLProps<HTMLDivElement> {
  $direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
  $justify?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
  $align?: 'stretch' | 'center' | 'flex-start' | 'flex-end' | 'baseline';
  $wrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
  $margin?: string;
  $padding?: string;
  $width?: string;
  $height?: string;
  $bgColor?: keyof typeof lightTheme.colors;
  $border?: string;
  $gap?: string;
  $borderRadius?: string;
  $boxShadow?: string;
  $themeColors: ThemeType;
  style?: React.CSSProperties;
}
export interface DisplayFlexProps extends Partial<FlexContainerProps> {
  children?: React.ReactNode;
}  HTMLDivElement;