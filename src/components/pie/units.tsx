import { useEffect, useState } from "react";
import "chart.js/auto";
import { Box } from "@mui/material";
import { Pie } from "react-chartjs-2";
import { options, pieBox } from "./utils";
import * as Strings from "../../constants/index";

export const PieNetQty = (props: any) => {
  const { securityValuations } = props;
  const [unitsData, setUnitsData] = useState<any>();

  useEffect(() => {
    if (securityValuations) {
      const formattedData = {
        labels: securityValuations?.map(
          (item: any) => `${item.security.name} - ${item.units}`
        ),
        datasets: [
          {
            data: securityValuations?.map((item: any) => parseInt(item.units)),
            backgroundColor: Strings.PIE_COLORS,
          },
        ],
      };
      setUnitsData(formattedData);
    }
  }, [securityValuations]);

  return (
    <Box sx={pieBox}>
      {unitsData && <Pie data={unitsData} options={options} />}
    </Box>
  );
};
