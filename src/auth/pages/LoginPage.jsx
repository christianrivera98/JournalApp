import { Grid, TextField, Link, Alert } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import googleIcon from "../../assets/googleIcon.png"
import React, { useMemo } from "react";
import "./LoginPage.scss";
import { useForm } from "../../hooks/useForm";
import { useDispatch, useSelector } from "react-redux";
import { checkingAuthentication, startGoogleSignIn, startLoginWithEmailPassword } from "../../store/auth/thunks";


const formData = {
  email:'',
  password:'',
}

export const LoginPage = () => {


  const { status, errorMessage } = useSelector( state => state.auth );
  const dispatch = useDispatch();

  const {email, password, onInputChange} = useForm(
    formData
  )

  const isAuthenticating = useMemo(() => status === 'checking', [status])

  const onSubmit = (event) => {
    event.preventDefault();

    // dispatch(checkingAuthentication());
    dispatch(startLoginWithEmailPassword({email, password}));
  }

  const onGoogleSignIn = () => {
    dispatch(startGoogleSignIn());
  }




  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: "100vh", backgroundColor: "primary.main", padding: 1 }}
    >
      <div className="title-app">
        <h1 className="loginTitle-h1">Journal App</h1>
      </div>
      <div className="form-container">
        <form 
        aria-label="submit-form"
        onSubmit={onSubmit} 
        className="form-login animate__animated animate__fadeIn animate__faster">
          <h3 className="loginTitle-h3">Inicia Sesión</h3>
          <Grid className="correoGrid">
            <p className="correo-p">Correo Electrónico:</p>
            <TextField 
            type="email" 
            inputProps={{
              'data-testid': 'email'
            }}
            placeholder="correo@google.com" 
            fullWidth name="email" 
            value={email} 
            onChange={onInputChange}/>
          </Grid>
          <Grid>
            <p className="contraseña-p">Contraseña:</p>
            <TextField 
            inputProps={{
              'data-testid': 'password'
            }}
             type="password" 
             placeholder="Contraseña" 
             fullWidth name="password" 
             value={password} 
             onChange={onInputChange}/>
          </Grid>
          <Grid
          sx={{mt: 1}}
        display={!!errorMessage ? '' : 'none'}
        >
          <Alert severity="error">
            {errorMessage}
          </Alert>
        </Grid>
          <button disabled = {isAuthenticating} className="buttonLogin" type="submit" >
            Login
          </button>
        <div className="sinCuenta-container">
          <p className="sinCuenta-p">Sin cuenta? Registrate</p>
          <Link component={RouterLink} className="sinCuenta-button" to="/auth/register">aquí</Link>
          <p className="sinCuenta-p">  o también puedes: </p>
        </div>
        
        <button aria-label="google-btn" disabled={isAuthenticating} onClick={onGoogleSignIn} className="loginGoogle-Container">
          <img src={googleIcon} alt="googleIcon" />
          <p>Iniciar con Google</p>
        </button>
        </form>
      </div>
    </Grid>
  );
};
