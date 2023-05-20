import { useEffect, useState } from "react";
import "chart.js/auto";
import { Box } from "@mui/material";
import { Pie } from "react-chartjs-2";
import { options } from "./utils";
import * as Strings from "../../constants/index";

export const PieMarketValue = (props: any) => {
  const { securityValuations } = props;
  const [unitsData, setUnitsData] = useState<any>();

  useEffect(() => {
    if (securityValuations) {
      const formattedData = {
        labels: securityValuations?.map(
          (item: any) =>
            `${item.security.name} - ${item.marketValue.toFixed(2)}`
        ),
        datasets: [
          {
            data: securityValuations?.map((item: any) =>
              parseInt(item.marketValue).toFixed(2)
            ),
            backgroundColor: Strings.PIE_COLORS,
          },
        ],
      };
      setUnitsData(formattedData);
    }
  }, [securityValuations]);

  return (
    <Box sx={{ display: "flex", ml: 2, height: "550px" }}>
      {unitsData && <Pie data={unitsData} options={options} />}
    </Box>
  );
};
