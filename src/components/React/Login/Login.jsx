import React from 'react'

import Google from '../../../../public/Google.svg';
import Facebook from '../../../../public/Facebook.svg';
import Email from '../../../../public/Email.svg';
import Padlock from '../../../../public/Padlock.svg';

function Login(props) {
    
    const { hasGoogle, hasFacebook } = props;

    const socialButton = (icon, name, onClick) => {
        return (
            <button type="button" onClick={onClick} className="w-full block bg-white hover:bg-gray-100 focus:bg-gray-100 text-gray-900 font-semibold rounded-lg px-4 py-3 border border-gray-300">
                <div className="flex items-center justify-center">
                <img src={icon} className="w-6 h-6" alt={name} />
                <span className="ml-4">{name}</span>
                </div>
            </button>
        )
    }

    return (
        <section className="flex flex-col md:flex-row h-screen items-center">
            <div
                className="bg-white w-full p-8 md:max-w-md lg:max-w-full md:mx-auto md:mx-0 md:w-1/2 xl:w-1/2 h-screen px-6 lg:px-16 xl:px-12 flex items-center justify-center"
            >
                <div className="w-auto h-100">
                <h1 className="text-xl md:text-2xl font-bold leading-tight mt-12">Login</h1>
                <h2 className="text-sm text-gray-400">See your growth and get consulting support</h2>

                <form className="mt-6" action="#" method="POST">
                    <div>
                        <label className="block text-gray-400">Email</label>
                        <div class="relative mt-2 text-gray-600 focus-within:text-gray-400">
                            <span class="p-4 absolute inset-y-0 left-0 flex items-center ">
                                <img src={Email} className="w-6 h-6" alt='icon email' />
                            </span>
                            <input
                                type="email"
                                name="email"
                                placeholder="Enter your email address"
                                className="w-full pl-12 py-3 rounded-lg border focus:border-blue-500 focus:bg-white focus:outline-none"
                                autofocus
                                autocomplete
                                required
                            />
                        </div>
                    </div>

                    <div className="mt-4">
                        <label className="block text-gray-400">Password</label>
                        <div class="relative mt-2 text-gray-600 focus-within:text-gray-400">
                            <span class="p-4 absolute inset-y-0 left-0 flex items-center ">
                                <img src={Padlock} className="w-6 h-6" alt='icon password' />
                            </span>
                            <input
                                type="password"
                                name="password"
                                placeholder="Enter your password"
                                minlength="6"
                                className="w-full pl-12 py-3 rounded-lg border focus:border-blue-500 focus:bg-white focus:outline-none"
                                required
                            />
                        </div>
                    </div>

                    
                    <hr className="my-6 border-gray-300 w-full" />

                    <div className="flex">
                        {hasFacebook && socialButton(Facebook, "Facebook", ()=> {})}
                        {hasFacebook && hasGoogle ? (<span className="mx-2"></span>): ""} 
                        {hasGoogle && socialButton(Google, "Google", ()=> {})}
                    </div>

                    <button
                        type="submit"
                        className="w-full block bg-indigo-500 hover:bg-indigo-400 focus:bg-indigo-400 text-white font-semibold rounded-lg px-4 py-3 mt-6"
                        >
                        Log In
                    </button>
                </form>

                <p className="mt-8">Not registered yet? <a href="/register" className="text-blue-500 hover:text-blue-700 font-semibold">Create an account</a></p>
                </div>
            </div>

            <div className="bg-indigo-600 hidden lg:block w-full md:w-1/2 xl:w-1/2 h-screen">
                <img src="https://picsum.photos/800/400" alt="" className="w-full h-full object-cover" />
            </div>
        </section>
    )
}

export default Login
