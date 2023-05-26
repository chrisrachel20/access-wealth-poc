import {
  PieNetQty,
  PieMarketPrice,
  PieMarketValue,
} from "../../components/pie/index";
import { Box, Grid, Typography, Container } from "@mui/material";
import * as Strings from "../../constants/index";
import * as styles from "./styles";

const PieCharts = (props: any) => {
  const { securityValuations } = props;

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
      <Grid sx={styles.gridStyle} key={value.text}>
        <Container sx={styles.container}>
          <Typography sx={styles.text}>
            {value.text}
          </Typography>
        </Container>
        {value.pie}
      </Grid>
    ));

  return (
    <>
      <Box sx={styles.box}>
        <Grid container rowSpacing={4} sx={{justifyContent: 'space-between'}}>
          {renderPie()}
        </Grid>
      </Box>
    </>
  );
};
export default PieCharts;
