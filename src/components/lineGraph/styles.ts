export const options = {
  elements: {
    line: {
      borderWidth: 4,
    },
  },
  plugins: {
    title: {
      display: true,
      text: "Market Value Chart",
      font: {
        size: 30,
      },
      padding: {
        top: 10,
        bottom: 30,
      },
    },
    legend: {
      display: true,
      position: "right" as const,
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

export const lineBox = {
  display: "flex",
  backgroundColor: '#0d1117', 
  mt: "35px",
  width: "1500px",
  borderRadius: "0.75rem",
};
