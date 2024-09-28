import styled from "styled-components";
import FlexContainer from "../displayFlex/style";

export const DashboardChartContainer = styled(FlexContainer)`
  width: 70%;
  height: 400px;
  @media (max-width: 992px) { 
    width: 100%; 
    padding: 10px; 
  }
`;
