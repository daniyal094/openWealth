"use client";
import { Crypto } from "@/constants/types";
import React from "react";
import DisplayFlex from "../displayFlex/DisplayFlex";
import { themeTokens } from "@/styles/theme";
import AppText from "../appText/AppText";
import { useTranslation } from "react-i18next";
import { useTheme } from "@/context/ThemeContext";
import { Divider, PortfolioContainer } from "./style";
import Image from "next/image";

const Portfolio = ({ data }: { data: Crypto[] }) => {
  const { t } = useTranslation();
  const { themeColor } = useTheme();
  return (
    <PortfolioContainer
      $bgColor="primary"
      $borderRadius={themeTokens.borderRadius.large}
      $padding={themeTokens.padding.large}
      $direction="column"
      $border="0px 10px 0px 0px"
      $themeColors={themeColor}
    >
      <DisplayFlex $direction="column" $gap={themeTokens.gap.large}>
        <AppText $variant="textReverse" $size={"large"} $fontWeight="600">
          {t("myPortfolio")}
        </AppText>
        <Divider $themeColor={themeColor} />
      </DisplayFlex>
      {data?.map((crypto, index) => (
        <DisplayFlex $direction="column" $gap={themeTokens.gap.large} >
          <DisplayFlex
            $gap={themeTokens.gap.medium}
            $align="center"
          >
            <Image
              src={crypto.image_url}
              alt={crypto.name}
              width={48}
              height={48}
            />
            <DisplayFlex $direction="column" $gap={themeTokens.gap.small}>
              <AppText $variant="textReverse">{crypto.name}</AppText>
              <AppText $size="small" $variant="secondary">
                {crypto.symbol}
              </AppText>
            </DisplayFlex>
            <DisplayFlex $justify="flex-end" $width="100%">
              <AppText $size="medium" $fontWeight="700" $variant="textReverse">
                ${crypto.price_usd}
              </AppText>
            </DisplayFlex>
          </DisplayFlex>
          {index !== data.length - 1 && <Divider $themeColor={themeColor} />}
        </DisplayFlex>
      ))}
    </PortfolioContainer>
  );
};

export default Portfolio;
