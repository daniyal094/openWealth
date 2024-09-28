import { lightTheme } from "@/styles/theme";
import styled from "styled-components";
import FlexContainer from "../displayFlex/style";

type dividerProps = {
  $themeColor: typeof lightTheme;
};

export const Divider = styled.div<dividerProps>`
  border-bottom: 2px solid ${({ $themeColor }) => $themeColor.colors.textReverse};
  width: 100%;
  margin-bottom: 10px;
`;

export const PortfolioContainer = styled(FlexContainer)`
  width: 25%;

  @media (max-width: 992px) { 
    width: 50%; 
    padding: 10px; 
  }

  @media (max-width: 768px) { 
    width: 100%; 
    padding: 10px; 
  }
`;
