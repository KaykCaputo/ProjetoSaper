import React from 'react'
import Helmet from 'react-helmet'
import './loginpage.css'

export default function LoginPage(){
    return (
    <html>
    <Helmet>
    <meta charSet='utf-8'/>
    <meta http-equiv='X-UA-Compatible' content='IE=edge'/>
    <title>Hospital Beds</title>
    <meta name='viewport' content='width=device-width, initial-scale=1'/>
    <link rel='stylesheet' type='text/css' media='screen' href='./loginpage.css'/>
    <script src='main.js'></script>
    </Helmet>
    <body className='loginbody'>
        <div id="card">
            <div id="card-content">
            <div id="card-title">
                <h2>Welcome Back</h2>
                <div className="underline-title"></div>
            </div>
            <form method="post" className="form">
                <label htmlFor="user-email" style={{paddingTop:'13px'}}>
                    &nbsp;Email
                </label>
                <input id="user-email" className="form-content" type="email" name="email" autoComplete="on" required />
                <div className="form-border"></div>
                <label htmlFor="user-password" style={{paddingTop:'22px'}}>&nbsp;Password
                </label>
                <input id="user-password" className="form-content" type="password" name="password" required />
                <div className="form-border"></div>
                <a href="#">
                <legend id="forgot-pass">Forgot password?</legend>
                </a>
                <input id="submit" type="submit" name="submit" value="LOGIN" />
                <a href="#" id="signup">Don't have an Account? Sign Up</a>
            </form>
            </div>
        </div>
    </body>
    </html>
    )
}