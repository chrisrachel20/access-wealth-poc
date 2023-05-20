import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import LoadingButton from "@mui/lab/LoadingButton";
import { TextField, Box, Typography } from "@mui/material";
import { CustomizedContainer } from "./styles";
import { AxiosInstance } from "../../network/axiosInstance";
import { useNavigate } from "react-router-dom";
import { AUTHENTICATION } from "../../network/endpoints";
import TerrainIcon from "@mui/icons-material/Terrain";
import {
  setLoginError,
  setProcessingTrue,
  setProcessingFalse,
} from "../../store/actionCreators/app";
import * as Strings from "../../constants/index";

const LoginScreen = () => {
  const {
    appReducer: { loginError, isProcessing },
  } = useSelector((state: any) => state);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [credentials, setCredentials] = useState({ name: "", password: "" });

  useEffect(() => {
    localStorage.clear();
  }, []);

  const handleInputChange = (e: any) => {
    dispatch(setLoginError(""));
    setCredentials({
      ...credentials,
      [e.currentTarget.id]: e.currentTarget.value,
    });
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    dispatch(setProcessingTrue());
    AxiosInstance.post(AUTHENTICATION, {
      username: credentials.name,
      password: credentials.password,
    })
      .then((data: any) => {
        dispatch(setProcessingFalse());
        localStorage.setItem("token", data.data.token);
        navigate("/dashboard");
      })
      .catch((err: any) => {
        dispatch(setProcessingFalse());
        dispatch(setLoginError(Strings.LOGIN_ERROR));
      });
  };

  const handleDisabled = () => {
    return !credentials.name || !credentials.password;
  };

  return (
    <CustomizedContainer maxWidth="md">
      <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 5 }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <TerrainIcon sx={{ fontSize: 70, mb: 5, color: "#001E3C" }} />

          <TextField
            variant="outlined"
            required
            fullWidth
            id="name"
            label="User Name"
            name="name"
            margin="dense"
            onChange={handleInputChange}
            sx={{ mt: 3, mb: 5, width: 500 }}
            inputProps={{ style: { fontSize: 30 } }}
            InputLabelProps={{ style: { fontSize: 25 } }}
          />
          <TextField
            variant="outlined"
            required
            fullWidth
            id="password"
            label="Password"
            name="password"
            type="password"
            margin="dense"
            onChange={handleInputChange}
            sx={{ mb: 5, width: 500 }}
            inputProps={{ style: { fontSize: 30 } }}
            InputLabelProps={{ style: { fontSize: 25 } }}
          />
          {loginError && (
            <Typography variant="h5" sx={{ mt: 1, mr: 2, color: "red" }}>
              {loginError}
            </Typography>
          )}
          <LoadingButton
            size="medium"
            type="submit"
            variant="contained"
            loading={isProcessing}
            disabled={handleDisabled()}
            sx={{
              mt: 5,
              mb: 10,
              height: 60,
              width: 200,
              fontSize: 20,
              backgroundColor: "#001E3C",
              borderRadius: 3,
              "&.Mui-disabled": {
                background: "#eaeaea",
                color: "#808080",
              },
            }}
          >
            {Strings.SIGN_IN}
          </LoadingButton>
        </Box>
      </Box>
    </CustomizedContainer>
  );
};
export default LoginScreen;
