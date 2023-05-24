import { useEffect } from "react";
import { Box, Divider } from "@mui/material";
import { getMasterData } from "../../store/actionCreators/valuation";
import { useDispatch, useSelector } from "react-redux";
import { PortfolioCard } from "../../components/card";
import { LineGraph } from "../../components/lineGraph";
import PieCharts from "./pieCharts";
import * as styles from "./styles";

const Dashboard = () => {
  const dispatch = useDispatch();

  const {
    valuationReducer: { masterData },
  } = useSelector((state: any) => state);
  const { securityValuations } = masterData;

  useEffect(() => {
    dispatch<any>(getMasterData());
  }, []);

  return (
    <>
      <Box sx={styles.dashboardBox}>
        <PortfolioCard masterData={masterData} />
        <PieCharts securityValuations={securityValuations} />
        <Divider variant="fullWidth" sx={styles.divider} />
        <LineGraph masterData={masterData} />
      </Box>
    </>
  );
};
export default Dashboard;
