import { Alert, Grid, Link, TextField } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import googleIcon from "../../assets/googleIcon.png"
import React, { useMemo, useState } from 'react'
import { useForm } from "../../hooks/useForm";
import { startCreatingUserWithEmailPassword } from "../../store/auth/thunks";
import { useDispatch, useSelector } from "react-redux";

const formData = {
  displayName:'',
  email:'',
  password:'',
}

const formValidations = {
  email: [ (value) => value.includes('@'), 'El correo debe de tener una @'],
  password: [ (value) => value.length >= 6, 'La contraseña debe de tener 6 o más letras.'],
  displayName: [ (value) => value.length >= 1, 'El nombre de usuario es obligatorio.'],
}

export const RegisterPage = () => {

  const dispatch = useDispatch();
  const [formSubmitted, setFormSubmitted] = useState(false);
  const { status, errorMessage } = useSelector( state => state.auth );
  const isCheckingAuthentication = useMemo( () => status === 'checking', [status]);

  const {displayName, email, password, onInputChange, formState, displayNameValid, emailValid, passwordValid} = useForm(formData, formValidations)

  const onSubmit = (event) => {
    event.preventDefault();
    setFormSubmitted(true);

    // if ( !isFormValid ) return;

    dispatch( startCreatingUserWithEmailPassword(formState) );
  }
  return (
    <Grid
    container
    spacing={0}
    direction="column"
    alignItems="center"
    justifyContent="center"
    sx={{ minHeight: "100vh", backgroundColor: "primary.main", padding: 4 }}
  >
     <div className="title-app">
        <h1 className="loginTitle-h1">Journal App</h1>
      </div>
    <div className="form-container">
      <form onSubmit={onSubmit} className="form-register animate__animated animate__fadeIn animate__faster">
        
        <h3 className="registerTitle-h3">Registrate</h3>
        <Grid>
          <p className="correo-p">Nombre de Usuario:</p>
          <TextField
            type="text" 
            placeholder="Nickname" 
            name="displayName" 
            value={displayName} 
            onChange={onInputChange} 
            fullWidth 
            error={!!displayNameValid && formSubmitted}
            helperText={displayNameValid}
            />
        </Grid>
        <Grid>
          <p className="correo-p">Correo Electrónico:</p>
          <TextField 
          type="email" 
          placeholder="correo@google.com" 
          name="email" value={email} 
          onChange={onInputChange} 
          fullWidth 
          error={!!emailValid && formSubmitted}
          helperText={emailValid}
          />
        </Grid>
       
        <Grid>
          <p className="contraseña-p">Contraseña:</p>
          <TextField 
          type="password" 
          placeholder="Contraseña" 
          name="password" value={password} 
          onChange={onInputChange} 
          fullWidth 
          error={!!passwordValid && formSubmitted}
          helperText={passwordValid}
          />
        </Grid>
        <Grid
        display={!!errorMessage ? '' : 'none'}
        >
          <Alert severity="error">
            {errorMessage}
          </Alert>
        </Grid>
        <button disabled = {isCheckingAuthentication} type="submit" className="register-inputButton">
        <p>Registrarse</p>
      </button>
      <div className="sinCuenta-container">
        <p className="sinCuenta-p">Ya tienes cuenta? Inicia sesión</p>
        <Link component={RouterLink} className="sinCuenta-button" to="/auth/login">aquí</Link>
      </div>
      </form>
    </div>
  </Grid>
  )
}
