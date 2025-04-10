import React from 'react'
import { NavLink } from 'react-router-dom'

const Signup = () => {
  return (
    <>
    <div className='flex items-center justify-center my-20'>
        <fieldset className="fieldset w-xs bg-base-200 border border-base-300 p-4 rounded-box">
            <legend className="fieldset-legend">Sign up</legend>

            <label className="fieldset-label">Full Name</label>
            <input type="text" className="input" placeholder="Full Name" />

            <label className="fieldset-label">Email</label>
            <input type="email" className="input" placeholder="Email" />

            <label className="fieldset-label">Password</label>
            <input type="password" className="input" placeholder="Password" />
            <a className="link link-neutral">Forget Password?</a>
            <button className="btn btn-neutral mt-4">Login</button>

            <span>already have an account? <NavLink className="text-[#19D3AE]" to="/login">Log in to your account</NavLink></span>
          

            <div className="divider">OR</div>
            {/* Google */}
            <button className="btn bg-white text-black border-[#e5e5e5]">
                <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                Login with Google
            </button>
        </fieldset>
    </div>
</>
  )
}

export default Signup