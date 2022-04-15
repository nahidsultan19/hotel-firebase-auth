import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';
import auth from '../../firebase.init';

import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import Loading from '../Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';

const SignUp = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const { signUpWithGoogle, signInWithGithub } = useFirebase();
    const [createUserWithEmailAndPassword, user, loading, error,] = useCreateUserWithEmailAndPassword(auth);

    const handleNameBlur = event => {
        setName(event.target.value);
    }
    const handleEmailBlur = event => {
        setEmail(event.target.value);
        console.log('login')
    }
    const handlePasswordBlur = event => {
        setPassword(event.target.value);
    }

    if (error) {
        return <p className='text-center text-danger'>{error.message}</p>
    }

    if (loading) {
        return <Loading></Loading>
    }



    // create user with email and passwor
    const handleCreateUser = (event) => {
        event.preventDefault()
        // createUserWithEmailAndPassword(auth, email, password)
        //     .then(result => {
        //         const user = result.user;
        //         console.log(user);
        //     })
        createUserWithEmailAndPassword(email, password);

    }




    return (
        <div className='w-25 h-auto mx-auto mt-3 mb-3 shadow p-3'>
            <h2 className='text-center'>Sign Up</h2>
            <hr />
            <Form onSubmit={handleCreateUser}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control onBlur={handleNameBlur} type="text" placeholder="Enter Name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onBlur={handleEmailBlur} type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onBlur={handlePasswordBlur} type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Register
                </Button>
            </Form>
            <p>{loading}</p>
            <p>{error}</p>
            <p className='text-muted mt-1'>Already have an Account ? <Link to='/login'>Login</Link></p>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default SignUp;