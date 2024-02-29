import React from 'react';
import { Link } from 'react-router-dom';

function Login() {
    return (
        <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>

            <div className='w-full p-6 rounded-lg shadow-md bg-red-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
                <h1 className='text-3xl font-semibold text-center text-gray-300'>
                    Login
                    <span className='text-red-500'>问诊系统</span>
                </h1>

                <form>
                    <div>
                        <label className='label p-2'>
                            <span className='text-base label-text'>Username</span>
                        </label>
                        <input type="text" placeholder="enter username" className="input input-bordered input-secondary w-full max-w-xs" />
                    </div>

                    <div>
                        <label className='label p-2'>
                            <span className='text-base label-text'>Password</span>
                        </label>
                        <input type="text" placeholder="enter password" className="input input-bordered input-secondary w-full max-w-xs" />
                    </div>

                    <Link to='/signup' className="link link-hover hover:underline hover:text-red-600 mt-2 inline-block">没有账号？前往注册</Link>
                    <div>
                        <button className='btn btn-block btn-sm mt-2'>登录</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login