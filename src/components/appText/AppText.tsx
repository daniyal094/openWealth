"use client";
import React from "react";
import { useTheme } from "@/context/ThemeContext";
import { TextProps } from "./types";
import { Text } from "./style";

const AppText: React.FC<TextProps> = (props) => {
  const { themeColor } = useTheme();
  return (
    <Text {...props} $themeColors={themeColor}>
      {props.children}
    </Text>
  );
};

export default AppText;
