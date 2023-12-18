import { useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

function Home() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isSignUpActive, setIsSignUpActive] = useState(true);
    const handleMethodChange = () => {
        setIsSignUpActive(!isSignUpActive)
    }

    const handleSignUp = () => {
        if(!email || !password) return;
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCred) => {
            const user = userCred.user;
            console.log(user);
        })
        .catch((error) => {
            const errorCode  =  error.code;
            const errorMsg = error.message;
            console.log(errorCode, errorMsg);
        })
    }

    const handleSignIn = () => {
        if(!email || !password) return;
        signInWithEmailAndPassword(auth, email, password)
        .then((userCred) => {
            const user = userCred.user;
            console.log(user);
        })
        .catch((error) => {
            const errorCode  =  error.code;
            const errorMsg = error.message;
            console.log(errorCode, errorMsg);
        })
    }

    const handleEmailChange = (event) => setEmail(event.target.value);
    const handlePasswordChange = (event) => setPassword(event.target.value);

    return (
        <div>
            <h1>Home</h1>
            <form>
                {isSignUpActive && <legend>Sign Up</legend>}
                {!isSignUpActive && <legend>Sign In</legend>}
                <fieldset>
                    <ul>
                        <li>
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" onChange={handleEmailChange} />
                        </li>
                        <li>
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" onChange={handlePasswordChange} />
                        </li>
                    </ul>
                    {isSignUpActive && <button type="button" className="btn btn-dark" onClick={handleSignUp}>Sign Up</button>}
                    {!isSignUpActive && <button type="button" className="btn btn-dark" onClick={handleSignIn}>Sign In</button>}
                </fieldset>
                {isSignUpActive && <a onClick={handleMethodChange}> Login</a>}
                {!isSignUpActive && <a onClick={handleMethodChange}> Create an Account!</a>}
            </form>
        </div>
    );
}

export default Home;
