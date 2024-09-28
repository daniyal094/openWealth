import styled, { css } from "styled-components";
import { TextStyledProps } from "./types";
import { themeTokens } from "@/styles/theme";

export const Text = styled.p<TextStyledProps>`
${({ $size = 'medium', $variant = 'text', $fontWeight = '400', $textAlign = 'left', $themeColors }) => css`
    font-size:${themeTokens.fontSize[$size] || themeTokens.fontSize.medium};
    font-weight: ${$fontWeight};
    text-align: ${$textAlign};
    color: ${$themeColors.colors[$variant] || $themeColors.colors.text};
  `}
`;