import React, { useState } from 'react';
import GenderCheckBox from './GenderCheckBox';
import { Link } from 'react-router-dom';
import useSignUp from '../../hooks/useSignUp';

function SignUp() {

  const [inputs, setInputs] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: ""
  })

  const { loading, signup } = useSignUp();

  const handleGenderCheckBoxChange = (gender) => {
    setInputs({ ...inputs, gender });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(inputs);
  }


  return (
    <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
      <div className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
        <h1 className='text-3xl font-semibold text-center text-gray-300'>
          SignUp
          <span className='text-red-500'>问诊系统</span>
        </h1>

        <form onSubmit={handleSubmit}>
          <div>
            <label className='label p-2'>
              <span className='text-base label-text' >full name</span>
            </label>
            <input type='text' className='w-full input input-bordered h-10'
              value={inputs.fullName}
              onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })}></input>
          </div>

          <div>
            <label className='label p-2'>
              <span className='text-base label-text'>Username</span>
            </label>
            <input type='text' className='w-full input input-bordered h-10'
              value={inputs.username}
              onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
            ></input>
          </div>

          <div>
            <label className='label p-2'>
              <span className='text-base label-text'>Password</span>
            </label>
            <input type='password' className='w-full input input-bordered h-10'
              value={inputs.password}
              onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
            ></input>
          </div>

          <div>
            <label className='label p-2'>
              <span className='text-base label-text'>Confirm Password</span>
            </label>
            <input type='password' className='w-full input input-bordered h-10'
              value={inputs.confirmPassword}
              onChange={(e) => setInputs({ ...inputs, confirmPassword: e.target.value })}
            ></input>
          </div>

          <GenderCheckBox onCheckBoxChange={handleGenderCheckBoxChange} selectedGender={inputs.gender}></GenderCheckBox>

          <Link to='/login' className="link link-hover hover:underline hover:text-red-600 mt-2 inline-block">已有账号，前往登陆。</Link>

          <div>
            <button className='btn btn-block btn-sm mt-2 border border-slate-700' type="submit">Sign Up</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SignUp