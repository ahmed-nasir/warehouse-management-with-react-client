import React from 'react';

const Register = () => {
    const handleRegister = (event)=>{
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.pass.value;
        console.log(name,email,password)

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