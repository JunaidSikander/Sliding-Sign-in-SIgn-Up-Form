import React, {createRef} from 'react'
import {Grid, Typography} from "@mui/material";

const LoginForm = () => {

    const container = createRef();

    const onSignUp = () => container.current.classList.add("right-panel-active");
    const onSignIn = () => container.current.classList.remove("right-panel-active");

    const handleSignButton = (button) => alert(`${button} is Clicked`);

    return (
        <Grid className="container" id="container" ref={container}>
            <Grid item className="form-container sign-up-container">
                <form action="#">
                    <h1>Create Account</h1>
                    <Grid item className="social-container">
                        <a href="/#" className="social"><i className="fab fa-facebook-f"/></a>
                        <a href="/#" className="social"><i className="fab fa-google-plus-g"/></a>
                        <a href="/#" className="social"><i className="fab fa-linkedin-in"/></a>
                    </Grid>
                    <Typography variant='span'>or use your email for registration</Typography>
                    <input type="text" placeholder="Name"/>
                    <input type="email" placeholder="Email"/>
                    <input type="password" placeholder="Password"/>
                    <button onClick={() => handleSignButton('Sign up')}>Sign Up</button>
                </form>
            </Grid>
            <Grid item className="form-container sign-in-container">
                <form action="#">
                    <h1>Sign in</h1>
                    <div className="social-container">
                        <a href="/#" className="social"><i className="fab fa-facebook-f"/></a>
                        <a href="/#" className="social"><i className="fab fa-google-plus-g"/></a>
                        <a href="/#" className="social"><i className="fab fa-linkedin-in"/></a>
                    </div>
                    <span>or use your account</span>
                    <input type="email" placeholder="Email"/>
                    <input type="password" placeholder="Password"/>
                    <a href="/#">Forgot your password?</a>
                    <button onClick={() => handleSignButton('Sign in')}>Sign In</button>
                </form>
            </Grid>
            <Grid item className="overlay-container">
                <Grid item className="overlay">
                    <div className="overlay-panel overlay-left">
                        <h1>Welcome Back!</h1>
                        <p>To keep connected with us please login with your personal info</p>
                        <button className="ghost" id="signIn" onClick={onSignIn}>Sign In</button>
                    </div>
                    <div className="overlay-panel overlay-right">
                        <h1>Hello, Friend!</h1>
                        <p>Enter your personal details and start journey with us</p>
                        <button className="ghost" id="signUp" onClick={onSignUp}>Sign Up</button>
                    </div>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default LoginForm