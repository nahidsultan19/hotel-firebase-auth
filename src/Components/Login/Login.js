import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';
import auth from '../../firebase.init';

// import { signInWithEmailAndPassword } from 'firebase/auth';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import Loading from '../Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';


const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')



    // const { signUpWithGoogle, signInWithGithub } = useFirebase();
    const [signInWithEmailAndPassword, user, loading, error,] = useSignInWithEmailAndPassword(auth);

    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || '/';

    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }

    const handlePasswordBlur = event => {
        setPassword(event.target.value);
    }

    if (user) {
        navigate(from, { replace: true });
    }

    const handleUserSignIn = event => {
        event.preventDefault()
        // signInWithEmailAndPassword(auth, email, password)
        //     .then(result => {
        //         const user = result.user;
        //         console.log(user);
        //     })
        //     .catch(error => {
        //         console.error(error);
        //     })
        signInWithEmailAndPassword(email, password);

    }

    return (
        <div className='w-25 h-auto mx-auto mt-3 mb-3 shadow p-3'>
            <h2 className='text-center'>Sign In</h2>
            <hr />
            <Form onSubmit={handleUserSignIn}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control onBlur={handleEmailBlur} type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control onBlur={handlePasswordBlur} type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary w-100" type="submit">
                    Login
                </Button>
            </Form>
            <p>{loading}</p>
            <p>{error}</p>
            <p className='mt-1 text-muted'>Need an Account? <Link to='/signup'>Create an Account</Link> </p>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Login;