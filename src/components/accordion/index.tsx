import { SyntheticEvent, useState } from "react";
import {
  Box,
  Typography,
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import * as Strings from "../../constants/index";

export const ControlledAccordions = (props: any) => {
  const { securityValuations } = props;
  const [expanded, setExpanded] = useState<string | false>(false);

  const handleChange =
    (panel: string) => (_event: SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  const stockDetails = [
    {
      key: Strings.MARKET_PRICE,
      value: securityValuations?.marketPrice,
    },
    {
      key: Strings.MARKET_VALUE,
      value: securityValuations?.marketValue,
    },
    {
      key: Strings.NET_QTY,
      value: securityValuations?.units,
    },
  ];

  const renderStockDetails = () =>
    securityValuations?.map((item: any) => (
      <Accordion
        key={item.security.name}
        expanded={expanded === item.security.name}
        onChange={handleChange(item.security.name)}
        sx={{ backgroundColor: "#0d1117", mb: 2, borderRadius: 1 }}
      >
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <img
            src={item.security.logoUrl}
            alt={item.security.name}
            width={50}
            height={50}
          />

          <Typography
            sx={{
              display: "flex",
              ml: 5,
              alignItems: "center",
              color: "#7F7F7F",
            }}
            variant="h5"
          >
            {item.security.name}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            {stockDetails.map((item: any) => (
              <>
                <Typography sx={{ color: "text.secondary" }}>
                  {item.key}
                </Typography>
                <Typography sx={{ color: "text.secondary" }}>
                  {item.value}
                </Typography>
              </>
            ))}
          </Box>
        </AccordionDetails>
      </Accordion>
    ));

  return <>{renderStockDetails()}</>;
};
