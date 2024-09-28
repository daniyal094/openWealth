"use client";
import { Crypto } from "@/constants/types";
import React from "react";
import DisplayFlex from "../displayFlex/DisplayFlex";
import { themeTokens } from "@/styles/theme";
import Image from "next/image";
import AppText from "../appText/AppText";
import { AppCardContainer } from "./style";
import { useTheme } from "@/context/ThemeContext";

const AppCard = ({ data }: { data: Crypto }) => {
  const { themeColor } = useTheme();
  return (
    <AppCardContainer
      $borderRadius={themeTokens.borderRadius.large}
      $padding={themeTokens.padding.large}
      $bgColor="background"
      $direction="column"
      $gap={themeTokens.gap.large}
      $boxShadow={themeTokens.boxShadow.large}
      $themeColors={themeColor}
    >
      <DisplayFlex $gap={themeTokens.gap.medium} $align="center">
        <Image src={data.image_url} alt={data.name} width={48} height={48} />
        <DisplayFlex $direction="column" $gap={themeTokens.gap.small}>
          <AppText>{data.name}</AppText>
          <AppText $size="small" $variant="secondary">
            {data.symbol}
          </AppText>
        </DisplayFlex>
        <DisplayFlex $justify="flex-end" $width="100%">
          <Image
            src={
              data.change_24h_percent > 0 ? "/icons/up.svg" : "/icons/down.svg"
            }
            alt="lose"
            width={30}
            height={30}
          />
        </DisplayFlex>
      </DisplayFlex>
      <DisplayFlex $margin="0px 0px 0px 10px" $align="center">
        <AppText $fontWeight="700" $size="large">
          ${data.price_usd}
        </AppText>
        <DisplayFlex $width="100%" $justify="flex-end">
          <AppText $variant={data.change_24h_percent > 0 ? "success" : "error"}>
            {data.change_24h_percent}%
          </AppText>
        </DisplayFlex>
      </DisplayFlex>
    </AppCardContainer>
  );
};

export default AppCard;
