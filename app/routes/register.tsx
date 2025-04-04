import React from 'react'
import { Link } from 'react-router'
import type { z } from 'zod';
import { useForm } from 'react-hook-form';
import { registerSchema } from '~/schema/auth'
import { zodResolver } from '@hookform/resolvers/zod';
import { useLoginMutation } from '~/services/auth';

type FormData = z.infer<typeof registerSchema>;


const Register = () => {
    const [registerMutation, loginResponse]= useLoginMutation()

    const { register,  handleSubmit, formState: { errors }, } = useForm<FormData>({ resolver: zodResolver(registerSchema), });

    const onSubmit = async (data: FormData) => {
        console.log("Form Submitted", data);
        const response = await registerMutation(data)
        console.log(response)
        console.log(loginResponse);
        if(loginResponse.isError){
            console.log(loginResponse.error);
            
        }
        
        

    };
    return (
        <div className='flex flex-col  p-8 justify-start w-full item-start just gap-4'>
            <h3 className="text-lg font-semibold">Register </h3>
            <form onSubmit={handleSubmit(onSubmit)}>
            <label className='block text-gray-500'>Name
                    <input {...register("name")} type="text" name="name" id="name" placeholder='john dow' className='mt-1 input bg-purple-50 w-full block rounded-md outline-purple-100 ' />
                </label>
                {errors.name && <p className='text-red-500 text-sm'> {errors.name.message} </p>}

                <label className='block text-gray-500'>Email
                    <input {...register("email")} type="email" name="email" id="email" placeholder='john.mwas@techvault.com' className='mt-1 input bg-purple-50 w-full block rounded-md outline-purple-100 ' />
                </label>
                {errors.email && <p className='text-red-500 text-sm'> {errors.email.message} </p>}

                <label className='block text-gray-500 mt-4'>Password
                    <input {...register("password")} type="password" name="password" id="password" placeholder='*************' className='mt-1 input bg-purple-50 w-full block rounded-md outline-purple-100 ' />
                </label>
                {errors.password && <p className='text-red-500 text-sm'> {errors.password.message} </p>}
                
                <label className='block text-gray-500 mt-4'>Confirm Password
                    <input {...register("confirmPassword")} type="password" name="confirmPassword" id="confirmPassword" placeholder='*************' className='mt-1 input bg-purple-50 w-full block rounded-md outline-purple-100 ' />
                </label>
                {errors.confirmPassword && <p className='text-red-500 text-sm'> {errors.confirmPassword.message} </p>}

                <div className="w-full flex justify-between items-center mt-4">
                   
                    <Link to={'/login'} className='underline text-blue-500'>Login</Link>
                </div>
                <button className='btn btn-primary w-full px-3 py-2 mt-8 font-semibold text-gray-50'>Login</button>
            </form>
        </div>
    )
}

export default Register