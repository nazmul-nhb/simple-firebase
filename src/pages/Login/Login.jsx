import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
import app from "../../firebase/firebase.init";
import { useState } from "react";

const Login = () => {
    const [user, setUser] = useState(null)
    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider()

    const handleGoogleSignIn = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                setUser(loggedUser);
            })
            .catch(error => {
                console.error(error);
            })
    }

    const handleGoogleSignOut = () => {
        signOut(auth)
            .then(result => {
                console.log(result);
                setUser(null);
            })
            .catch(error => {
                console.error(error);
            })
    }

    const handleGithubSignIn = () => {
        signInWithPopup(auth, githubProvider)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                setUser(loggedUser);
            })
            .catch(error => {
                console.error(error);
            })
    }

    return (
        <div className="flex flex-col items-center justify-center gap-6">
            {
                user
                    ? <button onClick={handleGoogleSignOut} className="btn border rounded-lg p-4">Log Out</button> :
                    <>
                        <button onClick={handleGoogleSignIn} className="btn border rounded-lg p-4">Google Login</button>
                        <button onClick={handleGithubSignIn} className="btn border rounded-lg p-4">Github Login</button>
                    </>
            }

            {
                user && <div className="my-8 space-y-8">
                    <h3 className="text-2xl font-medium">User: {user?.displayName}</h3>
                    <h3 className="text-2xl font-medium">Email: {user?.email}</h3>
                    <img src={user?.photoURL} alt="Profile Picture" />
                </div>
            }
        </div>
    );
};

export default Login;