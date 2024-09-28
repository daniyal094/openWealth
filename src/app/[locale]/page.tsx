import AppCard from "@/components/appCard/AppCard";
import AppText from "@/components/appText/AppText";
import AppAreaChart from "@/components/areaChart/AppAreaChart";
import DisplayFlex from "@/components/displayFlex/DisplayFlex";
import Portfolio from "@/components/portfolio/Portfolio";
import { I18nPages, topStates } from "@/constants/constants";
import { Crypto } from "@/constants/types";
import { themeTokens } from "@/styles/theme";
import initTranslations from "@/utils/i18n";

const i18nNamespaces = [I18nPages.Dashboard];

const Home = async ({ params: { locale } }: { params: { locale: string } }) => {
  let data = await fetch(`${process.env.BASE_URL}/api/latesttrend`, {
    method: "GET",
    cache: "no-cache",
  });
  let trends: Crypto[] = await data.json();
  const { t } = await initTranslations(locale, i18nNamespaces);
  return (
    <DisplayFlex
      $bgColor={"backgroundSecondary"}
      $padding={themeTokens.padding.large}
      $borderRadius={themeTokens.borderRadius.medium}
      $margin={`${themeTokens.margin.xLarge} auto`}
      $boxShadow={themeTokens.boxShadow.medium}
      $direction="column"
    >
      <DisplayFlex
        $justify="space-between"
        $align="center"
        $width="100%"
        $wrap="wrap"
      >
        <DisplayFlex $direction="column" $gap={themeTokens.gap.medium}>
          <AppText $fontWeight="400" $variant="primary">
            {t(`${I18nPages.Dashboard}:TotalBalance`)}
          </AppText>
          <AppText $size="xLarge" $fontWeight="700" $variant="primary">
            $154,610.00
          </AppText>
        </DisplayFlex>
        <DisplayFlex $gap={themeTokens.gap.xLarge}>
          {topStates.map((state) => (
            <DisplayFlex
              $direction="column"
              key={state.name}
              $gap={themeTokens.gap.medium}
            >
              <AppText $variant="secondary">{t(state.name)}</AppText>
              <AppText $variant={state.state === "up" ? "success" : "error"}>
                {state.value}
              </AppText>
            </DisplayFlex>
          ))}
        </DisplayFlex>
      </DisplayFlex>
      <DisplayFlex
        $wrap="wrap"
        $gap={themeTokens.gap.medium}
        $margin={themeTokens.margin.large}
      >
        {trends.map((item) => (
          <AppCard data={item} key={item.id} />
        ))}
      </DisplayFlex>
      <DisplayFlex
        $width="100%"
        $justify="space-between"
        $margin="20px 0px"
        $gap={themeTokens.gap.large}
        $wrap="wrap"
        $align="center"
      >
        <Portfolio data={trends} />
        <AppAreaChart />
      </DisplayFlex>
    </DisplayFlex>
  );
};

export default Home;
