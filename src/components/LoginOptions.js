import React from 'react'
import google from "../img/google.svg";
import facebook from "../img/facebook.svg";
import twitter from "../img/twitter.svg";
const LoginOptions = () => {
  return (
    <div className="login-Options">
          <div className="loginIcons">
            <div className="icon">
              <img src={google} alt="google" />
            </div>
            <div className="icon">
              <img src={facebook} alt="facebook" />
            </div>
            <div className="icon">
              <img src={twitter} alt="twitter" />
            </div>
          </div>
         <p className="form-Text">
            Don't have an Account? <span>Create new now!</span>
          </p>
          <p className="form-Text">
            By signing up, you are agree with our
            <span className="TandC">Term & Conditions</span>
          </p>
        </div>
  )
}

export default LoginOptions
