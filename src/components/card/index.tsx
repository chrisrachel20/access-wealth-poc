import { Box, Typography, Container, Card } from "@mui/material";
import * as Strings from "../../constants/index";

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
      value: marketValue,
    },
  ];

  const renderDetails = () =>
    profileDetails.map((item: any) => (
      <Container sx={{ display: "flex", mb: 2 }} key={item.key}>
        <Typography
          variant="h5"
          sx={{ mt: 1, fontWeight: "700", mr: 2, color: "#282c34" }}
        >
          {item.key}
        </Typography>
        <Typography
          variant="h5"
          sx={{ mt: 1, fontWeight: "500", color: "#2B547E" }}
        >
          {item.value}
        </Typography>
      </Container>
    ));

  const renderStockDetails = () =>
    securityValuations?.map((item: any) => (
      <Container sx={{ display: "flex", mb: 2 }} key={item.key}>
        <Typography variant="h5" sx={{ mt: 1, mr: 2 }}>
          {item.security.name}
        </Typography>

        <img
          src={item.security.logoUrl}
          alt={item.security.name}
          width={50}
          height={50}
        />
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
        width: "1500px",
      }}
    >
      <Container
        sx={{ display: "flex", ml: 2, flexDirection: "column", mb: 5 }}
      >
        <Typography
          variant="h4"
          sx={{ mt: 1, fontWeight: "700", color: "#2B547E" }}
        >
          {Strings.PORTFOLIO_VALUE}
        </Typography>
        <Container sx={{ display: "flex", ml: 2, flexDirection: "row", mb: 5 }}>
          <Card
            sx={{
              width: 500,
              mt: 5,
              p: 5,
              borderRadius: 5,
              mr: 10,
              boxShadow: 3,
            }}
          >
            {renderDetails()}
          </Card>
          <Card sx={{ width: 500, mt: 5, p: 5, borderRadius: 5, boxShadow: 3 }}>
            <Typography
              variant="h5"
              sx={{ mb: 4, fontWeight: "700", color: "#2B547E" }}
            >
              {Strings.CURRENT_STOCKS}
            </Typography>
            {renderStockDetails()}
          </Card>
        </Container>
      </Container>
    </Box>
  );
};
