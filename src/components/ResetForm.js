import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Grid,
  Paper,
  TextField,
  Box,
  Container,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    marginTop: "30px",
  },
  paper: {
    backgroundColor: "#c2ede4",
  },
  submitButton: {
    margin: "15px",
  },
  loginTitle: {
    fontSize: "25px",
    fontFamily: "Roboto",
  },
  innerPaper: {
    marginTop: "10px",
    marginBottom: "20px",
  },
});

function ResetForm({ ResetPassword, error }) {
  const classes = useStyles();

  const [email, setEmail] = useState({ email: "" });

  const submitHandler = (e) => {
    e.preventDefault();
    ResetPassword(JSON.stringify(email.email));
  };

  return (
    <form onSubmit={submitHandler}>
      <Container maxWidth="sm" className={classes.root}>
        <Paper className={classes.paper} elevation={3}>
          <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={2}
          >
            <h2 className={classes.loginTitle}>Request New Password</h2>
            <Box width="70%">
              <Paper className={classes.innerPaper} elevation={2}>
                <Grid
                  container
                  direction="column"
                  justifyContent="center"
                  alignItems="center"
                  spacing={4}
                >
                  <Grid item>
                    <TextField
                      label="Enter Email"
                      variant="standard"
                      type="email"
                      onChange={(e) => setEmail({ email: e.target.value })}
                      value={email.email}
                    ></TextField>
                  </Grid>
                </Grid>
                {error !== "" ? <div className="error">{error}</div> : ""}
              </Paper>
            </Box>
            <Link to="/login">Return to login screen</Link>
            <Button
              className={classes.submitButton}
              variant="contained"
              type="submit"
              value="REQUEST PASSWORD"
            >
              Request Password
            </Button>
          </Grid>
        </Paper>
      </Container>
    </form>
  );
}

export default ResetForm;
