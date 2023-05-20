import { useEffect } from "react";
import { Box } from "@mui/material";
import { getMasterData } from "../../store/actionCreators/valuation";
import { useDispatch, useSelector } from "react-redux";
import { PortfolioCard } from "../../components/card";
import { LineGraph } from "../../components/lineGraph";
import PieCharts from "./pieCharts";

const Dashboard = () => {
  const {
    valuationReducer: { masterData },
  } = useSelector((state: any) => state);
  const { securityValuations } = masterData;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch<any>(getMasterData());
  }, []);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          p: 10,
        }}
      >
        <PortfolioCard masterData={masterData}></PortfolioCard>
        <PieCharts securityValuations={securityValuations} />
        <LineGraph masterData={masterData} />
      </Box>
    </>
  );
};
export default Dashboard;
