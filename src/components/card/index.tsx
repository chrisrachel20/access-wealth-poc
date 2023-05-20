import { Box, Typography, Container, Card } from "@mui/material";
import * as Strings from "../../constants/index";
import * as styles from "./styles";

export const PortfolioCard = (props: any) => {
  const { masterData } = props;
  const { portfolio, currencyCode, marketValue, securityValuations } =
    masterData;

  const { investor } = portfolio || "";

  const profileDetails = [
    {
      key: Strings.INVESTOR_NAME,
      value: portfolio?.name,
    },
    {
      key: Strings.INVESTOR_ACCOUNT_CURRENCY,
      value: investor?.currencyCode,
    },
    {
      key: Strings.VALUATION_CURRENCY,
      value: currencyCode,
    },
    {
      key: Strings.INVESTOR_PORTFOLIO_VALUE,
      value: marketValue?.toFixed(2),
    },
  ];

  const renderDetails = () =>
    profileDetails.map((item: any) => (
      <Container sx={styles.profileWrapper} key={item.key}>
        <Typography variant="h5" sx={styles.profileKey}>
          {item.key}
        </Typography>
        <Typography variant="h5" sx={styles.profileValue}>
          {item.value}
        </Typography>
      </Container>
    ));

  const renderStockDetails = () =>
    securityValuations?.map((item: any) => (
      <Box sx={{ display: "flex", mb: 2 }} key={item.security.name}>
        <Typography variant="h5" sx={{ mt: 1, mr: 2 }}>
          {item.security.name}
        </Typography>
        <img
          src={item.security.logoUrl}
          alt={item.security.name}
          width={50}
          height={50}
        />
      </Box>
    ));

  return (
    <Box sx={styles.cardBox}>
      <Container sx={styles.containerWrapper}>
        <Typography variant="h4" sx={styles.title}>
          {Strings.PORTFOLIO_VALUE}
        </Typography>
        <Container sx={styles.detailsContainer}>
          <Card sx={{...styles.card, mr: 10}}>{renderDetails()}</Card>
          <Card sx={styles.card}>
            <Typography variant="h5" sx={styles.stocksTitle}>
              {Strings.CURRENT_STOCKS}
            </Typography>
            {renderStockDetails()}
          </Card>
        </Container>
      </Container>
    </Box>
  );
};
