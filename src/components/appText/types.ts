import { themeTokens, ThemeType } from "@/styles/theme"

export type TextProps = {
  $size?: keyof typeof themeTokens.fontSize,
  $variant?: "primary" | "secondary" | "error" | "warning" | "info" | "success" | 'text' | 'textReverse',
  $fontWeight?: "400" | "500" | '600' | '700',
  $textAlign?: "left" | "center" | "right",
  children: string | React.ReactNode,
}

export type TextStyledProps = TextProps & {
  $themeColors: ThemeType,
}