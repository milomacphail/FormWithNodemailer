import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import TextField from "material-ui/TextField";
import { Button } from '@material-ui/core';

export class FormUserDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <MuiThemeProvider>
        <React.Fragment>
          <AppBar title="Enter User Details" />
          <TextField
            hintText="Enter Your First Name"
            floatingLabelText="First Name"
            onChange={handleChange("firstName")}
            defaultValue={values.firstName}
          />
          <br></br>
          <TextField
            hintText="Enter Your Last Name"
            floatingLabelText="Last Name"
            onChange={handleChange("lastName")}
            defaultValue={values.lastName}
          />
          <br></br>
          <TextField
            hintText="Enter Your E-mail"
            floatingLabelText="E-mail"
            onChange={handleChange("email")}
            defaultValue={values.email}
          />
          <br></br>
          <TextField
            hintText="Enter Your City"
            floatingLabelText="City"
            onChange={handleChange("city")}
            defaultValue={values.city}
          />
          <br></br>
          <TextField
            hintText="What country do you live in?"
            floatingLabelText="Country"
            onChange={handleChange("country")}
            defaultValue={values.country}
          />
          <br />
          <Button variant="contained" color="primary">
            Continue
          </Button>
        </React.Fragment>
      </MuiThemeProvider>
    );
  }
}

export default FormUserDetails;
