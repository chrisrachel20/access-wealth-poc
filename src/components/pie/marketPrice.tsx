import { useEffect, useState } from "react";
import 'chart.js/auto';
import { Box } from "@mui/material";
import { Pie } from "react-chartjs-2";
import { options } from './utils';
import * as Strings from "../../constants/index";

export const PieMarketPrice = (props: any) => {
  const { securityValuations } = props;
  const [unitsData, setUnitsData] = useState<any>();

  useEffect(() => {
    if (securityValuations) {
      const formattedData = {
        labels: securityValuations?.map((item: any) => item.security.name        ),
        datasets: [
          {
            data: securityValuations?.map((item: any) => parseInt(item.marketPrice
                )),
            backgroundColor: Strings.PIE_COLORS,
          },
        ],
      };
      setUnitsData(formattedData);
    }
  }, [securityValuations]);

  return (
    <Box sx={{ display: "flex", ml: 2}}>
         {unitsData && <Pie data={unitsData} options={options} />}
    </Box>
  );
};
