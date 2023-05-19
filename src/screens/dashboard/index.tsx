import { useEffect } from "react";
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
      <PortfolioCard masterData={masterData}></PortfolioCard>
      <PieCharts securityValuations={securityValuations} />
      <LineGraph masterData={masterData} />
    </>
  );
};
export default Dashboard;
