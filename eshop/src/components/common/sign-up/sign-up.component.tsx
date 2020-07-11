import React, { useState } from 'react'
import './sign-up.styles.scss'
import {auth,createUserProfileDocument} from '../../../firebase/firebase.config'
import { ISignupFormValues, SignupFormValues } from '../../../models/login';
import { Form, Field } from 'react-final-form';
import { CustomButton } from '../controls/button/button.component';
import { TextInput2 } from '../controls/textinput/textinput2.component';

export const Signup: React.FC = () => {
    const [signupValues, setFormValues] = useState(new SignupFormValues());

    const handleSubmitForm = async (values: ISignupFormValues) => {
      if(values){
          console.log(values);
          const {email,password,displayName,confirmPassword} = values;
          try {
            var user = await auth.createUserWithEmailAndPassword(email!,password!);
            await createUserProfileDocument(user,{displayName});    
            setFormValues(new SignupFormValues());
          } catch (error) {
              console.log(error);
          }        
      }
    };
  
    return (
      <div className="sign-up">
        <h1>I do not have an account</h1>
        <span>Singup with your email and password</span>
        <Form
          onSubmit={handleSubmitForm}
          initialValues={signupValues}
          render={({ handleSubmit }) => (
            <form className="sign-up-form" onSubmit={handleSubmit}>      
              <div>
                
                  {/* <Field name="email" type='input' component='input' placeholder="email" />
                  <label
            className={`${input.value.length ? "shrink" : ""} form-input-label`}>Email</label> */}
                <Field name="displayName" type='input' label='Display Name' component={TextInput2} placeholder="Display Name" />
                <Field name="email" type='input' label='Email' component={TextInput2} placeholder="email" />
                <Field name="password" type="password" label="Password" component={TextInput2} placeholder="password" />
                <Field name="confirmPassword" type="password" label="Confirm Password" component={TextInput2} placeholder="ConfirmPassword" />

                <div className="buttons">
                <CustomButton type="submit" isGoogleSignIn={false} >Signup</CustomButton>
                </div>
              </div>
            </form>
          )}
        />
      </div>
    );
  };