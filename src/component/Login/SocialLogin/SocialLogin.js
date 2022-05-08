import React, { useEffect } from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import googleIcon from '../../../images/icon/google.png'
import github from '../../../images/icon/github.png'
import { useLocation, useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import Loading from '../../Shared/Loading/Loading';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth)
    const navigate = useNavigate()
    // let errorElement


    useEffect(() => {
        if (error) {
            toast(`${error.message}`)
        }

        if (loading) {
            <Loading></Loading>
           
        }
    }, [error, loading])

    if(user){
        toast("Login succesfull")
    }

    const location = useLocation();
    const from = location.state?.from?.pathname || '/'
    if (user) {
        navigate(from, { replace: true })
    }
    return (
        <div className='d-block w-50 mx-auto'>
            <div className=' d-flex justify-content-center align-items-center'>
                <div style={{ height: '1px' }} className='bg-secondary w-50'></div>
                <p className='mt-2 px-2'>or</p>
                <div style={{ height: '1px' }} className='bg-secondary w-50'></div>
            </div>
            <div>
                {/* {errorElement} */}
                <button onClick={() => signInWithGoogle()} className='btn btn-light d-block mx-auto my-2'><img src={googleIcon} alt="" />
                    <span className='px-2'>Google Sign In</span>
                </button>
                
            </div>
        </div>
    );
};

export default SocialLogin;