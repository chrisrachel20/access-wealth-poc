export const options = {
    plugins: {
      legend: {
        display: true,
        position: "right" as const,
        labels: {
          color: "#001E3C",
          font: {
            size: 20,
          },
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
              size: 20,
              weight: "bold",
            },
          };
        },
      },
    },
  };