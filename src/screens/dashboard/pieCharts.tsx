import {
  PieNetQty,
  PieMarketPrice,
  PieMarketValue,
} from "../../components/pie/index";
import { Box, Grid, Typography, Container } from "@mui/material";
import * as Strings from "../../constants/index";

const PieCharts = (props: any) => {
  const { securityValuations } = props;

  const gridStyle = {
    backgroundColor: "#EBF4FA",
    height: "600px",
    width: "600px",
    mr: 2,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    borderRadius: "30px",
  };

  const title = [
    {
      text: Strings.NET_QTY,
      pie: <PieNetQty securityValuations={securityValuations} />,
    },
    {
      text: Strings.MARKET_PRICE,
      pie: <PieMarketPrice securityValuations={securityValuations} />,
    },
    {
      text: Strings.MARKET_VALUE,
      pie: <PieMarketValue securityValuations={securityValuations} />,
    },
  ];

  const renderPie = () =>
    title.map((value) => (
      <Grid sx={gridStyle} key={value.text}>
        <Container sx={{ textAlign: "center", p: 3, mb: -20 }}>
          <Typography variant="h5" sx={{ fontWeight: "700", color: "#2B547E" }}>
            {value.text}
          </Typography>
        </Container>
        {value.pie}
      </Grid>
    ));

  return (
    <>
      <Box sx={{ display: "flex", padding: "24px", ml: 50 }}>
        <Grid container rowSpacing={4}>
          {renderPie()}
        </Grid>
      </Box>
    </>
  );
};
export default PieCharts;
