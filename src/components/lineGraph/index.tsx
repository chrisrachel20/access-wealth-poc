import { useEffect, useState } from "react";
import "chart.js/auto";
import { Box } from "@mui/material";
import { Line } from "react-chartjs-2";
import * as Strings from "../../constants/index";
import * as styles from "./styles";

export const LineGraph = (props: any) => {

  const { masterData } = props;
  const { securityTimeSeries } = masterData;
  const [chartData, setChartData] = useState<any>([]);

  useEffect(() => {
    if (masterData && securityTimeSeries) {
      const chartLabels = securityTimeSeries[0].values
        .filter((_: any, i: number) => i % 14 === 0)
        .map((value: any) => value.key);

      const chartData = {
        labels: chartLabels,
        datasets: securityTimeSeries.map((security: any, index: number) => {
          const averagedData = security.values.reduce(
            (result: any, _currentValue: any, index: number, array: any) => {
              if (index % 15 === 0) {
                const slice = array?.slice(index, index + 15);
                const averageValue =
                  slice?.reduce(
                    (sum: any, entry: any) => sum + entry.value,
                    0
                  ) / slice.length;
                result.push(averageValue);
              }
              return result;
            },
            []
          );
          const color = Strings.LINE_COLORS;
          return {
            label: security.key.name,
            data: averagedData,
            fill: false,
            borderColor: color[index % 5],
            backgroundColor: color[index % 5],
            tension: 0.2,
          };
        }),
      };

      setChartData(chartData);
    }
  }, [masterData, securityTimeSeries]);

  return (
    <Box sx={styles.lineBox}>
      {chartData.length === 0 ? null : (
        <Line data={chartData} options={styles.options} />
      )}
    </Box>
  );
};
