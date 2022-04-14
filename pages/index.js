import { useState } from "react";
import Head from "next/head";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Script from 'next/script'

function Copyright(props) {
  return (
    <Typography variant='body2' color='text.secondary' align='center' {...props}>
      {"Copyright © "}
      <Link color='inherit' href='https://mui.com/'>
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [accept, setAccept] = useState(false);

  const handleFormFirstName = (e) => {
    setFirstName(e.target.value);
  };
  const handleFormLastName = (e) => {
    setLastName(e.target.value);
  };
  const handleFormEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleFormPassword = (e) => {
    setPassword(e.target.value);
  };
  const handlAcceptPolitic = (e) => {
    if (!accept) {
      setAccept(true);
    } else {
      setAccept(false);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setEmail("");
    setPassword("");
    setFirstName("");
    setLastName("");
    setAccept(false);

    /*    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
      imie: data.get('firstName'),
      nazwisko: data.get('lastName'),
      akceptacja: data.get('accept'),
    });

data = {


      email: data.get('email'),
      password: data.get('password'),
      imie: data.get('firstName'),
      nazwisko: data.get('lastName'),
      akceptacja: data.get('accept'),

} */

    const data = {
      email: event.target.email.value,
      password: event.target.password.value,
      imie: event.target.firstName.value,
      nazwisko: event.target.lastName.value,
      akceptacja: event.target.accept.checked,
    };

    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/form";

    const options = {
      // The method is POST because we are sending data.
      method: "POST",
      // Tell the server we're sending JSON.
      headers: {
        "Content-Type": "application/json",
      },
      // Body of the request is the JSON data we created above.
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);
    const result = await response.json();
    /*  const result = await response.json() */
    alert(`Formularz został wysłany ${result.data} `);
  };

  return (
    <>
     <Head>
      <title>PWA App</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
     
     </Head>
      <ThemeProvider theme={theme}>
        <Container component='main' maxWidth='xs'>
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}>
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component='h1' variant='h5'>
              Sign up
            </Typography>
            <Box component='form' action='/api/form' noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete='given-name'
                    name='firstName'
                    required
                    fullWidth
                    id='firstName'
                    label='First Name'
                    autoFocus
                    onChange={handleFormFirstName}
                    value={firstName}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id='lastName'
                    label='Last Name'
                    name='lastName'
                    autoComplete='family-name'
                    onChange={handleFormLastName}
                    value={lastName}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id='email'
                    label='Email Address'
                    name='email'
                    autoComplete='email'
                    onChange={handleFormEmail}
                    value={email}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name='password'
                    label='Password'
                    type='password'
                    id='password'
                    autoComplete='new-password'
                    onChange={handleFormPassword}
                    value={password}
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={<Checkbox checked={accept} onChange={handlAcceptPolitic} name='accept' id='accept' color='primary' />}
                    label='Zapoznałem się z polityka prywatności oraz z regulaminem strony.'
                  />
                </Grid>
              </Grid>
              <Button className='bg-blue-800' type='submit' fullWidth variant='contained' sx={{ mt: 3, mb: 2 }}>
                Sign Up
              </Button>
              <Grid container justifyContent='flex-end'>
                <Grid item>
                  <Link href='#' variant='body2'>
                    Already have an account? Sign in
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
          <Copyright sx={{ mt: 5 }} />
        </Container>
      </ThemeProvider>
      <Script src="/app1.js" />
    </>
  );
}
