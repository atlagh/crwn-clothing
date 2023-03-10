import { useState } from 'react';
import { signInWithGooglePopup, signInAuthUserWithEmailAndPassword } from '../../utils/firebase/firebase.utils';
import FormInput from '../form-input/form-input.component';
import './sign-in-form.styles.scss';
import Button from '../button/button.component'; 



const defaultFormFields = {
    email: '',
    password: ''
}
const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password} = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormFields);
    }

    const signInWithGoogle = async () => {
        await signInWithGooglePopup();
    }

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormFields({...formFields,  [name]: value});

    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        try{
            await signInAuthUserWithEmailAndPassword(email, password);
            resetFormFields();
        }catch (err) {
            switch(err.code){
                case 'auth/wrong-password':
                    alert("wrong password :/");
                break;
                case 'auth/user-not-found':
                    alert("wrong email :/");
                break;
                default: console.log(err);
            }
        }
    }

    return(
        <div className='sign-up-container'>
            <h2>Already have an account?</h2>
            <span>sign up with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput label="Email" type="email" required onChange={handleChange} name="email" value={email} />
                <FormInput label="Password" type="password" required onChange={handleChange} name="password" value={password} />
                <div className='buttons-container'>
                    <Button type="submit" >Sign In</Button>
                    <Button type="button" onClick={signInWithGoogle} buttonType="google" >Google Sign In</Button>
                </div>
                
            </form>
        </div>
    )
}

export default SignInForm;