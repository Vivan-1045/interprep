import React from 'react'
import { Link } from 'react-router-dom';

const Login = () =>{

const handlechange = ()=>{

}

  return (
    <div className="max-w-lg mx-auto bg-purple-300 p-8 rounded-lg shadow-lg mt-20 form flex flex-col">
      <form>
        <div>
            <div>
            <h1 className="text-3xl font-bold mb-12 underline">Login Here</h1>
        </div>
        <p className="mt-2 text-center text-base text-black/60">
           Create new account here?&nbsp;
            <Link
              to = '/sign-up'
              className="font-medium text-primary transition-all duration-200 hover:underline"
            >
              SignUp
            </Link>
          </p>
          <div className="mt-3">
            <label className="text-xl font-semibold">User Name</label>
            <input
              type="text"
              name="user"
              placeholder="User name"
              onChange={handlechange}
              className=" mt-3 w-full px-4 py-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
              required
            />
          </div>
          <div className="mt-3">
            <label className="text-xl font-semibold">Mobile no.</label>
            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
              maxLength={12}
              onChange={handlechange}
              className="mt-3 w-full px-4 py-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
              
            />
          </div>
          
          <div className="mt-3">
            <label className="text-xl font-semibold">Password</label>
            <input
              type="password"
              name="password" 
              placeholder="Password"
              onChange={handlechange}
              minLength={8}
              className="mt-3 w-full px-4 py-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
              required
            />
          </div>
        </div>
        <button
          type="submit"
          className="bg-purple-700 text-white px-6 py-2 mt-8 rounded-full text-lg font-semibold hover:bg-blue-700 transition duration-300"
        >
          login
        </button>
      </form>
    </div>
  );
}


export default Login;