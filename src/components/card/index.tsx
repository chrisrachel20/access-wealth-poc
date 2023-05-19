import { Box, Typography, Container, Card } from "@mui/material";
import * as Strings from "../../constants/index";

export const PortfolioCard = (props: any) => {
  const { masterData } = props;
  const { portfolio, currencyCode, marketValue } = masterData;
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
      value: marketValue,
    },
  ];

  const renderDetails = () =>
    profileDetails.map((item: any) => (
      <Container sx={{ display: "flex", mb: 2 }} key={item.key}>
        <Typography variant="h5" sx={{ mt: 1, fontWeight: "700", mr: 2 }}>
          {item.key}
        </Typography>
        <Typography variant="h5" sx={{ mt: 1, fontWeight: "500" }}>
          {item.value}
        </Typography>
      </Container>
    ));

  return (
    <Box
      sx={{
        display: "flex",
        ml: 53,
        padding: "24px",
        mt: 20,
        mr: 20,
        borderRadius: "0.75rem",
        backgroundColor: "#EBF4FA",
        mb: 20,
      }}
    >
      <Container
        sx={{ display: "flex", ml: 2, flexDirection: "column", mb: 5 }}
      >
        <Typography variant="h4" sx={{ mt: 1, fontWeight: "700" }}>
          {Strings.PORTFOLIO_VALUE}
        </Typography>
        <Card sx={{ minWidth: 275, mt: 5, p: 5, borderRadius: 5 }}>
          {renderDetails()}
        </Card>
      </Container>
    </Box>
  );
};
