import styled from 'styled-components';
import { FlexContainerProps } from './type';

const FlexContainer = styled.div<FlexContainerProps>`
  display: flex;
  flex-direction: ${({ $direction }) => $direction || 'row'};
  justify-content: ${({ $justify }) => $justify || 'flex-start'};
  align-items: ${({ $align }) => $align || 'stretch'};
  flex-wrap: ${({ $wrap }) => $wrap || 'nowrap'};
  margin: ${({ $margin }) => $margin || '3px'};
  padding: ${({ $padding }) => $padding || '0'};
  width: ${({ $width }) => $width || 'auto'};
  height: ${({ $height }) => $height || 'auto'};
  background-color: ${({ $themeColors, $bgColor }) => $bgColor ? $themeColors.colors[$bgColor] :
    'transparent'};
  color: ${({ $themeColors }) => $themeColors.colors.text};
  border: ${({ $border }) => $border || 'none'};
  border-radius: ${({ $borderRadius }) => $borderRadius || '0'};
  gap: ${({ $gap }) => $gap || '0'};
  box-shadow: ${({ $boxShadow }) => $boxShadow || 'none'};
`;

export default FlexContainer;