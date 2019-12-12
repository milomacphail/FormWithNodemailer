import React, { Component } from 'react';
import FormUserDetails from './FormUserDetails';

export class UserForm extends Component {

    state={
        step: 1,
        firstName: '',
        lastName: '',
        email: '',
        city: '',
        country: ''
}

//Proceed
advanceStep = () => {
    const { step } = this.state;
    this.setState({
        step: step + 1
    });
}

//Reverse Step
prevStep  = () => {
    const { step } = this.state;
    this.setState({
        step: step - 1
    });
}

//handle fields change
handleChange = input => e => {
    this.setState({input: e.target.value});
}
    render() {
        const { step } = this.state;
        const { firstName, lastName, email, city, country } = this.state;
        const values = { firstName, lastName, email, city, country }

        switch(step) {
            case 1:         
                return (
                <FormUserDetails 
                    nextStep = {this.nextStep}
                    handleChange = {this.handleChange}
                    values = {values}
                />
            )
            case 2:         
                return <h1>Form personal details</h1>;
            case 3:         
                return <h1>Confirm</h1>;
            case 4:         
                return <h1>Success</h1>;
        }
    }
}

export default UserForm;
