import React, { useState } from "react";
import { IloginFormValues } from "../../models/login";
import { Form, Field } from "react-final-form";
import { TextInput2 } from "../common/controls/textinput/textinput2.component";
import { CustomButton } from "../common/controls/button/button.component";
import './signin.styles.scss'

export const Signin: React.FC = () => {
  const handleSubmitForm = (values: IloginFormValues) => {
    console.log(values);
  };

  return (
    <div className="signin">
      <h1>Already have an account</h1>
      <span>Singin with your email and password</span>
      <Form
        onSubmit={handleSubmitForm}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <div>
              
                {/* <Field name="email" type='input' component='input' placeholder="email" />
                <label
          className={`${input.value.length ? "shrink" : ""} form-input-label`}>Email</label> */}
        
              <Field name="email" type='input' label='Email' component={TextInput2} placeholder="email" />
              <Field name="password" type="password" label="Password" component={TextInput2} placeholder="password" />              
              <CustomButton type="submit">Signin</CustomButton>
            </div>
          </form>
        )}
      />
    </div>
  );
};
