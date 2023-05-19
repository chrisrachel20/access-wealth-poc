import { useState, useEffect } from "react";
import { TextField, Button, Box } from "@mui/material";
import { CustomizedContainer } from "./styles";
import {AxiosInstance} from "../../network/axiosInstance";
import { useNavigate } from "react-router-dom";
import { AUTHENTICATION } from '../../network/endpoints';

const LoginScreen = () => {
  const [credentials, setCredentials] = useState({ name: "", password: "" });
   const navigate = useNavigate();

  useEffect(() => {
    localStorage.clear();
  }, []);

  const handleInputChange = (e: any) => {
    setCredentials({
      ...credentials,
      [e.currentTarget.id]: e.currentTarget.value,
    });
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    AxiosInstance.post(AUTHENTICATION, {
        username: credentials.name,
        password: credentials.password
    }).then((data: any) => {
      console.log('data', data)
      localStorage.setItem('token', data.data.token);
      navigate('/dashboard')
    }).catch((err: any) => {
      console.log('error', err);
    });
  };

  return (
    <CustomizedContainer maxWidth="md">
      <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
        <TextField
          variant="outlined"
          required
          fullWidth
          id="name"
          label="User Name"
          name="name"
          margin="dense"
          onChange={handleInputChange}
          sx={{ mt: 3, mb: 5 }}
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
          sx={{ mb: 5 }}
        />
        <Button
          size="medium"
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2, height: 50 }}
        >
          Sign In
        </Button>
      </Box>
    </CustomizedContainer>
  );
};
export default LoginScreen;
