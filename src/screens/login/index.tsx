import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import LoadingButton from "@mui/lab/LoadingButton";
import { TextField, Box, Typography } from "@mui/material";
import * as Styles from "./styles";
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
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    appReducer: { loginError, isProcessing },
  } = useSelector((state: any) => state);

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
    <Styles.CustomizedContainer maxWidth="md">
      <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 5 }}>
        <Box sx={Styles.loginBox}>
          <TerrainIcon sx={Styles.loginIcon} />
          <TextField
            variant="outlined"
            required
            fullWidth
            id="name"
            label="User Name"
            name="name"
            margin="dense"
            onChange={handleInputChange}
            sx={Styles.inputText}
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
            sx={Styles.inputText}
            inputProps={{ style: { fontSize: 30 } }}
            InputLabelProps={{ style: { fontSize: 25 } }}
          />
          {loginError && (
            <Typography variant="h5" sx={Styles.errorText}>
              {loginError}
            </Typography>
          )}
          <LoadingButton
            size="medium"
            type="submit"
            variant="contained"
            loading={isProcessing}
            disabled={handleDisabled()}
            sx={Styles.button}
          >
            {Strings.SIGN_IN}
          </LoadingButton>
        </Box>
      </Box>
    </Styles.CustomizedContainer>
  );
};
export default LoginScreen;
