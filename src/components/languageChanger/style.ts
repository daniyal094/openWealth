import { lightTheme } from "@/styles/theme";
import styled from "styled-components";

export const Select = styled.select < { $themColor: typeof lightTheme } > `
  background: transparent;
  border: none;
  color: ${({ $themColor }) => $themColor.colors.text};
  font-size: 1rem;
`