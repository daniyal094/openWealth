import styled from "styled-components";
import FlexContainer from "../displayFlex/style";

export const AppCardContainer = styled(FlexContainer)`
  min-width: 275px;

  @media (max-width: 768px) { 
    min-width: 100%;
    padding: 10px;
  }
`;
