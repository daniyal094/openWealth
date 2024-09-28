"use client";
import React from "react";
import DisplayFlex from "../displayFlex/DisplayFlex";
import AppText from "../appText/AppText";
import { useTranslation } from "react-i18next";
import LanguageChanger from "../languageChanger/LanguageChanger";
import ThemeToggleButton from "../themeToggleButton/ThemeToggleButton";
import { themeTokens } from "@/styles/theme";
import Link from "next/link";
import { I18nPages } from "@/constants/constants";

const Navbar = () => {
  const { t } = useTranslation();
  return (
    <DisplayFlex $justify="space-between" $align="center">
      <Link href="/">
        <AppText $fontWeight="700" $size="xLarge" $variant="primary">
          {t("Dashboard")}
        </AppText>
      </Link>
      <DisplayFlex
        $gap={themeTokens.gap.xLarge}
        $align="center"
        $justify="flex-end"
      >
        <Link href="/about">
          <AppText $variant="primary">{t(`${I18nPages.About}:About`)}</AppText>
        </Link>
        <ThemeToggleButton />
        <LanguageChanger />
      </DisplayFlex>
    </DisplayFlex>
  );
};

export default Navbar;
