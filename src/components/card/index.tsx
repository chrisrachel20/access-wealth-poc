import { Box, Typography, Container, Card, Divider } from "@mui/material";
import * as Strings from "../../constants/index";
import * as styles from "./styles";
import { ControlledAccordions } from "../accordion/index";
import PaidIcon from "@mui/icons-material/Paid";
import AccountBoxIcon from "@mui/icons-material/AccountBox";

export const PortfolioCard = (props: any) => {
  const { masterData } = props;
  const { portfolio, currencyCode, marketValue, securityValuations } =
    masterData;

  const profileDetails = [
    {
      key: Strings.INVESTOR_NAME,
      value: portfolio?.name,
      icon: (
        <AccountBoxIcon
          sx={{
            color: "#808080",
            display: "flex",
            alignSelf: "center",
            fontSize: 35,
          }}
        />
      ),
    },

    {
      key: Strings.INVESTOR_PORTFOLIO_VALUE,
      currencyCode: currencyCode,
      value: marketValue?.toFixed(2),
      icon: (
        <PaidIcon
          sx={{
            color: "#808080",
            display: "flex",
            alignSelf: "center",
            fontSize: 35,
          }}
        />
      ),
    },
  ];

  const renderDetails = () =>
    profileDetails.map((item: any) => (
      <Card sx={{ ...styles.card, mr: 5, height: 40 }} key={item.key}>
        <Container sx={styles.profileWrapper} key={item.key}>
          <Box sx={{ display: "flex" }}>
            {item.icon}
            <Typography variant="h5" sx={styles.profileKey}>
              {item.key}
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            {item.currencyCode && (
              <Typography variant="h5" sx={styles.profileCurrency}>
                {item.currencyCode}
              </Typography>
            )}
            <Typography variant="h4" sx={styles.profileValue}>
              {item.value}
            </Typography>
          </Box>
        </Container>
      </Card>
    ));

  return (
    <>
      <Box sx={styles.cardBox}>
        <Box sx={styles.containerWrapper}>
          <Typography sx={styles.title}>{Strings.PORTFOLIO_VALUE}</Typography>
          <Box sx={{ display: "flex" }}>
            <Box sx={styles.detailsContainer}>{renderDetails()}</Box>
          </Box>
        </Box>
        <Divider orientation="vertical" flexItem sx={styles.verticalDivider} />
        <Card sx={styles.stockCard}>
          <Typography sx={styles.stocksTitle}>
            {Strings.CURRENT_STOCKS}
          </Typography>
          <ControlledAccordions securityValuations={securityValuations} />
        </Card>
      </Box>
      <Divider variant="fullWidth" sx={styles.divider} />
    </>
  );
};
