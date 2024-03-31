import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "../../firebase/firebase.init";
import { useState } from "react";

const Login = () => {
    const [user, setUser] = useState({})
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        signInWithPopup(auth, provider)
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
        <div className="flex flex-col items-center justify-center">
            <button onClick={handleGoogleSignIn} className="btn border rounded-lg p-4">Google Login</button>
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