import { useEffect, useState } from "react"
import auth from '../firebase.init';
import { GoogleAuthProvider, GithubAuthProvider, signInWithPopup, onAuthStateChanged, signOut } from 'firebase/auth';
import { useSignInWithGoogle } from "react-firebase-hooks/auth";



const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();


const useFirebase = () => {
    const [user, setUser] = useState([]);
    const [signInWithGoogle, loading, error] = useSignInWithGoogle(auth);
    // user create using google
    const signUpWithGoogle = () => {
        console.log('google clicked...')
        // signInWithPopup(auth, googleProvider)
        //     .then(result => {
        //         const user = result.user;
        //         setUser(user)
        //         console.log(user);
        //     })
        //     .catch(error => {
        //         console.error(error);
        //     })
        signInWithGoogle()
    }

    const logOut = () => {
        signOut(auth)
            .then(() => {
                console.log('Sign Out successful')
            })

    }

    const signInWithGithub = () => {
        console.log('github login..')
        signInWithPopup(auth, githubProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => {
                console.error(error);
            })
    }

    // for display logout button
    useEffect(() => {
        onAuthStateChanged(auth, user => {
            setUser(user);
        })
    }, [])


    return { signUpWithGoogle, user, logOut, signInWithGithub };

}
export default useFirebase;