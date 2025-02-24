import React from "react";
import { Link } from "react-router-dom";

let GoogleImg = "https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.m.wikipedia.org%2Fwiki%2FFile%3AGoogle_2015_logo.svg&psig=AOvVaw0CefxJZ6v1JJSy1--hoblr&ust=1740417216573000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCJCws8Ol2osDFQAAAAAdAAAAABAE";


function StepAuthentication (){
    
        return(
            <div className="col-lg-6 d-flex justify-content-center align-items-center border-0 rounded-lg auth-h100">
                <div className="w-100 p-3 p-md-5 card border-0 bg-dark text-light" style={{maxWidth: "32rem"}}>
                    <form className="row g-1 p-3 p-md-4">
                        <div className="col-12 text-center mb-1 mb-lg-5">
                            <img src={GoogleImg} className="w240 mb-4" alt="" />
                            <h1>Verification</h1>
                            <span>We sent a verification code to your email. Enter the code from the email in the field below.</span>
                        </div>
                        <div className="col">
                            <div className="mb-2">
                                <input type="email" className="form-control form-control-lg text-center" placeholder="-" />
                            </div>
                        </div>
                        <div className="col">
                            <div className="mb-2">
                                <input type="email" className="form-control form-control-lg text-center" placeholder="-" />
                            </div>
                        </div>
                        <div className="col">
                            <div className="mb-2">
                                <input type="email" className="form-control form-control-lg text-center" placeholder="-" />
                            </div>
                        </div>
                        <div className="col">
                            <div className="mb-2">
                                <input type="email" className="form-control form-control-lg text-center" placeholder="-" />
                            </div>
                        </div>
                        <div className="col-12 text-center mt-4">
                            <Link to={process.env.PUBLIC_URL+"/"} title="" className="btn btn-lg btn-block btn-light lift text-uppercase">Verify my account</Link>
                        </div>
                        <div className="col-12 text-center mt-4">
                            <span className="text-muted">Haven't received it? <Link to="/" className="text-secondary">Resend a new code.</Link></span>
                        </div>
                    </form>
                    
                </div>
            </div>
        )
    }


export default StepAuthentication;