import { useState, useEffect } from "react";
import FormControl from "@mui/joy/FormControl";
import Switch from "@mui/joy/Switch";
import { useDispatch } from "react-redux";
import { getMasterData } from "../../store/actionCreators/valuation";
import * as styles from "./styles";

export const SwitchLabel = () => {
  const dispatch = useDispatch();

  const [checked, setChecked] = useState<boolean>(false);

  useEffect(() => {
    if (checked) {
      dispatch<any>(getMasterData("AED"));
    } else {
      dispatch<any>(getMasterData());
    }
  }, [checked]);

  const handleSwitch = (event: any) => {
    setChecked(event.target.checked);
  };

  return (
    <FormControl orientation="horizontal">
      <Switch
        checked={checked}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          handleSwitch(event)
        }
        color={checked ? "primary" : "neutral"}
        variant="solid"
        endDecorator={checked ? "AED" : "USD"}
        slotProps={{
          endDecorator: {
            sx: styles.switchEnd,
          },
        }}
        sx={styles.switchStyle}
      />
    </FormControl>
  );
};
