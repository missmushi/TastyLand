import React from "react";


const LoginForm= (props)  => {
  const {
    email, 
    setEmail, 
    password, 
    setPassword, 
    handleLogin, 
    handleSignup, 
    hasAccount, 
    setHasAccount, 
    emailError, 
    passwordError,
  } = props;
  return (
      <section className="login">
      <div class="container" data-aos="fade-up">
      <div class="text-center">  
        <div class="section-title">
            <p>Sign in</p>
            <br />
          
        <div className="loginContainer">
          <h2>Email</h2>
          <input 
            type="text" 
            placeholder="Enter Email"
            autoFocus required value={email} 
            onChange={(e) => setEmail(e.target.value)} 
          />
          <p className="errorMsg">{emailError}</p>
          <br/>
          <h2>Password</h2>
          <input 
            type="password" 
            placeholder="Enter Password"
            autoFocus required value={password} 
            onChange={(e) => setPassword(e.target.value)} 
          />
          <p className="errorMsg">{passwordError}</p>
          <br />
          <div className="btnContainer">
          
              
              <button onClick={handleLogin}>Sign in</button>
              <br /> <br />
           
            </div>
          </div>
        </div>
        </div>
        </div>
      </section>
    )
  }


export default LoginForm