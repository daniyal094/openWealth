import AppText from "@/components/appText/AppText";
import DisplayFlex from "@/components/displayFlex/DisplayFlex";
import { I18nPages } from "@/constants/constants";
import { themeTokens } from "@/styles/theme";
import initTranslations from "@/utils/i18n";
import React from "react";

const i18nNamespaces = [I18nPages.About];

const About = async ({
  params: { locale },
}: {
  params: { locale: string };
}) => {
  const { t } = await initTranslations(locale, i18nNamespaces);

  return (
    <DisplayFlex
      $direction="column"
      $gap={themeTokens.gap.large}
      $margin={themeTokens.margin.xLarge}
    >
      <AppText $variant="primary" $size="large">
        {t("overview")}
      </AppText>
      <AppText $variant="text">{t("overviewData")}</AppText>
      <AppText $variant="primary" $size="large">
        {t("technologiesUsed")}
      </AppText>
      <AppText $variant="text">{t("techStack")}</AppText>
      <AppText $variant="primary" $size="large">
        {t("features")}
      </AppText>
      <AppText $variant="text">{t("featureData")}</AppText>
      <AppText $variant="primary" $size="large">
        {t("conclusion")}
      </AppText>
      <AppText $variant="text">{t("conclusionData")}</AppText>
    </DisplayFlex>
  );
};

export default About;
