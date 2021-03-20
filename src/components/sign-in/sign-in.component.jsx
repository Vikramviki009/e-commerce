import React from 'react';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';
import CustomButton from '../custom-button/custom-button.component';
import FormInput from '../form-input/form-input.component';
import './sign-in.styles.scss';

class SignIn extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async (event) => {
        event.preventDefault();

        const { email, password } = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({ email: '', password: '' })
        } catch (error) {
            console.log(error);
            alert("Please check the Sign in Credentials")
        }
    };

    handleChange = (event) => {
        const { name, value } = event.target;

        this.setState({ [name]: value });
    }

    render(){
        return(
            <div className="sign-in">
                <h1>I already have an account</h1>
                <span>Sign in with email and password</span>

                <form onSubmit={this.handleSubmit} >
                    <FormInput 
                    type="email" 
                    name="email" 
                    value={this.state.email} 
                    handleChange={this.handleChange} 
                    label="Email"
                    required />
                    <FormInput 
                    type="password" 
                    name="password" 
                    value={this.state.password} 
                    handleChange={this.handleChange} 
                    label="Password"
                    required />
                    <div className='buttons'>
                        <CustomButton type="submit">Sign In</CustomButton>
                        <CustomButton type="button" onClick={signInWithGoogle} isGoogleSignIn>Sign In With Google</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn;