import { signInWithGooglePopup, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";
import SignUpForm from "../../components/sign-up-form/sign-up-form.component";

const SignIn = () => {
    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup();
        const userDocref = await createUserDocumentFromAuth(user);
        console.log(userDocref);
    }
    return(
        <div>
            <h1>signin</h1>
            <button onClick={logGoogleUser}>
                sign in with google popup
            </button>
            <SignUpForm />
        </div>
        
    )
}

export default SignIn;