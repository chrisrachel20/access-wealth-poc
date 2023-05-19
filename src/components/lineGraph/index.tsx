import { useEffect, useState } from "react";
import "chart.js/auto";
import { Box } from "@mui/material";
import { Line } from "react-chartjs-2";
import * as Strings from "../../constants/index";

export const LineGraph = (props: any) => {
  const { masterData } = props;
  const { securityTimeSeries } = masterData;
  const [chartData, setChartData] = useState<any>([]);

  const options = {
    plugins: {
      legend: {
        display: true,
        position: "right" as const,
        labels: {
          color: "#001E3C",
          font: {
            size: 20,
          },
          padding: 20,
        },
      },
    },
    layout: {
      padding: 20,
    },
    tooltips: {
      callbacks: {
        label: (context: any) => {
          const label = context.label || "";
          return {
            label,
            font: {
              size: 24,
              weight: "bold",
            },
          };
        },
      },
    },
  };

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
            tension: 0.1,
          };
        }),
      };

      setChartData(chartData);
    }
  }, [masterData, securityTimeSeries]);

  return (
    <Box
      sx={{
        display: "flex",
        ml: 53,
        backgroundColor: "white",
        mt: "35px",
        width: "1500px",
        borderRadius: "0.75rem",
      }}
    >
      {chartData.length === 0 ? null : (
        <Line data={chartData} options={options} />
      )}
    </Box>
  );
};
