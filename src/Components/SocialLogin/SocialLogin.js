import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { AiFillGithub } from 'react-icons/ai';
import auth from '../../firebase.init';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import Loading from '../Loading/Loading';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, githubUser, githubLoading, githubError] = useSignInWithGithub(auth);

    let errorElement;


    if (loading || githubLoading) {
        return <Loading></Loading>
    }
    if (error || githubError) {
        errorElement = <p className='text-danger'>{error?.message} {githubError?.message}</p>
    }

    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='bg-secondary w-50'></div>
                <p className='mt-2 px-2'>or</p>
                <div style={{ height: '1px' }} className='bg-secondary w-50'></div>
            </div>
            {errorElement}
            <div className=''>
                <button onClick={() => signInWithGoogle()} className='btn btn-outline-primary w-100 my-2'>
                    <FcGoogle></FcGoogle>
                    <span className='px-2'>Google Sign In</span>
                </button>
                <button onClick={() => signInWithGithub()} className='btn btn-outline-primary w-100'>
                    <AiFillGithub></AiFillGithub>
                    <span className='px-2'>Github Sign In</span>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;