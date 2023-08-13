import React, { Component, Fragment } from 'react';
import ThumbLogin from '../../../assets/thumb/thumb-login.png';
import LoginForm from '../../../components/form/login';

class Login extends Component {
    render() {
        return (
            <Fragment>
                <main>
                    <div className="max-w-md mx-auto my-12 bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
                        <div className="md:flex md:flex-row">
                            <div className="bg-blue-700 hidden md:flex md:flex-col md:justify-center md:items-center bg-blue h-100">
                                <img src={ThumbLogin} alt="" />
                                <div className="text-lg text-white">Don’t Forget</div>
                                <div className="text-white">Beautiful sunsets need cloudy skies</div>
                            </div>
                            <div className="px-8 py-5 md:w-[44rem]">
                                <div className="md:text-left text-center uppercase tracking-wide text-sm text-indigo-500 font-semibold text-4xl">KPB</div>
                                <div className="md:text-left text-center pt-5 tracking-wide text-sm text-black font-bold text-2xl">Sign In</div>
                                <p className="md:text-left text-center mt-2 text-slate-500">Enter your credentials to access your account</p>

                                                                
                                <div className="pt-5">
                                    <LoginForm />
                                </div>


                            </div>
                        </div>
                    </div>
                </main>
            </Fragment>
        )
    }
}

export default Login;
