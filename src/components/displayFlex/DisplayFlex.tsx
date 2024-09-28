"use client";
import React from "react";
import FlexContainer from "./style";
import { DisplayFlexProps } from "./type";
import { useTheme } from "@/context/ThemeContext";

const DisplayFlex: React.FC<DisplayFlexProps> = (props) => {
  const { themeColor } = useTheme();
  return (
    <FlexContainer {...props} $themeColors={themeColor}>
      {props.children}
    </FlexContainer>
  );
};

export default DisplayFlex;
