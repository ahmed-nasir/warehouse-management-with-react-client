import React from 'react';
import {useCreateUserWithEmailAndPassword} from 'react-firebase-hooks/auth'
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';

const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);

      const navigate= useNavigate()

    const handleRegister = async(event)=>{
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.pass.value;
        console.log(name,email,password)

        await createUserWithEmailAndPassword(email,password);
        console.log("update")

        navigate('/')
        
    }
    return (
        <div className='container '>
            <h2 className='text-center'>Please Register</h2>
            <div className='w-50 mx-auto'>
                <form onSubmit={handleRegister} className='d-flex flex-column gap-2'>
                    <input type="text" name="name" id="name" placeholder='Your Name' />

                    <input type="email" name="email" id="email" placeholder='Email Address' required />

                    <input type="password" name="password" id="pass" placeholder='Password' required />

                    <input type="submit" value='Signup' />
                </form>
            </div>


        </div>
    );
};

export default Register;