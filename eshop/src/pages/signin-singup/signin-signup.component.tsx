import React from 'react'
import './signin-signup.styles.scss'
import { Signin } from '../../components/signin/signin.component'
import { Signup } from '../../components/common/sign-up/sign-up.component'

export const SigninSignupPage = () => {
    return (
        <div className="sign-in-sign-up">
            <Signin></Signin>

            <Signup></Signup>
        </div>
    )
}
