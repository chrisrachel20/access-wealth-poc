import { styled } from "@mui/material/styles";
import { Container } from "@mui/material";

export const CustomizedContainer = styled(Container)`
  background-color: #f0f8ff;
  margin: auto;
  border-radius: 20px;
`;

export const loginBox = {
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
};

export const loginIcon = { fontSize: 70, mb: 8, color: "#001E3C" };

export const errorText = { mt: 1, mr: 2, color: "red" };

export const button = {
  mt: 5,
  mb: 10,
  height: 60,
  width: 200,
  fontSize: 20,
  backgroundColor: "#001E3C",
  borderRadius: 3,
  "&.Mui-disabled": {
    background: "#eaeaea",
    color: "#7F7F7F",
  },
};

export const inputText = { mb: 5, width: 500 };
