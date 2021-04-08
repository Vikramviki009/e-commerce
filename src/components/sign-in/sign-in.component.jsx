import React, { useState } from 'react';
import { connect } from 'react-redux';
import { emailSignInStart, googleSignInStart } from '../../redux/user/user.actions';
import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';
import './sign-in.styles.scss';

const SignIn = ({ emailSignInStart, googleSignInStart}) => {
    const [ userCredentials, setUserCredentials ] = useState({ email: '', password: ''})

    const { email, password } = userCredentials;


    const handleSubmit = async (event) => {
        event.preventDefault();

        emailSignInStart(email, password)
    };

    const handleChange = (event) => {
        const { name, value } = event.target;

        setUserCredentials({ ...userCredentials, [name]: value });
    }

    return(
        <div className="sign-in">
            <h1>I already have an account</h1>
            <span>Sign in with email and password</span>

           <form onSubmit={handleSubmit} >
                <FormInput 
                  type="email" 
                  name="email" 
                  value={email} 
                  handleChange={handleChange} 
                  label="Email"
                  required />
                <FormInput 
                  type="password" 
                  name="password" 
                  value={password} 
                  handleChange={handleChange} 
                  label="Password"
                required />
                <div className='buttons'>
                    <CustomButton type="submit">Sign In</CustomButton>
                    <CustomButton type="button" onClick={googleSignInStart} isGoogleSignIn>Sign In With Google</CustomButton>
                </div>
            </form>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    googleSignInStart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password}))
});

export default connect(null, mapDispatchToProps)(SignIn);