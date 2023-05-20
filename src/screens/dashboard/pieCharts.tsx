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
    // backgroundColor: "#EBF4FA",
    background: "linear-gradient(to bottom, #EBF4FA , #B0CFDE)",
    height: "700px",
    width: "600px",
    mr: 5,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    borderRadius: "30px",
    mb: 10,
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
        <Container sx={{ textAlign: "center", p: 3 }}>
          <Typography variant="h4" sx={{ fontWeight: "700", color: "#2B547E" }}>
            {value.text}
          </Typography>
        </Container>
        {value.pie}
      </Grid>
    ));

  return (
    <>
      <Box sx={{ display: "flex", padding: "24px" }}>
        <Grid container rowSpacing={4}>
          {renderPie()}
        </Grid>
      </Box>
    </>
  );
};
export default PieCharts;
