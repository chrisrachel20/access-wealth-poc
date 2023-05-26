export const options = {
  plugins: {
    legend: {
      display: true,
      position: "bottom" as const,
      labels: {
        color: "#7F7F7F",
        font: {
          size: 20,
          weight: "bold",
        },
        padding: 20,
      },
    },
  },
  layout: {
    padding: 30,
  },
  tooltips: {
    callbacks: {
      label: (context: any) => {
        const label = context.label || "";
        return {
          label,
          font: {
            size: 26,
            weight: "bold",
          },
        };
      },
    },
  },
};

export const pieBox = { display: "flex", ml: 2, height: "550px" };
