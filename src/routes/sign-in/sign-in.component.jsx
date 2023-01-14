import { signInWithGooglePopup, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";


const SignIn = () => {
    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup();
        const userDocref = await createUserDocumentFromAuth(user);
    }
    return(
        <div>
            <h1>signin</h1>
            <button onClick={logGoogleUser}>
                sign in with google popup
            </button>
        </div>
        
    )
}

export default SignIn;